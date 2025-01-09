import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addData: (state, action) => {
      const newUserData = {
        id: nanoid(),
        email: action.payload.email,
        password: action.payload.password,
      };
      state.userData.push(newUserData);
    },
  },
});

export const { addData } = authSlice.actions;

export default authSlice.reducer;
