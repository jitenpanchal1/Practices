import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reduxFeature/Addtocartslice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
