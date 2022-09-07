import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "empty",
  amount: 0,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
