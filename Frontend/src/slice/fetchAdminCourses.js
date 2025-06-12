import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAdminCourses = createAsyncThunk(
  "fetchAllAdminCourses",
  async () => {
    const adminID = localStorage.getItem("AdminID");
    const token = localStorage.getItem("AdminToken");
    const response = await axios.get(
      import.meta.env.VITE_API_URL_FETCH_ADMIN_COURSE,
      {
        headers: {
          token: token,
        },
        params: {
          adminID: adminID,
        },
      }
    );
    return response.data;
  }
);

const fetchAdminCoursesSlice = createSlice({
  name: "fetchAdminCourses",
  initialState: {
    isError: false,
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdminCourses.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAdminCourses.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAdminCourses.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default fetchAdminCoursesSlice.reducer;
