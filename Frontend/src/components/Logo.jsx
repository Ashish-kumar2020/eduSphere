import React from "react";
import { BookOpen } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <BookOpen className="text-teal-700" size={28} />
      <span className="text-xl font-bold text-gray-900">EduSphere</span>
    </div>
  );
};

export default Logo;
