const { Router } = require("express");
const { adminModel, courseModel } = require("../DB");
const { mongoose, Types } = require("mongoose");
const adminRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
adminRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, userName } = req.body;
  try {
    if (
      !firstName ||
      !lastName ||
      !userName ||
      !email ||
      !userName ||
      !password
    ) {
      return res.status(400).json({
        messsage: "All Fields are Mandatory",
      });
    }
    const searchUser = await adminModel.findOne({ email });
    if (searchUser) {
      return res.status(400).json({
        messsage: "User already exists please try to login",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const adminID = new Types.ObjectId();
    const user = await adminModel.create({
      userName,
      firstName,
      lastName,
      email,
      adminID,
      password: hashedPassword,
    });
    return res.status(200).json({
      messsage: "User Account Created Successfully",
      user,
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
adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "All Fields are mandatory",
    });
  }
  try {
    const searchUser = await adminModel.findOne({ email });
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
adminRouter.get("/fetchAdminDetails", async (req, res) => {
  const { adminID } = req.query;
  try {
    if (!adminID) {
      return res.status(400).json({
        message: "All Fields are mandatory",
      });
    }
    const checkForAdminDetails = await adminModel.findOne({ adminID });
    if (!checkForAdminDetails) {
      return res.status(400).json({
        message:
          "No Admin Found with the given ID, Please connect with the Operator",
      });
    }
    res.status(200).json({
      messsage: "Admin Details Fetched Successfully",
      checkForAdminDetails,
    });
  } catch (error) {
    console.log("Error during fetching admin details", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// fetch all Admin Courses
adminRouter.get("/fetchAllAdminCourses", async (req, res) => {
  const { adminID } = req.query;
  try {
    if (!adminID) {
      return res.status(400).json({
        message:
          "AdminID is not passed correctly , Please connect with your Operator",
      });
    }

    const searchForAdmin = await adminModel.findOne({ adminID });
    if (!searchForAdmin) {
      return res.status(400).json({
        message: "No Admin ID Found, Please connect with the operator",
      });
    }

    res.status(200).json({
      messsage: "Fetched All Admin Courses Successfully",
      courses: searchForAdmin.adminCourses,
    });
  } catch (error) {
    console.log("Error during fetching admin courses", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// create a course
adminRouter.post("/createCourse", async (req, res) => {
  const {
    title,
    description,
    courseContent,
    courseLearning,
    courseAuthorDetail,
    coursePrice,
    courseValidatiy,
    courseMaterial,
    courseRequirements,
    courseCategory,
    isCourseActive,
    adminID,
  } = req.body;

  try {
    // Validate required fields
    if (
      !title ||
      !description ||
      !Array.isArray(courseContent) ||
      courseContent.length === 0 ||
      !Array.isArray(courseLearning) ||
      courseLearning.length === 0 ||
      !courseAuthorDetail ||
      typeof courseAuthorDetail !== "object" ||
      coursePrice == null ||
      !courseValidatiy ||
      !Array.isArray(courseMaterial) ||
      courseMaterial.length === 0 ||
      !Array.isArray(courseRequirements) ||
      courseRequirements.length === 0 ||
      !courseCategory ||
      typeof isCourseActive !== "boolean" ||
      !adminID
    ) {
      return res.status(400).json({
        message: "All Fields Are Mandatory and should be in correct format",
      });
    }

    // Check for admin
    const searchForAdmin = await adminModel.findOne({ adminID });
    if (!searchForAdmin) {
      return res.status(400).json({
        message: "Admin ID not valid, Please connect with your operator",
      });
    }

    // Create new course object
    const courseID = new mongoose.Types.ObjectId();
    const newCourse = {
      title,
      description,
      courseContent,
      courseLearning,
      courseAuthorDetail,
      coursePrice,
      courseValidatiy,
      courseMaterial,
      courseRequirements,
      courseCategory,
      isCourseActive,
      courseID,
    };

    searchForAdmin.adminCourses.push(newCourse);
    await searchForAdmin.save();

    res.status(200).json({
      message: "Course Created Successfully",
      courseID,
    });
  } catch (error) {
    console.error("Error during creating course", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// delete a course
adminRouter.delete("/deleteCourse", async (req, res) => {
  const { courseID, adminID } = req.body;

  try {
    if (!courseID || !adminID) {
      return res.status(400).json({
        message: "Please Pass correct ID",
      });
    }

    const searchCourse = await adminModel.findOne({ adminID });
    if (!searchCourse) {
      return res.status(400).json({
        message: "Admin ID is not valid. Please connect with your operator",
      });
    }
    // if admin found
    const courseToBeDeleted = new Types.ObjectId(courseID);
    const findCourse = searchCourse.adminCourses.findIndex((t) =>
      t.courseID.equals(courseToBeDeleted)
    );
    if (findCourse === -1) {
      return res.status(404).json({
        message: "Course not found or already deleted",
      });
    }
    searchCourse.adminCourses.splice(findCourse, 1);
    await searchCourse.save();
    return res.status(200).json({
      message: "Course Deleted Successfully",
    });
  } catch (error) {
    console.error("Error while deleting course:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// Edit a course
adminRouter.put("/course/:id", async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    messsage: "Course Edited Successfully",
  });
});

// fetch selected course
adminRouter.post("/fetchCurrentCourse", async (req, res) => {
  const { courseID, adminID } = req.body;
  try {
    if (!courseID || !adminID) {
      return res.status(400).json({
        message: "All Fields Are mandatory, Please connect with your operator",
      });
    }
    const searchForAdmin = await adminModel.findOne({ adminID });
    if (!searchForAdmin) {
      return res.status(400).json({
        message: "No Admin Found",
      });
    }
    const searchCourse = new Types.ObjectId(courseID);
    const findCourse = searchForAdmin.adminCourses.findIndex((t) =>
      t.courseID.equals(searchCourse)
    );
    if (findCourse === -1) {
      return res.status(400).json({
        message: "Course with this ID is not present",
      });
    }
    const selectedCourse = searchForAdmin.adminCourses[findCourse];
    res.status(200).json({
      messsage: "Fetched Current course",
      selectedCourse,
    });
  } catch (error) {
    console.error("Error while Fetching course:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});
module.exports = {
  adminRouter,
};
