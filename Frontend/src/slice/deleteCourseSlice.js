import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const deleteCourse = createAsyncThunk(
  "deleteCourse",
  async (courseID) => {
    const adminID = localStorage.getItem("AdminID");
    let config = {
      adminID,
      courseID,
    };
    const response = await axios.delete(
      process.env.VITE_API_URL_DELETE_ADMIN_COURSE,
      {
        data: {
          adminID,
          courseID,
        },
      }
    );
    return response.data;
  }
);

const deleteCourseSlice = createSlice({
  name: "deleteCOurse",
  initialState: {
    isError: false,
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(deleteCourse.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(deleteCourse.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default deleteCourseSlice.reducer;
