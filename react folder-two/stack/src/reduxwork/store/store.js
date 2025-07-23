import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../reduxFeature/Product";
import AddtocartReducer from "../reduxFeature/Addtocart";
import SearchReducer from "../reduxFeature/Search";

const store = configureStore({
  reducer: {
    pro: ProductReducer,
    cart: AddtocartReducer,
    search: SearchReducer,
  },
});

export default store;
