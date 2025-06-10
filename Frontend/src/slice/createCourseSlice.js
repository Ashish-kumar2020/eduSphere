import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createCourse = createAsyncThunk(
  "admin/createCourse",
  async ({ courseDetails }, { rejectWithValue }) => {
    const token = localStorage.getItem("AdminToken");
    const adminID = localStorage.getItem("AdminID");
    const fullCourseDetails = {
      ...courseDetails,
      adminID,
    };
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL_ADMIN_CREATE_COURSE,
        fullCourseDetails,

        {
          headers: {
            token: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Something went wrong while creating a course"
      );
    }
  }
);

const createCourseSlice = createSlice({
  name: "createCourse",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(createCourse.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(createCourse.rejected, (state, action) => {
      state.isError = false;
    });
  },
});

export default createCourseSlice.reducer;
