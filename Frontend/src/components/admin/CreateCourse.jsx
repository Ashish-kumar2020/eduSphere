// src/pages/CreateCoursePage.jsx
import React, { useState } from "react";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCourse = {
      title,
      description,
      thumbnail,
      category,
    };

    console.log("Course Created:", newCourse);

    // TODO: POST to API

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
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Course Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-teal-600 focus:border-teal-600"
                  placeholder="e.g. Introduction to Python"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="4"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-teal-600 focus:border-teal-600"
                  placeholder="Brief description about the course"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Thumbnail URL
                </label>
                <input
                  type="text"
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-teal-600 focus:border-teal-600"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-teal-600 focus:border-teal-600"
                >
                  <option value="">Select Category</option>
                  <option value="Development">Development</option>
                  <option value="Business">Business</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                </select>
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
