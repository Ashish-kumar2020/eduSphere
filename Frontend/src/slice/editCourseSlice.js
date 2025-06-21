import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const editAdminCourse = createAsyncThunk(
    "editAdminCourse",
    async ({ formData }, { rejectWithValue }) => {
      try {
        const adminID = localStorage.getItem("AdminID");
        const token = localStorage.getItem("AdminToken");
  
        const body = {
          adminID,
          ...formData
        };
  
        const response = await axios.put(
          import.meta.env.VITE_API_URL_EDIT_ADMIN_COURSE,
          body,
          {
            headers: {
              token
            }
          }
        );
  
        return response.data;
      } catch (error) {
        console.error("Course Update Failed", error);
        return rejectWithValue(error.response?.data || "Unknown error");
      }
    }
  );
  

const editCourseAdminSlice = createSlice({
    name: "editAdminCourse",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder)=>{
        builder.addCase(editAdminCourse.pending, (state,action)=>{
            state.isLoading = true
        })
        builder.addCase(editAdminCourse.fulfilled, (state,action)=>{
            state.isLoading = false,
            state.data = action.payload
        })
        builder.addCase(editAdminCourse.rejected,(state,action)=>{
            state.isError = true
        })
    }
})
export default editCourseAdminSlice.reducer;