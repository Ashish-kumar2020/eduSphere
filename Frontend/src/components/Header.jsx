import React, { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-primary hover:text-gray-600 font-medium transition-colors"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-primary hover:text-gray-600 font-medium transition-colors"
            >
              Categories
            </a>
            <a
              href="#"
              className="text-primary hover:text-gray-600 font-medium transition-colors"
            >
              For Instructors
            </a>
            <Link
              to="/about"
              className="text-primary hover:text-gray-600 font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <button className="text-primary hover:text-gray-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-primary hover:text-gray-600 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="text-primary hover:text-gray-600 transition-colors">
              <User size={20} />
            </button>
          </div>

          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-6 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-primary hover:text-gray-600 font-medium py-2 transition-colors"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-primary hover:text-gray-600 font-medium py-2 transition-colors"
            >
              Categories
            </a>
            <a
              href="#"
              className="text-primary hover:text-gray-600 font-medium py-2 transition-colors"
            >
              For Instructors
            </a>
            <a
              href="#"
              className="text-primary hover:text-gray-600 font-medium py-2 transition-colors"
            >
              About
            </a>
            <div className="flex items-center space-x-6 py-2">
              <button className="text-primary hover:text-gray-600 transition-colors">
                <Search size={20} />
              </button>
              <button className="text-primary hover:text-gray-600 transition-colors relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="text-primary hover:text-gray-600 transition-colors">
                <User size={20} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
