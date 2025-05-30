import React from "react";
import Logo from "./Logo";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              EduSphere is a leading online learning platform offering thousands
              of courses in various categories taught by expert instructors.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Become an Instructor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Career Paths
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  For Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Student Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Learning Street, Education City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>support@edusphere.com</span>
              </li>
            </ul>
            <div className="mt-4 bg-gray-800 rounded-lg p-4">
              <h4 className="text-white text-sm font-medium mb-2">
                Working Hours
              </h4>
              <p className="text-sm">Monday-Friday: 9:00 AM - 8:00 PM</p>
              <p className="text-sm">Weekend: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} EduSphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
