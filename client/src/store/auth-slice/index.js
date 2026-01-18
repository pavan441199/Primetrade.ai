import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null,
}

export const registerUser = createAsyncThunk("auth/register", async (formdata) => {
    const response = await axios.post("http://localhost:3000/api/auth/register", formdata, { withCredentials: true })
    return response.data;
})


export const loginUser = createAsyncThunk("auth/login", async (formdata) => {
    const response = await axios.post("http://localhost:3000/api/auth/login", formdata, { withCredentials: true })
    return response.data;
})


export const logoutUser = createAsyncThunk("auth/logout", async () => {
    const response = await axios.post("http://localhost:3000/api/auth/logout", {}, { withCredentials: true })
    return response.data;
})

export const checkAuth = createAsyncThunk("auth/auth", async (formdata) => {
    const response = await axios.get("http://localhost:3000/api/auth/auth", {
        withCredentials: true,
        headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0"
        }
    })
    return response.data;
})


const authslice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
        })
        builder.addCase(registerUser.rejected, (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
        })


        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = !action.payload.success ? false : true;
            state.user = !action.payload.success ? null : action.payload.data.user;
            console.log("action.payload", action.payload.data.user)
        })
        builder.addCase(loginUser.rejected, (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
        })


        builder.addCase(checkAuth.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = !action.payload.success ? false : true;
            state.user = !action.payload.success ? null : action.payload.user;
            console.log("action.payload", action.payload.user)
        })
        builder.addCase(checkAuth.rejected, (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
        })


        builder.addCase(logoutUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
        })
        builder.addCase(logoutUser.rejected, (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
        })
    }
})




export const { setIsAuthenticated, setIsLoading, setUser } = authslice.actions;
export default authslice.reducer;
