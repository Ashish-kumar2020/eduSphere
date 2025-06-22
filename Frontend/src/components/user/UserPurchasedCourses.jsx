import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCourses } from "../../slice/fetchUserPurchasedCourseSlice";
import UserCourseCard from "./UserCourseCard";


const UserPurchasedCourses = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useSelector(
    (state) => state.fetchUSerPurchasedCourses
  );

  useEffect(() => {
    dispatch(fetchUserCourses());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-[40px]" >My Courses</h2>

      {isLoading && <p>Loading courses...</p>}
      {isError && <p className="text-red-500">Error loading courses.</p>}
      {!isLoading && data?.length === 0 && <p>No courses purchased yet.</p>}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((course) => (
          <UserCourseCard key={course.courseID} course={course} />
        ))}
      </div>
    </div>
  );
};

export default UserPurchasedCourses;
