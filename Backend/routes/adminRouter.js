const { Router } = require("express");
const { adminModel, courseModel } = require("../DB");
const { mongoose } = require("mongoose");
const adminRouter = Router();

adminRouter.post("/signup", async (req, res) => {
  res.status(200).json({
    messsage: "Signup Endpoint",
  });
});

// Login Endpoint
adminRouter.post("/signin", async (req, res) => {
  res.status(200).json({
    messsage: "Signin Endpoint",
  });
});

// user profile
adminRouter.post("/fetchUserDetails", async (req, res) => {
  res.status(200).json({
    messsage: "Get Loged in user details",
  });
});

// fetch all Admin Courses
adminRouter.post("/fetchAllAdminCourses", async (req, res) => {
  res.status(200).json({
    messsage: "Get all admin courses",
  });
});

// create new course
adminRouter.post("/createCourse", async (req, res) => {
  res.status(200).json({
    messsage: "Course Created Successfully",
  });
});

// delete a course
adminRouter.delete("/course/:id", async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    messsage: "Delete a course",
  });
});

// Edit a course
adminRouter.put("/course/:id", async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    messsage: "Course Edited Successfully",
  });
});

// fetch selected course
adminRouter.get("/fetchCurrentCourse/:id", async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    messsage: "Fetched Current course",
  });
});
module.exports = {
  adminRouter,
};
