const { Router } = require("express");
const { adminModel, courseModel } = require("../DB");
const { mongoose, Types } = require("mongoose");
const adminRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const authentication = require("../middleware/authMiddleware");

adminRouter.post("/signup", async (req, res) => {
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
adminRouter.post("/signin", async (req, res) => {
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
adminRouter.get("/fetchAdminDetails", authentication, async (req, res) => {
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
adminRouter.get("/fetchAllAdminCourses", authentication, async (req, res) => {
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
adminRouter.post("/createCourse", authentication, async (req, res) => {
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

    courseLevel,
    courseRating,
    studentEnrolled,
    courseImage,
    adminID,
    courseContentDuration,
  } = req.body;

  try {
    // Validate required fields
    if (
      !title ||
      !description ||
      !courseContent ||
      courseContent.length === 0 ||
      !courseLearning ||
      courseLearning.length === 0 ||
      !courseAuthorDetail ||
      typeof courseAuthorDetail !== "object" ||
      coursePrice == null ||
      !courseValidatiy ||
      !Array.isArray(courseMaterial) ||
      courseMaterial.length === 0 ||
      !courseRequirements ||
      courseRequirements.length === 0 ||
      !courseCategory ||
      !adminID ||
      !courseLevel ||
      courseRating == null ||
      studentEnrolled == null ||
      !courseImage ||
      courseContentDuration == null
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
      courseID,
      courseLevel,
      courseRating,
      studentEnrolled,
      courseImage,
      courseContentDuration,
    };

    searchForAdmin.adminCourses.push(newCourse);

    await searchForAdmin.save();
    const commonCourse = new courseModel({
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
      courseID,
      courseLevel,
      courseRating,
      studentEnrolled,
      courseImage,
      courseContentDuration,
    });
    // Save courses in Course Schema
    await commonCourse.save();
    res.status(200).json({
      message: "Course Created Successfully",
      courseID,
      status: 200,
    });
  } catch (error) {
    console.error("Error during creating course", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// delete a course
adminRouter.delete("/deleteCourse", authentication, async (req, res) => {
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
adminRouter.put("/editCourse", authentication, async (req, res) => {
  const {
    adminID,
    courseID,
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
  } = req.body;
  try {
    if (!adminID || !courseID) {
      return res.status(400).json({
        message: "All Fields Are mandatory, Please connect with your operator",
      });
    }
    const searchForAdmin = await adminModel.findOne({ adminID });
    if (!searchForAdmin) {
      return res.status(400).json({
        message: "Admin ID Not Found, Please connect with your operator",
      });
    }
    if (title) searchForAdmin.adminCourses.title = title;
    if (description) searchForAdmin.adminCourses.description = description;
    if (courseContent)
      searchForAdmin.adminCourses.courseContent = courseContent;
    if (courseLearning)
      searchForAdmin.adminCourses.courseLearning = courseLearning;
    if (courseAuthorDetail)
      searchForAdmin.adminCourses.courseAuthorDetail = courseAuthorDetail;
    if (coursePrice) searchForAdmin.adminCourses.coursePrice = coursePrice;
    if (courseValidatiy)
      searchForAdmin.adminCourses.courseValidatiy = courseValidatiy;
    if (courseMaterial)
      searchForAdmin.adminCourses.courseMaterial = courseMaterial;
    if (courseRequirements)
      searchForAdmin.adminCourses.courseRequirements = courseRequirements;
    if (courseCategory)
      searchForAdmin.adminCourses.courseCategory = courseCategory;
    if (typeof isCourseActive === "boolean")
      searchForAdmin.adminCourses.isCourseActive = isCourseActive;

    await searchForAdmin.save();
  } catch (error) {
    console.error("Error while Editing course:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
  res.status(200).json({
    messsage: "Course Edited Successfully",
  });
});

// fetch selected course
adminRouter.post("/fetchCurrentCourse", authentication, async (req, res) => {
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
