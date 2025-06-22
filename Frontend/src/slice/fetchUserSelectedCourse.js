import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSelectedUserCourse = createAsyncThunk("fetchSelectedUserCourse", async({courseID,rejectWithValue})=>{
    try {
        const userID = localStorage.getItem("userID");
        const token = localStorage.getItem("userToken");
        let config = {
            userID,
            courseID
        }
        const response = await axios.post(import.meta.env.VITE_API_URL_USER_SELECTED_COURSE,config,{
            headers:{
                token: token
            }
        })
        return response.data
    } catch (error) {
        console.error("Error while fetching a particluar course", error);
        return rejectWithValue(error.response?.data || "Unknown error");
    }
})

const fetchUserSelectedCourseSlice = createSlice({
    name: "fetchSelectedUserCourse",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchSelectedUserCourse.pending, (state,action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchSelectedUserCourse.fulfilled,(state,action)=>{
            state.isLoading = false,
            state.data = action.payload
        })
        builder.addCase(fetchSelectedUserCourse.rejected, (state,action)=>{
            state.isError = true
        })
    }
})
export default fetchUserSelectedCourseSlice.reducer