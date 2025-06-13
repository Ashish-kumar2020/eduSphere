// src/pages/CreateCoursePage.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createCourse } from "../../slice/createCourseSlice";
const CreateCourse = () => {
  const [courseDetails, setCourseDetails] = useState({
    title: "",
    description: "",
    coursePrice: "",
    courseValidatiy: "",
    courseContentDuration: "",
    courseRating: "",
    studentEnrolled: "",
    courseCategory: "",
    courseRequirements: "",
    courseAuthorDetail: {
      name: "",
      experience: "",
      bio: "",
    },
    courseLearning: "",
    courseContent: "",
    courseLevel: "",
    courseImage: "",
    courseMaterial: [{ type: "video", title: "", url: "" }],
  });

  const handleMaterialChange = (index, field, value) => {
    const updated = [...courseDetails.courseMaterial];
    updated[index][field] = value;
    setCourseDetails({
      ...courseDetails,
      courseMaterial: updated,
    });
  };

  const addMaterial = () => {
    setCourseDetails({
      ...courseDetails,
      courseMaterial: [
        ...courseDetails.courseMaterial,
        { type: "video", title: "", url: "" },
      ],
    });
  };

  const removeMaterial = (index) => {
    const updated = courseDetails.courseMaterial.filter((_, i) => i !== index);
    setCourseDetails({
      ...courseDetails,
      courseMaterial: updated,
    });
  };

  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector(
    (state) => state.createCourseS
  );

  useEffect(() => {
    if (data?.status === 200) {
      setCourseDetails({
        title: "",
        description: "",
        coursePrice: "",
        courseValidatiy: "",
        courseContentDuration: "",
        courseRating: "",
        studentEnrolled: "",
        courseCategory: "",
        courseRequirements: "",
        courseAuthorDetail: {
          name: "",
          experience: "",
          bio: "",
        },
        courseLearning: "",
        courseContent: "",
        courseLevel: "",
        courseImage: "",
        courseMaterial: [{ type: "video", title: "", url: "" }],
      });
    }
  }, [data?.status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(courseDetails);
    dispatch(createCourse({ courseDetails }));
    alert("Course created successfully!");
  };

  return (
    <>
      <section className="pt-28 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Create a New Course
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/*   Course Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Course Title
                </label>
                <input
                  type="text"
                  value={courseDetails.title}
                  onChange={(e) =>
                    setCourseDetails({
                      ...courseDetails,
                      title: e.target.value,
                    })
                  }
                  required
                  className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="e.g. Introduction to Python"
                />
              </div>

              {/* Course Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={courseDetails.description}
                  onChange={(e) =>
                    setCourseDetails({
                      ...courseDetails,
                      description: e.target.value,
                    })
                  }
                  rows="4"
                  required
                  className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Brief description about the course"
                />
              </div>
              {/* Course Price */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Price
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="number"
                    value={courseDetails.coursePrice}
                    required
                    onChange={(e) =>
                      setCourseDetails({
                        ...courseDetails,
                        coursePrice: e.target.value,
                      })
                    }
                    placeholder="Enter Course Price"
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>

                {/* Course Validatiy */}
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Validatiy
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={courseDetails.courseValidatiy}
                    onChange={(e) =>
                      setCourseDetails({
                        ...courseDetails,
                        courseValidatiy: e.target.value,
                      })
                    }
                    required
                    placeholder="Enter Course Validatiy"
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              {/* Course Content Duration */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Content Duration
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="number"
                    required
                    value={courseDetails.courseContentDuration}
                    onChange={(e) =>
                      setCourseDetails({
                        ...courseDetails,
                        courseContentDuration: e.target.value,
                      })
                    }
                    placeholder="Enter Course Duration"
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>

                {/* Course Rating */}
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Rating
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="number"
                    value={courseDetails.courseRating}
                    onChange={(e) =>
                      setCourseDetails({
                        ...courseDetails,
                        courseRating: e.target.value,
                      })
                    }
                    required
                    placeholder="Enter Course Rating"
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              {/* Students Enrolled */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Students Enrolled
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="number"
                    value={courseDetails.studentEnrolled}
                    onChange={(e) =>
                      setCourseDetails({
                        ...courseDetails,
                        studentEnrolled: e.target.value,
                      })
                    }
                    required
                    placeholder="Enter Number of Students Enrolled"
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
                {/* Course Image */}
                <div className="w-full md:w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    Course Image
                  </label>
                  <input
                    type="text"
                    value={courseDetails.courseImage}
                    onChange={(e) =>
                      setCourseDetails({
                        ...courseDetails,
                        courseImage: e.target.value,
                      })
                    }
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="https://..."
                  />
                </div>
              </div>

              {/* Course category */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Category
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={courseDetails.courseCategory}
                    onChange={(e) =>
                      setCourseDetails({
                        ...courseDetails,
                        courseCategory: e.target.value,
                      })
                    }
                    required
                    placeholder="Select Course Category"
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>

                {/* Course level */}
                <div className="w-full md:w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    Course Level
                  </label>

                  <select
                    value={courseDetails.courseLevel}
                    onChange={(e) =>
                      setCourseDetails({
                        ...courseDetails,
                        courseLevel: e.target.value,
                      })
                    }
                    required
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  >
                    <option value="">Select level of course</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {/* Course Requirements */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Course Requirements
                </label>
                <input
                  type="text"
                  value={courseDetails.courseRequirements}
                  onChange={(e) =>
                    setCourseDetails({
                      ...courseDetails,
                      courseRequirements: e.target.value,
                    })
                  }
                  required
                  className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Prerequisites for this courses. Add Requirements by comma seperated"
                />
              </div>

              {/* Course Material */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Course Materials
                </label>
                {courseDetails.courseMaterial.map((material, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center gap-4 border p-4 rounded-md"
                  >
                    <select
                      value={material.type}
                      onChange={(e) =>
                        handleMaterialChange(index, "type", e.target.value)
                      }
                      className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    >
                      <option value="video">Video</option>
                      <option value="pdf">PDF</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Material Title"
                      value={material.title}
                      onChange={(e) =>
                        handleMaterialChange(index, "title", e.target.value)
                      }
                      className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    />

                    <input
                      type="text"
                      placeholder="Material URL"
                      value={material.url}
                      onChange={(e) =>
                        handleMaterialChange(index, "url", e.target.value)
                      }
                      className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    />

                    {courseDetails.courseMaterial.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeMaterial(index)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addMaterial}
                  className="mt-2 text-teal-700 font-medium hover:underline"
                >
                  + Add More Course Material
                </button>
              </div>

              {/* courseAuthorDetail */}

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Course Author Detail
                </label>

                <div className="flex flex-col md:flex-row md:items-center gap-4 border p-4 rounded-md">
                  <input
                    type="text"
                    placeholder="Author Name"
                    value={courseDetails.courseAuthorDetail.name}
                    onChange={(e) =>
                      setCourseDetails({
                        ...courseDetails,
                        courseAuthorDetail: {
                          ...courseDetails.courseAuthorDetail,
                          name: e.target.value,
                        },
                      })
                    }
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Author experience"
                    value={courseDetails.courseAuthorDetail.experience}
                    onChange={(e) =>
                      setCourseDetails({
                        ...courseDetails,
                        courseAuthorDetail: {
                          ...courseDetails.courseAuthorDetail,
                          experience: e.target.value,
                        },
                      })
                    }
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Author bio"
                    value={courseDetails.courseAuthorDetail.bio}
                    onChange={(e) =>
                      setCourseDetails({
                        ...courseDetails,
                        courseAuthorDetail: {
                          ...courseDetails.courseAuthorDetail,
                          bio: e.target.value,
                        },
                      })
                    }
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              {/* Course Learning */}
              <div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Learning
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={courseDetails.courseLearning}
                    onChange={(e) =>
                      setCourseDetails({
                        ...courseDetails,
                        courseLearning: e.target.value,
                      })
                    }
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="What will student learn from this course"
                  />
                </div>
              </div>

              {/* Course Content*/}
              <div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Content
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={courseDetails.courseContent}
                    onChange={(e) =>
                      setCourseDetails({
                        ...courseDetails,
                        courseContent: e.target.value,
                      })
                    }
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Enter the content of the course"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-700 text-white py-3 rounded-lg font-medium hover:bg-teal-800 transition"
              >
                Create Course
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateCourse;
