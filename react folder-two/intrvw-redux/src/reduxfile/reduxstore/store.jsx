import { configureStore } from "@reduxjs/toolkit";
import AddtocartReducer from "../reducfeature/Addtocart"

const store = configureStore({
    reducer: {
        cart: AddtocartReducer
    }
})

export default store