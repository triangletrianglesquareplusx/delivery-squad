import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isError: false,
  isLoading: false,
  isAchieved: false,
  message: "",
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    console.log(user);
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { addUser } = authSlice.actions;
export default authSlice.reducer;
