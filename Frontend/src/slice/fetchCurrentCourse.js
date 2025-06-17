import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCurrentAdminCourse = createAsyncThunk("fetchCurrentCourses", async ({courseID})=>{
    try {
        const adminID = localStorage.getItem("AdminID");
        const token = localStorage.getItem("AdminToken");
        const config = {
            adminID,
            courseID
        }
        console.log(config)
        const response = axios.post(import.meta.env.VITE_API_URL_GET_ADMIN_CURRENT_COURSE,config,{
            headers: {
                token: token
            }
        })
        console.log("FETCHED Current Course", response.data);
        return (await response).data;
    } catch (error) {
        console.error("Course Fetched Failed", error);
      return rejectWithValue(error.response?.data || "Unknown error");
    }
    
})

const fetchCurrentCourseSlice = createSlice({
    name: "fetchCurrentCourses",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCurrentAdminCourse.pending, (state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchCurrentAdminCourse.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchCurrentAdminCourse.rejected, (state, action)=>{
            state.isError = true
        })
    }
});
export default fetchCurrentCourseSlice.reducer