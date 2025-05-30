import React from "react";
import { Star, Clock, BarChart, Users } from "lucide-react";

const CourseCard = ({ course }) => {
  const {
    title,
    instructor,
    image,
    rating,
    students,
    hours,
    level,
    price,
    originalPrice,
  } = course;

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const levelColor =
    level === "Beginner"
      ? "bg-green-500"
      : level === "Intermediate"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Course Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {discount > 0 && (
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Course Content */}
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span
            className={`inline-block w-2 h-2 rounded-full mr-2 ${levelColor}`}
          ></span>
          <span>{level}</span>
        </div>

        <h3 className="font-bold text-gray-900 text-xl mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          by <span className="font-medium text-purple-700">{instructor}</span>
        </p>

        {/* Course Meta */}
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="text-gray-400 mr-1" />
            <span>{students}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="text-gray-400 mr-1" />
            <span>{hours} hours</span>
          </div>
          <div className="flex items-center">
            <BarChart size={16} className="text-gray-400 mr-1" />
            <span>{level}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-4"></div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-lg text-gray-900">${price}</span>
            {originalPrice && (
              <span className="text-gray-400 line-through ml-2">
                ${originalPrice}
              </span>
            )}
          </div>
          <button className="bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
