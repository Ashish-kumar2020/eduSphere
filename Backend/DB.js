const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const courseSchema = new Schema({
  title: String, // course name
  description: String, // About Course
  courseContent: String, // Course Videos
  courseLearning: String, // What will you learn
  courseAuthorDetail: String, // Author Name
  coursePrice: Number, // course price
  courseValidatiy: String, // course active duration
  courseID: ObjectId,
  courseMaterial: String, // What all things will be aviable in this course
  courseRequirements: String, // What all are the prerequsities
  courseCategory: String, // type of course - computer, webdev,andriod
  isCourseActive: Boolean,
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
