import React from "react";
import {
  Code,
  LineChart,
  Palette,
  MessageSquare,
  BookOpen,
  BarChart2,
  Trophy,
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Web Development",
      courses: 153,
      icon: <Code size={32} />,
      color: "bg-blue-50 text-blue-500",
    },
    {
      id: 2,
      name: "Business & Finance",
      courses: 142,
      icon: <LineChart size={32} />,
      color: "bg-green-50 text-green-500",
    },
    {
      id: 3,
      name: "Design & Creative",
      courses: 128,
      icon: <Palette size={32} />,
      color: "bg-purple-50 text-purple-500",
    },
    {
      id: 4,
      name: "Marketing",
      courses: 87,
      icon: <BarChart2 size={32} />,
      color: "bg-orange-50 text-orange-500",
    },
    {
      id: 5,
      name: "Personal Development",
      courses: 92,
      icon: <Trophy size={32} />,
      color: "bg-yellow-50 text-yellow-500",
    },
    {
      id: 6,
      name: "Language Learning",
      courses: 74,
      icon: <MessageSquare size={32} />,
      color: "bg-red-50 text-red-500",
    },
    {
      id: 7,
      name: "Academics",
      courses: 110,
      icon: <BookOpen size={32} />,
      color: "bg-teal-50 text-teal-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of course categories and find the perfect fit
            for your learning goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
            >
              <div
                className={`rounded-full ${category.color} w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">
                {category.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {category.courses} courses
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-transparent border-2 border-gray-300 hover:border-teal-700 text-gray-700 hover:text-teal-700 font-medium px-6 py-3 rounded-lg transition-all duration-300">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
