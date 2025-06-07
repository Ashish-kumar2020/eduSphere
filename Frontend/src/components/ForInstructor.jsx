// src/pages/ForInstructors.jsx
import React from "react";
import { BookOpenCheck, DollarSign, Users } from "lucide-react";

const ForInstructors = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Teach. Inspire. Earn.
          </h1>
          <p className="text-lg text-gray-600">
            Join a community of passionate educators and share your knowledge
            with learners worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm text-center hover:shadow-md transition">
            <BookOpenCheck size={40} className="mx-auto text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Create Courses Easily
            </h3>
            <p className="text-gray-600 text-sm">
              Use our intuitive tools to build high-quality courses and quizzes.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow-sm text-center hover:shadow-md transition">
            <DollarSign size={40} className="mx-auto text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Earn Passive Income
            </h3>
            <p className="text-gray-600 text-sm">
              Get paid for every student who enrolls in your course.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow-sm text-center hover:shadow-md transition">
            <Users size={40} className="mx-auto text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Grow Your Audience
            </h3>
            <p className="text-gray-600 text-sm">
              Reach a global audience of learners and build your personal brand.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-teal-700 text-white py-3 px-6 rounded-lg shadow hover:bg-teal-800 transition-all duration-300">
            Start Teaching Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForInstructors;
