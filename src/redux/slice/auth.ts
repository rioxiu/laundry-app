import axiosInstance from "@/lib/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
    user: {
        name: string;
        email: string;
    } | undefined
    isLoading: boolean;
    isLogin: boolean
}


const initialState: AuthState = {
    user: undefined,
    isLoading: true,
    isLogin: false
}


export const LoginAction = createAsyncThunk(
    'auth/login',
    async (data: { email: string, password: string }, thunkAPI) => {
        try {
            const response = await axiosInstance.post('/login', data)
            return response.data
        } catch (error) {
            throw thunkAPI.rejectWithValue(error)
        }

    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        Login(state, action) {
            state.user = action.payload
            state.isLogin = true
        },
        Logout(state) {
            state.user = undefined
            state.isLogin = false
        },
        setLoading(state, action) {
            state.isLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(LoginAction.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(LoginAction.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.isLogin = true
        })
        builder.addCase(LoginAction.rejected, (state) => {
            state.isLoading = false
        })
    }
})


export const { Login, Logout, setLoading } = authSlice.actions
export default authSlice.reducer