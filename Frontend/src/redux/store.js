import { configureStore } from "@reduxjs/toolkit";
import fetchAllCoursesReducer from "../slice/fetchAllCoursesSlice";
import createCourseSlice from "../slice/createCourseSlice";
import fetchAdminCoursesSlice from "../slice/fetchAdminCourses";
import deleteCourseSlice from "../slice/deleteCourseSlice";
import fetchCurrentCourseSlice from "../slice/fetchCurrentCourse";
import editCourseAdminSlice from "../slice/editCourseSlice"
export const store = configureStore({
  reducer: {
    fetchAllCourses: fetchAllCoursesReducer,
    createCourseS: createCourseSlice,
    fetchAllAdminCourse: fetchAdminCoursesSlice,
    deleteAdminCourse: deleteCourseSlice,
    fetchAdminCurrentCourse: fetchCurrentCourseSlice,
    editAdminCurrentCourse: editCourseAdminSlice
  },
});
