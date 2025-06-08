const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const courseSchema = new Schema({
  title: { type: String, required: true }, // course name
  description: { type: String, required: true }, // about course
  courseContent: { type: String, required: true }, // list of topics
  courseLearning: { type: String, required: true }, // what you'll learn
  courseAuthorDetail: {
    name: { type: String, required: true },
    experience: { type: String },
    bio: { type: String },
  },
  coursePrice: { type: Number, required: true }, // price
  courseValidatiy: { type: String, required: true }, // duration
  courseID: { type: ObjectId, required: true },
  courseMaterial: [
    {
      type: { type: String, required: true }, // video/pdf/quiz
      title: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  courseRequirements: { type: String, required: true }, // prerequisites
  courseCategory: { type: String, required: true }, // webdev, etc.
  isCourseActive: { type: Boolean, default: true },
  courseLevel: String,
  courseRating: Number,
  studentEnrolled: Number,
  courseImage: String,
  courseContentDuration: Number,
});

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: { type: String, unique: true },
  password: String,
  userID: ObjectId,
  userCourses: [courseSchema],
});

const adminSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  userName: String,
  password: String,
  adminID: ObjectId,
  adminCourses: [courseSchema],
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("courses", courseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
};
