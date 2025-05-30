import React from "react";
import { UserRound, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-purple-50 opacity-70 z-0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-teal-100 rounded-full opacity-60"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Expand Your Skills,
              <span className="text-teal-700"> Embrace Your Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Join thousands of learners worldwide accessing premium courses
              from industry experts. Start your learning journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium">
                <UserRound size={18} />
                <span>User Sign In</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 hover:border-teal-700 text-gray-800 hover:text-teal-700 py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-medium">
                <ShieldCheck size={18} />
                <span>Admin Sign In</span>
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-${
                      200 + num * 100
                    }`}
                  >
                    {/* User avatars would go here in a real app */}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-teal-700">50,000+</span>{" "}
                learners already enrolled
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto max-w-md">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                <img
                  src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Student learning online"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-1/3 -translate-y-1/2 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-70"></div>
              <div className="absolute bottom-1/3 right-0 transform translate-x-1/4 w-24 h-24 bg-teal-200 rounded-full blur-xl opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
