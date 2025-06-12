import React from "react";
import { PlusCircle, BookOpenCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminBody = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome, Admin
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Manage your courses, create new ones, and track your content
            performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Create Course */}
          <div
            onClick={() => navigate("createcourse")}
            className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer border border-teal-100 hover:border-teal-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <PlusCircle size={32} className="text-teal-700" />
              <h2 className="text-xl font-semibold text-gray-800">
                Create a Course
              </h2>
            </div>
            <p className="text-gray-600">
              Build a new course with video content, lessons, and descriptions.
            </p>
          </div>

          {/* View My Courses */}
          <div
            onClick={() => navigate("adminCourses")}
            className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer border border-teal-100 hover:border-teal-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <BookOpenCheck size={32} className="text-teal-700" />
              <h2 className="text-xl font-semibold text-gray-800">
                View All Courses
              </h2>
            </div>
            <p className="text-gray-600">
              View and manage all courses you've published or drafted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminBody;
