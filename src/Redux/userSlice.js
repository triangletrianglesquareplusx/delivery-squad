import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "empty",
  },
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const { updateEmail } = userSlice.actions;
export default userSlice.reducer;
