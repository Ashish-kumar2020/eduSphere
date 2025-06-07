import React from "react";

const About = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient and shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-teal-50 opacity-70 z-0"></div>
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-teal-100 rounded-full opacity-50"></div>
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-purple-100 rounded-full opacity-60"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Block */}
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug">
              About <span className="text-teal-700">Our Platform</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe in empowering people through knowledge. Our platform
              brings together the best educators and innovative tools to deliver
              world-class learning experiences, anytime and anywhere.
            </p>
            <p className="text-md text-gray-600 mb-6">
              Whether you're looking to enhance your career, explore new
              subjects, or stay updated with the latest in tech and business, we
              have something for you.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-teal-700">500+</span>
                <span className="text-sm text-gray-600">
                  Expert Instructors
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-teal-700">1000+</span>
                <span className="text-sm text-gray-600">Courses Available</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-teal-700">95%</span>
                <span className="text-sm text-gray-600">Satisfaction Rate</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 w-28 h-28 bg-purple-200 rounded-full blur-xl opacity-70"></div>
              <div className="absolute bottom-1/4 left-0 transform -translate-x-1/4 w-20 h-20 bg-teal-200 rounded-full blur-xl opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
