const { Router } = require("express");
const { userModel, courseModel } = require("../DB");
const { mongoose } = require("mongoose");
const userRouter = Router();

// Signup endpoint
userRouter.post("/signup", async (req, res) => {
  res.status(200).json({
    messsage: "Signup Endpoint",
  });
});

// Login Endpoint
userRouter.post("/signin", async (req, res) => {
  res.status(200).json({
    messsage: "Signin Endpoint",
  });
});

// user profile
userRouter.get("/userDetails/:id", async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    messsage: "Get Loged in user details",
  });
});

// fetch users purchased courses
userRouter.get("/purchasedCourses/:id", async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    messsage: "Get Logged in user purchased courses",
  });
});

// course purchase endpoint
userRouter.post("/enrollCourse", async (req, res) => {
  res.status(200).json({
    messsage: "Enroll to any specific course",
  });
});

// open any selected contes - when user click on any of the purchased courses this will return the detials of that course
userRouter.get("/selectedCourse/:id", async (req, res) => {
  res.status(200).json({
    messsage: "Return selected course",
  });
});

module.exports = {
  userRouter,
};
