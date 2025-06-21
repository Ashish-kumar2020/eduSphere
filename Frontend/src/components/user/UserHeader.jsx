import React from "react";
import { LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";

const UserHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userID");
    navigate("/signin");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-3">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/userHomePage">
          <Logo />
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            to="/userHomePage"
            className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/mycourses"
            className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
          >
            My Courses
          </Link>
          <Link
            to="allCourses"
            className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
          >
            Explore
          </Link>
          <Link
            to="userProfile"
            className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
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

export default UserHeader;
