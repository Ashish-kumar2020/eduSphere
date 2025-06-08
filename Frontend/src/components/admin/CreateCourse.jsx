// src/pages/CreateCoursePage.jsx
import React, { useState } from "react";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [courseMaterial, setCourseMaterial] = useState([
    {
      type: "video",
      title: "",
      url: "",
    },
  ]);
  const [courseAuthorDetails, setCourseAuthorDetails] = useState({
    name: "",
    experience: "",
    bio: "",
  });

  const handleMaterialChange = (index, field, value) => {
    const updated = [...courseMaterial];
    updated[index][field] = value;
    setCourseMaterial(updated);
  };

  const addMaterial = () => {
    setCourseMaterial([
      ...courseMaterial,
      { type: "video", title: "", url: "" },
    ]);
  };

  const removeMaterial = (index) => {
    const updated = courseMaterial.filter((_, i) => i !== index);
    setCourseMaterial(updated);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newCourse = {
      title,
      description,
      thumbnail,
      category,
    };

    console.log("Course Created:", newCourse);

    // Reset form
    setTitle("");
    setDescription("");
    setThumbnail("");
    setCategory("");
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                    required
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
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
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
                    value={courseLevel}
                    onChange={(e) => setCourseLevel(e.target.value)}
                    required
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  >
                    <option value="">Select level of course</option>
                    <option value="Development">Intermediate</option>
                    <option value="Business">Beginner</option>
                    <option value="Design">Advanced</option>
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                {courseMaterial.map((material, index) => (
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

                    {courseMaterial.length > 1 && (
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
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Author experience"
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Author bio"
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
