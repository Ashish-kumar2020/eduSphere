import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCourses = createAsyncThunk("fetchAllCourses", async () => {
  const response = await axios.get(
    import.meta.env.VITE_API_URL_GET_ALL_COURSES_ROUTE
  );
  return response.data;
});

const fetchCoursesSlice = createSlice({
  name: "fetchCourses",
  initialState: {
    isLoading: false,
    isError: false,
    data: { fetchAllCourses: [] },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCourses.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default fetchCoursesSlice.reducer;
