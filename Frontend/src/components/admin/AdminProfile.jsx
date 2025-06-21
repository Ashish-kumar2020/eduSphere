import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User, Mail, BookOpen, BadgeCheck, Shield } from "lucide-react";
import { fetchAdminDeatils } from "../../slice/fetchAdmindetails";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { data, isLoading, isError } = useSelector(
    (state) => state.fetchAdminProfileDetails
  );

  useEffect(() => {
    dispatch(fetchAdminDeatils());
  }, [dispatch]);

  const openAdminCourses = ()=>{
    console.log("clicked")
    navigate("/adminHomepage/mycourses")
  }
  if (isLoading)
    return <div className="text-center mt-20 text-lg text-blue-700">Loading profile...</div>;

  if (isError || !data)
    return <div className="text-center mt-20 text-red-500">Failed to load profile.</div>;

  const admin = data.checkForAdminDetails;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10">
          <div className="mb-6 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
              {admin.firstName[0]}
              {admin.lastName[0]}
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              {admin.firstName} {admin.lastName}
            </h2>
            <p className="text-sm text-gray-500">Admin Profile</p>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <ProfileRow icon={<Mail size={18} />} label="Email" value={admin.email} />
            <ProfileRow icon={<BadgeCheck size={18} />} label="Username" value={admin.userName} />
            <ProfileRow onClick={openAdminCourses}  icon={<BookOpen size={18} />} label="Total Courses" value={admin.adminCourses?.length || 0} />
            <ProfileRow icon={<Shield size={18} />} label="Admin ID" value={admin.adminID} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileRow = ({ icon, label, value,onClick }) => (
  <div onClick={onClick} className="cursor-pointer flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-md p-3">
    <div className="text-blue-500 mt-0.5">{icon}</div>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-medium break-all">{value}</p>
    </div>
  </div>
);

export default AdminProfile;
