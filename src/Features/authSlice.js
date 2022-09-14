import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
const initialState = {
  userEmail: null,
  userUid: null,
  isError: false,
  isLoading: false,
  isAchieved: false,
  message: "",
};
export const loginUser = createAsyncThunk(
  "auth/login",
  async (email, password) => {
    console.log(email, password);
    const auth = getAuth();
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user.json();
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (auth, email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  }
  //try catch
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearCurrentUser(state) {
      state = initialState;
    },
    assignCurrentUser(state, action) {
      state.isLoading = false;
      state.isError = false;
      state.isAchieved = true;
      state.userEmail = action.payload.email;
      state.userUid = action.payload.uid;
    },
  },
  extraReducers(builder) {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isAchieved = true;
      state.userEmail = action.payload.email;
      state.userUid = action.payload.uid;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.isAchieved = false;
      state.isError = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // const {email}
      // state.userEmail = action.payload.email;
      console.log(action.payload);
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.message = "There was an error";
    });
  },
});
export const { addUser, clearCurrentUser, assignCurrentUser } =
  authSlice.actions;
export default authSlice.reducer;
