import React, { useEffect } from "react";
import { Star, Clock, BarChart, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedUserCourse } from "../../slice/fetchUserSelectedCourse";

const UserCourseCard = ({ course }) => {
  const {
    title,
    courseAuthorDetail,
    courseCategory,
    courseContentDuration,
    courseID,
    courseImage,
    courseLevel,
    courseRating,
    studentEnrolled,
  } = course;

  const navigate = useNavigate();
  const dispatch = useDispatch()

  // const {data,isLoading,isError} = useSelector((state)=> state.fetchUserSelectedCourse)

  const openCourseDetails = async (e) => {
    // e.stopPropagation();
    try {
      const res =await dispatch(fetchSelectedUserCourse({courseID})).unwrap();
      if(res.status == 200){
        console.log("ROUTED");
        navigate(`/userHomePage/userselectedcourse/${courseID}`);
      }
    } catch (err) {
      console.error("Error while navigating to selected course course:", err);
    }
    
    
  };
  
  
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
      onClick={openCourseDetails}
    >
      {/* Course Image */}
      <div className="relative">
        <img
          src={courseImage}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Course Content */}
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span
            className={`inline-block w-2 h-2 rounded-full mr-2 ${levelColor}`}
          ></span>
          <span>{courseLevel}</span>
        </div>

        <h3 className="font-bold text-gray-900 text-xl mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          by{" "}
          <span className="font-medium text-purple-700">
            {courseAuthorDetail?.name || "Instructor"}
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

        <div className="mt-2">
          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300">
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCourseCard;

// /searchedCourse