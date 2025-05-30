import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "UX Designer",
    avatar:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
    content:
      "The web development bootcamp completely transformed my career. I went from knowing almost nothing about coding to landing a job as a junior developer in just 4 months!",
    course: "Complete Web Development Bootcamp",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Manager",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    content:
      "The digital marketing course gave me practical skills I could apply immediately. The instructor's real-world examples made complex concepts easy to understand.",
    course: "Digital Marketing Masterclass",
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Startup Founder",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    content:
      "As someone launching a business, the entrepreneurship course provided invaluable insights. The community of fellow founders continues to be a great support network.",
    course: "Entrepreneurship: Start Your Business",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600">
            Success stories from our community of learners around the world
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute -left-8 top-10 text-teal-100">
            <Quote size={120} strokeWidth={0.5} />
          </div>
          <div className="hidden md:block absolute -right-8 bottom-10 text-teal-100">
            <Quote size={120} strokeWidth={0.5} />
          </div>

          <div className="relative z-10 bg-white md:bg-transparent py-8 px-4 md:px-0">
            <div className="transition-opacity duration-500 flex flex-col items-center">
              <div className="mb-6 w-20 h-20 rounded-full overflow-hidden border-4 border-teal-100">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-lg md:text-xl text-gray-700 text-center mb-6 italic">
                "{testimonials[activeIndex].content}"
              </p>

              <div className="text-center">
                <h4 className="font-bold text-gray-900">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-sm text-gray-500 mb-1">
                  {testimonials[activeIndex].role}
                </p>
                <p className="text-sm text-teal-700">
                  Student of {testimonials[activeIndex].course}
                </p>
              </div>

              <div className="flex space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-teal-700 w-6" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 md:px-0">
            <button
              onClick={prevTestimonial}
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md text-gray-600 hover:text-teal-700 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md text-gray-600 hover:text-teal-700 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
