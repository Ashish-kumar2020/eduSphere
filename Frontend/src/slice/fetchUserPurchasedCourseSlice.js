import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserCourses = createAsyncThunk("fetchUserCourses", async(_,{rejectWithValue})=>{
    try {
        const userID = localStorage.getItem("userID");
        const token = localStorage.getItem("userToken");
        const response = await axios.post(import.meta.env.VITE_API_URL_USER_PURCHASED_COURSES,{userID: userID},
            {
                headers:{
                    token: token
                }
            }
        )
        return response.data.courses
        
    } catch (error) {
        console.error("fetch user purchased Course Failed", error);
        return rejectWithValue(error.response?.data || "Unknown error");
    }
})

const fetchUserPurchasedCoursesSlice = createSlice({
    name: "fetchUserCourses",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchUserCourses.pending, (state,action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchUserCourses.fulfilled, (state,action)=>{
            state.isLoading = false,
            state.data = action.payload
        })
        builder.addCase(fetchUserCourses.rejected, (state,action)=>{
            state.isError = true
        })
    }
})

export default fetchUserPurchasedCoursesSlice.reducer