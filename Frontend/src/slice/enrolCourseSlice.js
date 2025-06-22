import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const enrollUserCourse = createAsyncThunk("enrollUserCourse", async({courseID,rejectWithValue})=>{
    try {
        const userID = localStorage.getItem("userID");
        const token = localStorage.getItem("userToken");
        let config = {
            userID,
            courseID
        }
        const response = await axios.post(import.meta.env.VITE_API_URL_USER_ENROLL_COURSE,config,{
            headers:{
                token: token
            }
        })
        return response.data
    } catch (error) {
        console.error("Enrolling to a course Failed", error);
        return rejectWithValue(error.response?.data || "Unknown error");
    }
})

const userEnrolCourseSlice = createSlice({
    name: "enrollUserCourse",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder)=>{
        builder.addCase(enrollUserCourse.pending, (state,action)=>{
            state.isLoading = true
        })
        builder.addCase(enrollUserCourse.fulfilled, (state,action)=>{
            state.isLoading = false,
            state.data = action.payload
        })
        builder.addCase(enrollUserCourse.rejected, (state,action)=>{
            state.isError = true
        })
    }
})

export default userEnrolCourseSlice.reducer