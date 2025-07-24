import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../reduxfeature/Addproduct";

const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});

export default store;