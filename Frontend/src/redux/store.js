import { configureStore } from "@reduxjs/toolkit";
import fetchAllCoursesReducer from "../slice/fetchAllCoursesSlice";

export const store = configureStore({
  reducer: {
    fetchAllCourses: fetchAllCoursesReducer,
  },
});
