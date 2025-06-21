import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfileDetails } from '../../slice/fetchUserProfileDetailsSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector(
    (state) => state.fetchUserProfileDetails
  );

  useEffect(() => {
    dispatch(fetchUserProfileDetails());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-indigo-100 to-white">
        <p className="text-lg font-medium animate-pulse">Loading profile...</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-red-100 to-white">
        <p className="text-red-600 font-medium">Failed to load profile.</p>
      </div>
    );
  }

  const { firstName, lastName, userName, email, userCourses } = data.checkForUserDetails;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl p-8 transition-transform hover:scale-[1.01]">
        <div className="flex flex-col items-center text-center">
          <img
            src={`https://ui-avatars.com/api/?name=${firstName.trim()}+${lastName}&background=4f46e5&color=fff&size=128`}
            alt="avatar"
            className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-lg"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {firstName.trim()} {lastName}
          </h2>
          <p className="text-sm text-gray-500">@{userName}</p>
        </div>

        <div className="mt-6 space-y-3 text-gray-700 text-sm">
          <div className="flex justify-between">
            <span className="font-semibold">Email:</span>
            <span>{email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Enrolled Courses:</span>
            <span>{userCourses?.length || 0}</span>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full bg-indigo-500 text-white py-2 rounded-xl font-medium hover:bg-indigo-600 transition duration-200">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
