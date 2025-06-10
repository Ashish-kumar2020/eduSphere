// src/components/AdminHeader.jsx
import React from "react";
import { LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("AdminToken");
    localStorage.removeItem("AdminID");
    navigate("/adminSignup");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-3">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/adminHomepage">
          <Logo />
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            to="/adminHomepage"
            className="text-gray-700 hover:text-teal-700 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="createcourse"
            className="text-gray-700 hover:text-teal-700 font-medium transition-colors"
          >
            Create Course
          </Link>
          <Link
            to="mycourses"
            className="text-gray-700 hover:text-teal-700 font-medium transition-colors"
          >
            My Courses
          </Link>
          <Link
            to="profile"
            className="text-gray-700 hover:text-teal-700 font-medium transition-colors"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-red-500 hover:text-red-600 transition-colors font-medium"
          >
            <LogOut size={18} />
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
