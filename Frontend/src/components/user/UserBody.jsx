import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  PlayCircle,
  UserCog
} from "lucide-react";

const UserBody = () => {
  const navigate = useNavigate();

  const openBrowseCourseSection = ()=>{
    navigate("allCourses")
  }
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome, Learner
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Explore new skills, track your learning journey, and grow with personalized courses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Explore Courses */}
          <div
            onClick={openBrowseCourseSection}
            className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer border border-blue-100 hover:border-blue-300"
          >
            <div className="flex items-center gap-4 mb-4" >
              <BookOpen size={32} className="text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Browse Courses
              </h2>
            </div>
            <p className="text-gray-600">
              Discover courses tailored to your interests and career goals.
            </p>
          </div>

          {/* My Courses */}
          <div
            onClick={() => navigate("userpurchasedcourses")}
            className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer border border-blue-100 hover:border-blue-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap size={32} className="text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                My Courses
              </h2>
            </div>
            <p className="text-gray-600">
              View all your enrolled courses, progress, and certificates.
            </p>
          </div>

          {/* Continue Learning */}
          <div
            onClick={() => navigate("allCourses")}
            className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer border border-blue-100 hover:border-blue-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <PlayCircle size={32} className="text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Explore All Courses
              </h2>
            </div>
            <p className="text-gray-600">
              Pick up right where you left off in your current courses.
            </p>
          </div>

          {/* Profile Settings */}
          <div
            onClick={() => navigate("userProfile")}
            className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer border border-blue-100 hover:border-blue-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <UserCog size={32} className="text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Profile Settings
              </h2>
            </div>
            <p className="text-gray-600">
              Update your personal information and account preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBody;
