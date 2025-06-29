const { Router } = require("express");
const { userModel, courseModel, adminModel } = require("../DB");
const { mongoose, Types } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = Router();
const { z } = require("zod");
const authentication = require("../middleware/authMiddleware");
// Signup endpoint
userRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, userName } = req.body;
  const requiredBody = z.object({
    firstName: z.string().min(4).max(20),
    lastName: z.string().min(4).max(20),
    userName: z.string().min(4).max(20),
    email: z.string().min(4).max(30).email(),
    password: z.string().min(6).max(10),
  });
  const { success, data, error } = requiredBody.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Incorrect Data",
      error: error,
    });
  }
  try {
    if (!firstName || !lastName || !userName || !email || !password) {
      return res.status(400).json({
        messsage: "All Fields are Mandatory",
      });
    }
    const searchUser = await userModel.findOne({ email });
    if (searchUser) {
      return res.status(400).json({
        messsage: "User already exists please try to login",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const userID = new Types.ObjectId();
    const user = await userModel.create({
      userName,
      firstName,
      lastName,
      email,
      userID,
      password: hashedPassword,
    });
    return res.status(200).json({
      messsage: "User Account Created Successfully",
      user,
      status: 200,
    });
  } catch (error) {
    console.log("Error during signup", error);
    if (error.name === "MongoServerError" && error.code === 11000) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// Login Endpoint
userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const requiredBody = z.object({
    email: z.string().min(4).max(20).email(),
    password: z.string().min(6).max(10),
  });
  const { success, data, error } = requiredBody.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Incorrect Data",
      error: error,
    });
  }
  if (!email || !password) {
    return res.status(400).json({
      message: "All Fields are mandatory",
    });
  }
  try {
    const searchUser = await userModel.findOne({ email });
    if (!searchUser) {
      return res.status(400).json({
        messsage: "No User found, Please try to signup",
      });
    }
    const matchPassword = await bcrypt.compare(password, searchUser.password);
    if (!matchPassword) {
      return res.status(400).json({
        messsage: "Wrong Credentials",
      });
    }
    if (matchPassword && searchUser) {
      const token = jwt.sign({ user: searchUser.email }, process.env.JWT_AUTH, {
        expiresIn: "1h",
      });
      return res.status(200).json({
        messsage: "User LoggedIn Successfully",
        searchUser,
        token,
        status: 200,
      });
    }
  } catch (error) {
    console.log("Error during signin", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// user profile
userRouter.get("/userDetails", authentication, async (req, res) => {
  const { userID } = req.query;
  try {
    if (!userID) {
      return res.status(400).json({
        message: "All Fields are mandatory",
      });
    }
    const checkForUserDetails = await userModel.findOne({ userID });
    if (!checkForUserDetails) {
      return res.status(400).json({
        message:
          "No User Found with the given ID, Please connect with the Operator",
      });
    }
    res.status(200).json({
      messsage: "User Details Fetched Successfully",
      checkForUserDetails,
    });
  } catch (error) {
    console.log("Error during fetching user details", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// fetch users purchased courses
userRouter.post("/purchasedCourses", authentication, async (req, res) => {
  const { userID } = req.body;
  try {
    if (!userID) {
      return res.status(400).json({
        message: "User ID is not valid please connect with the operator",
      });
    }
    const searchForUser = await userModel.findOne({ userID });
    if (!searchForUser) {
      return res.status(400).json({
        message: "User ID not valid, Please connect with the operator",
      });
    }
    return res.status(200).json({
      message: "Fetched Users Courses Successfully",
      courses: searchForUser.userCourses,
    });
  } catch (error) {
    console.log("Error during fetching user courses", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});


// POST /enrollCourse
userRouter.post("/enrollCourse", authentication, async (req, res) => {
  const { userID, courseID } = req.body;

  try {
    if (!userID || !courseID) {
      return res.status(400).json({
        message: "All fields are mandatory",
      });
    }

    const user = await userModel.findOne({ userID });
    if (!user) {
      return res.status(400).json({
        message: "No User Found",
      });
    }

    const course = await courseModel.findOne({ courseID }); // Assuming courseModel exists
    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    // Prevent duplicate enrollment
    const alreadyEnrolled = user.userCourses.some((c) =>
      c.courseID.equals(course.courseID)
    );
    if (alreadyEnrolled) {
      return res.status(400).json({
        message: "User already enrolled in this course",
      });
    }

    user.userCourses.push(course);
    await user.save();

    return res.status(200).json({
      message: "Course Purchased Successfully",
      user,
      status: 200
    });
  } catch (error) {
    console.error("Error during Purchasing the course", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});


// open any selected contes - when user click on any of the purchased courses this will return the detials of that course
userRouter.post("/selectedCourse", authentication, async (req, res) => {
  const { userID, courseID } = req.body;

  try {
    if (!userID || !courseID) {
      return res.status(400).json({
        message: "Enter a valid courseID or UserID",
      });
    }

    const searchForUser = await userModel.findOne({ userID });
    if (!searchForUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const searchForCourse = new Types.ObjectId(courseID);

    const findCourse = searchForUser.userCourses.find(
      (course) => course.courseID.equals(searchForCourse)
    );

    if (!findCourse) {
      return res.status(404).json({
        message: "Course not found in user's courses",
      });
    }

    return res.status(200).json({
      message: "Selected Course Fetched Successfully",
      searchedCourse: findCourse,
      status: 200,
    });
  } catch (error) {
    console.error("Error during Purchasing the course", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});


module.exports = {
  userRouter,
};
