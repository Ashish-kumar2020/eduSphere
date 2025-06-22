import { configureStore } from "@reduxjs/toolkit";
import fetchAllCoursesReducer from "../slice/fetchAllCoursesSlice";
import createCourseSlice from "../slice/createCourseSlice";
import fetchAdminCoursesSlice from "../slice/fetchAdminCourses";
import deleteCourseSlice from "../slice/deleteCourseSlice";
import fetchCurrentCourseSlice from "../slice/fetchCurrentCourse";
import editCourseAdminSlice from "../slice/editCourseSlice"
import fetchAdminDetailsSlice from "../slice/fetchAdmindetails"
import fetchUserProfileDetailsSlice from "../slice/fetchUserProfileDetailsSlice";
import fetchUserPurchasedCoursesSlice from "../slice/fetchUserPurchasedCourseSlice";
import userEnrolCourseSlice from "../slice/enrolCourseSlice"

import fetchUserSelectedCourseSlice from "../slice/fetchUserSelectedCourse"
export const store = configureStore({
  reducer: {
    fetchAllCourses: fetchAllCoursesReducer,
    createCourseS: createCourseSlice,
    fetchAllAdminCourse: fetchAdminCoursesSlice,
    deleteAdminCourse: deleteCourseSlice,
    fetchAdminCurrentCourse: fetchCurrentCourseSlice,
    editAdminCurrentCourse: editCourseAdminSlice,
    fetchAdminProfileDetails : fetchAdminDetailsSlice,

    // User
    fetchUserProfileDetails : fetchUserProfileDetailsSlice,
    fetchUSerPurchasedCourses: fetchUserPurchasedCoursesSlice,
    usercoursepurchase: userEnrolCourseSlice,
    fetchUserSelectedCourse: fetchUserSelectedCourseSlice
  },
});
