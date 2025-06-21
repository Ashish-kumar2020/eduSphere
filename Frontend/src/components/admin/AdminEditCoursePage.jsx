import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { updateCourse } from '../../slice/updateCourseSlice';
import { editAdminCourse } from "../../slice/editCourseSlice"
const AdminEditCoursePage = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.fetchAdminCurrentCourse);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    courseCategory: '',
    courseLevel: '',
    coursePrice: '',
    courseValidatiy: '',
    courseContentDuration: '',
    courseImage: '',
    courseRating: '',
    studentEnrolled: '',
    courseID:"",
    courseAuthorDetail: {
      name: '',
      experience: '',
      bio: '',
    },
  });

  useEffect(() => {
    if (data?.selectedCourse) {
      setFormData(data.selectedCourse);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('author_')) {
      const key = name.split('author_')[1];
      setFormData({
        ...formData,
        courseAuthorDetail: {
          ...formData.courseAuthorDetail,
          [key]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(formData)
    dispatch(editAdminCourse({formData: formData}))
}


  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error loading course data</h1>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="mt-[3.5rem] text-2xl font-bold mb-6 text-center">Edit Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border rounded" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
        <textarea className="w-full p-2 border rounded" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
        <input className="w-full p-2 border rounded" name="courseCategory" value={formData.courseCategory} onChange={handleChange} placeholder="Category" />
        <input className="w-full p-2 border rounded" name="courseLevel" value={formData.courseLevel} onChange={handleChange} placeholder="Level" />
        <input className="w-full p-2 border rounded" name="coursePrice" value={formData.coursePrice} onChange={handleChange} placeholder="Price" type="number" />
        <input className="w-full p-2 border rounded" name="courseValidatiy" value={formData.courseValidatiy} onChange={handleChange} placeholder="Validity" />
        <input className="w-full p-2 border rounded" name="courseContentDuration" value={formData.courseContentDuration} onChange={handleChange} placeholder="Duration (minutes)" type="number" />
        <input className="w-full p-2 border rounded" name="courseImage" value={formData.courseImage} onChange={handleChange} placeholder="Image URL" />
        <input className="w-full p-2 border rounded" name="courseRating" value={formData.courseRating} onChange={handleChange} placeholder="Rating" type="number" />
        <input className="w-full p-2 border rounded" name="studentEnrolled" value={formData.studentEnrolled} onChange={handleChange} placeholder="Students Enrolled" type="number" />

        <h2 className="text-lg font-semibold mt-4">Author Details</h2>
        <input className="w-full p-2 border rounded" name="author_name" value={formData.courseAuthorDetail.name} onChange={handleChange} placeholder="Author Name" />
        <input className="w-full p-2 border rounded" name="author_experience" value={formData.courseAuthorDetail.experience} onChange={handleChange} placeholder="Author Experience" />
        <input className="w-full p-2 border rounded" name="author_bio" value={formData.courseAuthorDetail.bio} onChange={handleChange} placeholder="Author Bio" />

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Update Course
        </button>
      </form>
    </div>
  );
};

export default AdminEditCoursePage;
