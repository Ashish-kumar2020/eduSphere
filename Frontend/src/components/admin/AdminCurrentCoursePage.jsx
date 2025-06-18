import React from 'react';
import { useSelector } from 'react-redux';
import { Star, Users, Clock, BarChart, BadgeCheck } from 'lucide-react';

const AdminCurrentCoursePage = () => {
  const { data, isLoading, isError } = useSelector((state) => state.fetchAdminCurrentCourse);

  if (isLoading)
    return <h1 className="text-center mt-20 text-xl font-semibold text-blue-500 animate-pulse">Fetching course...</h1>;
  if (isError)
    return <h1 className="text-center mt-20 text-red-600 font-bold">Error loading course data.</h1>;
  if (!data)
    return <h1 className="text-center mt-20 text-gray-500">No course found.</h1>;

  const {
    title,
    description,
    courseCategory,
    courseLevel,
    courseRating,
    studentEnrolled,
    courseContentDuration,
    coursePrice,
    courseImage,
    courseAuthorDetail,
    courseMaterial,
    courseLearning,
    courseRequirements,
    courseValidatiy,
  } = data.selectedCourse;

  return (
    <div className="w-full min-h-screen  bg-gradient-to-br from-slate-100 to-slate-300 pb-20">
      {/* Banner */}
      <div className="relative w-full h-80 sm:h-[400px] overflow-hidden">
        <img src={courseImage} alt={title} className="w-full h-full object-cover brightness-75" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10 text-white">
          <h1 className="text-4xl sm:text-5xl font-bold">{title}</h1>
          <p className="mt-2 text-sm">{courseCategory} · {courseLevel}</p>
        </div>
      </div>

      {/* Content Card */}
      <div className="max-w-6xl mx-auto  relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-200">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-gray-700 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-500" size={20} />
              {courseRating}/5
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} />
              {studentEnrolled} Enrolled
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              {courseContentDuration} mins
            </div>
            <div className="flex items-center gap-2">
              <BarChart size={20} />
              {courseValidatiy} Validity
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Course Overview</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Author */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Instructor</h2>
            <div className="text-gray-700 space-y-1">
              <p className="font-bold">{courseAuthorDetail?.name}</p>
              <p>{courseAuthorDetail?.experience} experience</p>
              <p className="italic text-sm">{courseAuthorDetail?.bio}</p>
            </div>
          </div>

          {/* Learning Goals */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">What You’ll Learn</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {courseLearning?.map((item, index) => (
                <li
                  key={index}
                  className="bg-green-50 text-green-800 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium"
                >
                  <BadgeCheck size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              {courseRequirements?.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Materials */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Resources</h2>
            <ul className="space-y-2">
              {courseMaterial?.map((material, index) => (
                <li key={index}>
                  <a
                    href={material.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline hover:text-blue-900"
                  >
                    {material.type.toUpperCase()} — {material.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="text-3xl font-bold text-right text-green-700 mt-8">
            ₹{coursePrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCurrentCoursePage;
