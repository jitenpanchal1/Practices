import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reduxfeature/userSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
  },
});

export default store;
