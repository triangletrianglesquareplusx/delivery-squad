import { createSlice } from "@reduxjs/toolkit";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
const initialState = {
  userEmail: null,
  userUid: null,
  isLoading: true,
  errorMessage: "",
  restaurants: [],
};
// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async (auth, email, password) => {
//     const user = await signInWithEmailAndPassword(auth, email, password);
//     console.log(user);
//     return user;
//   }
// );

// export const registerUser = createAsyncThunk(
//   "auth/register",
//   async (auth, email, password) => {
//     const user = await createUserWithEmailAndPassword(auth, email, password);
//     console.log(user);
//     return user.currentUser;
//   }
//   //try catch
// );

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearCurrentUser(state) {
      state.userEmail = null;
      state.userUid = null;
      state.isLoading = true;
      state.errorMessage = "";
      state.restaurants = [];
    },
    assignCurrentUser(state, action) {
      state.isLoading = false;
      const { email, uid } = action.payload;
      state.userEmail = email;
      state.userUid = uid;
    },
    assignErrorStatus(state, action) {
      state.errorMessage = action.payload;
    },
  },
  // extraReducers(builder) {
  //   builder.addCase(registerUser.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.isError = false;
  //     state.isAchieved = true;
  //     state.userEmail = action.payload.email;
  //     state.userUid = action.payload.uid;
  //   });
  //   builder.addCase(registerUser.pending, (state) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(registerUser.rejected, (state) => {
  //     state.isAchieved = false;
  //     state.isError = true;
  //   });
  //   builder.addCase(loginUser.fulfilled, (state, action) => {
  //     // const {email}
  //     // state.userEmail = action.payload.email;
  //     console.log(action.payload);
  //     state.userEmail = action.payload.userEmail;
  //   });
  //   builder.addCase(loginUser.rejected, (state) => {
  //     state.message = "There was an error";
  //   });
  // },
});
export const { clearCurrentUser, assignCurrentUser } = authSlice.actions;
export default authSlice.reducer;
