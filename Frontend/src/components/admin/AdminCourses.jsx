import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminCourses } from "../../slice/fetchAdminCourses";
import { Star, Clock, BarChart, Users } from "lucide-react";
import CourseCard from "../CourseCard";
const AdminCourses = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector(
    (state) => state.fetchAllAdminCourse
  );

  useEffect(() => {
    dispatch(fetchAdminCourses());
  }, [dispatch]);

  if (isLoading) return <h1>Courses are beign fetched</h1>;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.courses.map((course) => (
          <CourseCard key={course.courseID} course={course} isAdmin={true} />
        ))}
      </div>
    </div>
  );
};

export default AdminCourses;
