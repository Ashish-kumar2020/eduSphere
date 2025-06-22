import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Star, Clock, BarChart, Users, Video, FileText } from "lucide-react";

const UserCourseDetail = () => {
  const { courseID } = useParams();

  const { data, isLoading, isError } = useSelector(
    (state) => state.fetchUserSelectedCourse
  );

  const course = data?.searchedCourse;

  if (isLoading) return <p className="text-center mt-40">Loading...</p>;
  if (isError || !course || course.courseID !== courseID) {
    return (
      <p className="text-center mt-40 text-red-500">
        Error loading course details.
      </p>
    );
  }

  const {
    title,
    courseImage,
    courseLevel,
    courseAuthorDetail,
    courseRating,
    studentEnrolled,
    courseContentDuration,
    courseCategory,
    description,
    courseContent,
    courseLearning,
    coursePrice,
    courseValidatiy,
    courseRequirements,
    courseMaterial,
  } = course;

  const levelColor =
    courseLevel === "Beginner"
      ? "bg-green-500"
      : courseLevel === "Intermediate"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="bg-white max-w-5xl mx-auto rounded-xl overflow-hidden shadow-md mt-10 border border-gray-100 mt-[70px]">
      {/* Image */}
      <img src={courseImage} alt={title} className="w-full h-64 object-cover" />

      <div className="p-6">
        {/* Level Tag */}
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span
            className={`inline-block w-2 h-2 rounded-full mr-2 ${levelColor}`}
          ></span>
          <span>{courseLevel}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>

        {/* Author */}
        <p className="text-gray-600 text-sm mb-4">
          by{" "}
          <span className="font-medium text-purple-700">
            {courseAuthorDetail?.name}
          </span>{" "}
          • {courseAuthorDetail?.experience}
        </p>

        {/* Stats */}
        <div className="flex items-center text-sm text-gray-500 space-x-6 mb-4 flex-wrap">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span>{courseRating}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="text-gray-400 mr-1" />
            <span>{studentEnrolled} enrolled</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="text-gray-400 mr-1" />
            <span>{courseContentDuration} mins</span>
          </div>
          <div className="flex items-center">
            <BarChart size={16} className="text-gray-400 mr-1" />
            <span>{courseCategory}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6">{description}</p>

        {/* Course Content */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            What you’ll learn
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {courseLearning.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Requirements
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {courseRequirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Topics Covered */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Topics Covered
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {courseContent.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
        </div>

        {/* Materials */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Course Material
          </h3>
          <ul className="space-y-2">
            {courseMaterial.map((material) => (
              <li
                key={material.title}
                className="flex items-center text-blue-600 hover:underline"
              >
                {material.type === "video" ? (
                  <Video size={18} className="mr-2" />
                ) : (
                  <FileText size={18} className="mr-2" />
                )}
                <a href={material.url} target="_blank" rel="noopener noreferrer">
                  {material.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Price & Validity */}
        <div className="text-gray-700 text-sm mt-4 border-t pt-4">
          <p>
            <strong>Price:</strong> ₹{coursePrice}
          </p>
          <p>
            <strong>Validity:</strong> {courseValidatiy}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCourseDetail;
