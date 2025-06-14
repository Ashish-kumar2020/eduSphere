import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const deleteCourse = createAsyncThunk(
  "deleteCourse",
  async ({ courseID }, { rejectWithValue }) => {
    try {
      const adminID = localStorage.getItem("AdminID");
      const token= localStorage.getItem("AdminToken")
      console.log("Calling API with:", { adminID, courseID });

      const response = await axios.delete(
        import.meta.env.VITE_API_URL_DELETE_ADMIN_COURSE,
        {
          data: {
            adminID,
            courseID,
          
          },
          headers: {
            token: token,
          },
        }
      );
      console.log("API success:", response.data);
      return response.data;
    } catch (error) {
      console.error("Delete failed", error);
      return rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);


const deleteCourseSlice = createSlice({
  name: "deleteCourse",
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
