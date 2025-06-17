import React, { useEffect } from "react";
import { Star, Clock, BarChart, Users } from "lucide-react";
import { useDispatch,useSelector } from "react-redux";
import {deleteCourse} from "../slice/deleteCourseSlice"
import { fetchAdminCourses } from "../slice/fetchAdminCourses";
import {fetchCurrentAdminCourse} from "../slice/fetchCurrentCourse";
import {useNavigate} from "react-router-dom"

const CourseCard = ({ course, isAdmin }) => {
  const {
    title,
    courseAuthorDetail,
    courseCategory,
    courseContentDuration,
    courseID,
    courseImage,
    courseLevel,
    coursePrice,
    courseRating,
    studentEnrolled,
  } = course;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteSelectedCourse = async (e) => {
    e.stopPropagation();
    try {
      const res = await dispatch(deleteCourse({ courseID })).unwrap();
      if (res.status === 200) {
        dispatch(fetchAdminCourses());
      }
    } catch (err) {
      console.error("Error deleting course:", err);
    }
  };

 const openSelectedCourse = async (courseID) => {
  try {
    const res = await dispatch(fetchCurrentAdminCourse({ courseID })).unwrap();
    if (res.status === 200) {
      navigate("/adminHomepage/currentCourse");

    }
  } catch (error) {
    console.log("Error in fetching course Details", error);
  }
};

  
  const discount = coursePrice
    ? Math.round(((coursePrice - 100) / coursePrice) * 100)
    : 0;

  const levelColor =
    courseLevel === "Beginner"
      ? "bg-green-500"
      : courseLevel === "Intermediate"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    
    <div
      key={courseID}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 cursor-pointer"
    >
      {/* Course Image */}
      <div className="relative">
        <img
          src={courseImage}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {discount > 0 && (
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Course Content */}
      <div className="p-5" onClick={()=>openSelectedCourse(courseID)}>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span
            className={`inline-block w-2 h-2 rounded-full mr-2 ${levelColor}`}
          ></span>
          <span>{courseLevel}</span>
        </div>

        <h3 className="font-bold text-gray-900 text-xl mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4" >
          by{" "}
          <span className="font-medium text-purple-700">
            {courseAuthorDetail.name}
          </span>
        </p>

        {/* Course Meta */}
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span>{courseRating}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="text-gray-400 mr-1" />
            <span>{studentEnrolled}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="text-gray-400 mr-1" />
            <span>{courseContentDuration} hours</span>
          </div>
          <div className="flex items-center">
            <BarChart size={16} className="text-gray-400 mr-1" />
            <span>{courseLevel}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-4"></div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-lg text-gray-900">
              ${coursePrice}
            </span>
            {coursePrice && (
              <span className="text-gray-400 line-through ml-2">
                ${coursePrice}
              </span>
            )}
          </div>
          {isAdmin ? (
            <>
              <button className="bg-red-700 hover:bg-red-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300" onClick={deleteSelectedCourse}>
                Delete Course
              </button>
            </>
          ) : (
            <button className="bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
