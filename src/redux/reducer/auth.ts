'use client'
import { RootState } from "../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


type LoginAuth = {
    user: {
        token: string;
        email: string;
        password: string;
    } | undefined;
    isLogin: boolean;
    isLoading: boolean;
}

const initialState: LoginAuth = {
    user: undefined,
    isLogin: false,
    isLoading: true
}


export const loginAction = createAsyncThunk("auth/login", async (data: { email: string, password: string }, { rejectWithValue }) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URI + "/v1/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        });

        if (!res.ok) {
            throw new Error("Failed to login");
        }

        const response = await res.json();
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state: RootState, action) => {
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            }
        },
        logout: (state: RootState) => {
            return {
                ...state,
                user: undefined,
            }
        }
    },

    extraReducers: (builder) => {
        builder.addCase(loginAction.rejected, (state: RootState) => {
            state.isLoading = true;
        });
        builder.addCase(loginAction.pending, (state: RootState) => {
            state.isLoading = false;
        });
        builder.addCase(loginAction.fulfilled, (state: RootState) => {
            state.isLoading = false;
        });
    }
})