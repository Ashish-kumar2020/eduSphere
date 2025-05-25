const { Router } = require("express");
const { adminModel, courseModel } = require("../DB");
const { mongoose, Types } = require("mongoose");
const adminRouter = Router();
const bcrypt = require("bcrypt");

adminRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, userName } = req.body;
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
    password: hashedPassword,
  });
  return res.status(200).json({
    messsage: "User Account Created Successfully",
    user,
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
