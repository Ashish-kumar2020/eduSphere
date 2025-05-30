import React from "react";
import { Twitter, Linkedin, Facebook } from "lucide-react";

const instructors = [
  {
    id: 1,
    name: "Dr. Alex Morgan",
    role: "Web Development Expert",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    courses: 12,
    students: 15400,
    rating: 4.8,
    socials: {
      twitter: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 2,
    name: "Prof. Jennifer Lee",
    role: "Data Science Specialist",
    avatar:
      "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300",
    courses: 8,
    students: 12300,
    rating: 4.9,
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Robert Wilson",
    role: "Business Strategy Coach",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    courses: 15,
    students: 18600,
    rating: 4.7,
    socials: {
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 4,
    name: "Sophia Martinez",
    role: "UX/UI Design Expert",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    courses: 10,
    students: 14200,
    rating: 4.8,
    socials: {
      twitter: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
];

const Instructors = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Top Instructors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts with years of experience and proven
            teaching methods
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Social icons */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center space-x-4">
                    {instructor.socials.twitter && (
                      <a
                        href={instructor.socials.twitter}
                        className="text-white hover:text-teal-300 transition-colors"
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                    {instructor.socials.linkedin && (
                      <a
                        href={instructor.socials.linkedin}
                        className="text-white hover:text-teal-300 transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {instructor.socials.facebook && (
                      <a
                        href={instructor.socials.facebook}
                        className="text-white hover:text-teal-300 transition-colors"
                      >
                        <Facebook size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-900">
                  {instructor.name}
                </h3>
                <p className="text-teal-700 text-sm mb-3">{instructor.role}</p>

                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="border-r border-gray-100">
                    <div className="font-bold text-gray-900">
                      {instructor.courses}
                    </div>
                    <div className="text-gray-500">Courses</div>
                  </div>
                  <div className="border-r border-gray-100">
                    <div className="font-bold text-gray-900">
                      {instructor.students.toLocaleString()}
                    </div>
                    <div className="text-gray-500">Students</div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {instructor.rating}
                    </div>
                    <div className="text-gray-500">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-700 hover:bg-teal-800 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Become an Instructor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
