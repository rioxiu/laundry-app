import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth";

const store = configureStore({
    reducer: {
        auth: authReducer
    },
    devTools: true
})


export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch