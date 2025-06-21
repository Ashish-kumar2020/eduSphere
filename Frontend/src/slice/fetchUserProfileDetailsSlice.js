import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserProfileDetails = createAsyncThunk("fetchUserProfileDetails", async(_,{rejectWithValue})=> {
    try {
        const userID = localStorage.getItem("userID");
        const token = localStorage.getItem("userToken");
        const response = await axios.get(import.meta.env.VITE_API_URL_USER_PROFILE_DETAILS,{
            params: {
                userID: userID
            },
            
                headers:{
                    token: token
                } 
        })
        return response.data
    } catch (error) {
        console.error("Course Update Failed", error);
        return rejectWithValue(error.response?.data || "Unknown error");
    }
})

const fetchUserProfileDetailsSlice = createSlice({
    name: "fetchUserProfileDetails",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchUserProfileDetails.pending, (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchUserProfileDetails.fulfilled, (state,action)=>{
            state.isLoading = false,
            state.data = action.payload
        })
        builder.addCase(fetchUserProfileDetails.rejected, (state,action)=>{
            state.isError = true
        })
    }
})

export default fetchUserProfileDetailsSlice.reducer