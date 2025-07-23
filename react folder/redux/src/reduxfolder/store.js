import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Featusr/Counterslice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
