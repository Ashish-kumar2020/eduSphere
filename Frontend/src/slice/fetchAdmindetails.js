import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAdminDeatils = createAsyncThunk(
    "fetchAdminDeatils", async (_,{rejectWithValue})=>{
        try {
            const adminID = localStorage.getItem("AdminID");
            const token = localStorage.getItem("AdminToken");
            const response = await axios.get(import.meta.env.VITE_API_URL_ADMIN_PROFILE_URL,{
                headers: {
                    token: token,
                },
                
                    params: {
                        adminID: adminID,
                    }
                
            })
            return response.data
        } catch (error) {
            console.error("Course Update Failed", error);
            return rejectWithValue(error.response?.data || "Unknown error");
        }
    }
)

const fetchAdminDetailsSlice = createSlice({
    name: "fetchAdminDeatils",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchAdminDeatils.pending, (state,action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchAdminDeatils.fulfilled, (state,action)=>{
            state.isLoading = false,
            state.data = action.payload
        })
        builder.addCase(fetchAdminDeatils.rejected, (state,action)=>{
            state.isError = true
        })
    }
})

export default fetchAdminDetailsSlice.reducer