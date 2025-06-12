import { configureStore } from "@reduxjs/toolkit";
import fetchAllCoursesReducer from "../slice/fetchAllCoursesSlice";
import createCourseSlice from "../slice/createCourseSlice";
import fetchAdminCoursesSlice from "../slice/fetchAdminCourses";
export const store = configureStore({
  reducer: {
    fetchAllCourses: fetchAllCoursesReducer,
    createCourseS: createCourseSlice,
    fetchAllAdminCourse: fetchAdminCoursesSlice,
  },
});
