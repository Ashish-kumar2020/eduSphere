import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { coursesData } from "../data/coursesData";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../slice/fetchAllCoursesSlice";

const categories = ["All", "Development", "Business", "Design", "Marketing"];

const FeaturedCourses = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector(
    (state) => state.fetchAllCourses || {}
  );
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const popularCourses = data?.fetchAllCourses.slice(0, 6);

  return (
    <section className="py-16 bg-white" id="courses">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most popular courses and start your learning journey
            today
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-teal-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses?.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white border-2 border-teal-700 text-teal-700 hover:bg-teal-50 font-medium px-6 py-3 rounded-lg transition-all duration-300">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
