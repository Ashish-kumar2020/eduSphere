// these wil be functional only when user is not logged in
const { Router } = require("express");
const { adminModel } = require("../DB");
const { mongoose } = require("mongoose");
const adminRouter = Router();

adminRouter.get("/getAllCourses", async (req, res) => {
  return res.status(200).json({
    message: "All Course fetched Successfully",
  });
});

adminRouter.get("/getSelectedCourse/:id", async (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    message: "Selected course details",
  });
});
