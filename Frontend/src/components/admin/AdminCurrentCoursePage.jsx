import React from 'react';
import { useSelector } from 'react-redux';
import { Star, Users, Clock, BarChart } from 'lucide-react';

const AdminCurrentCoursePage = () => {
  const { data, isLoading, isError } = useSelector((state) => state.fetchAdminCurrentCourse);

  if (isLoading) return <h1 className="text-center mt-10 text-xl">Course is getting fetched...</h1>;
  if (isError) return <h1 className="text-center mt-10 text-red-500">Error loading course!</h1>;
  if (!data) return <h1 className="text-center mt-10 text-gray-500">No Course Found</h1>;

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
  } = data;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
        <img src={courseImage} alt={title} className="w-full h-64 object-cover" />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">{title}</h1>
          <p className="text-sm text-purple-700 font-medium mb-4">{courseCategory} | {courseLevel}</p>

          <p className="text-gray-600 mb-4">{description}</p>

          <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm mb-4">
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-2" size={18} />
              <span>{courseRating} rating</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2" size={18} />
              <span>{studentEnrolled} students enrolled</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2" size={18} />
              <span>{courseContentDuration} minutes</span>
            </div>
            <div className="flex items-center">
              <BarChart className="mr-2" size={18} />
              <span>{courseValidatiy} validity</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Author</h2>
          <p className="text-gray-600 mb-2">
            <strong>{courseAuthorDetail?.name}</strong> — {courseAuthorDetail?.experience} experience
          </p>
          <p className="text-gray-600 italic mb-4">{courseAuthorDetail?.bio}</p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">What you'll learn</h2>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {courseLearning.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Requirements</h2>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {courseRequirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Materials</h2>
          <ul className="mb-4 text-blue-600">
            {courseMaterial.map((material, index) => (
              <li key={index}>
                <a href={material.url} target="_blank" rel="noopener noreferrer" className="underline">
                  {material.type.toUpperCase()}: {material.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="text-xl font-bold text-green-700">Price: ₹{coursePrice}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminCurrentCoursePage;
