import { configureStore } from "@reduxjs/toolkit";
import ThunkReducer from "./reduxwork/Thunkslice";

const store = configureStore({
  reducer: {
    Product: ThunkReducer,
  },
});

export default store;
