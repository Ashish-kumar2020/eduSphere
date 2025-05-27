// these wil be functional only when user is not logged in
const { Router } = require("express");
const { adminModel, courseModel } = require("../DB");
const { mongoose } = require("mongoose");
const commonRouter = Router();

commonRouter.get("/getAllCourses", async (req, res) => {
  try {
    const fetchAllCourses = await courseModel.find();
    return res.status(200).json({
      message: "All Course fetched Successfully",
      fetchAllCourses,
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

commonRouter.post("/getSelectedCourse", async (req, res) => {
  const { courseID } = req.body;

  try {
    if (!courseID) {
      return res.status(400).json({
        message: "CourseId is not valid. Please connect with your operator",
      });
    }
    const searchCourse = await courseModel.findOne({ courseID });
    if (!searchCourse) {
      return res.status(400).json({
        message: "Course Not Found",
      });
    }

    return res.status(200).json({
      message: "Selected course details",
      searchCourse,
    });
  } catch (error) {}
});

module.exports = {
  commonRouter,
};
