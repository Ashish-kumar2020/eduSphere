const { Router } = require("express");
const { userModel, courseModel } = require("../DB");
const { mongoose, Types } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = Router();

// Signup endpoint
userRouter.post("/signup", async (req, res) => {
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
