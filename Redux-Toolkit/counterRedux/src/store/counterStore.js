import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const contextStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
