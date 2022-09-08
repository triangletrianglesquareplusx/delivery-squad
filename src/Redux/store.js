import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../Features/authSlice";
import authReducer from "../Features/authSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
