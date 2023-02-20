import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import { addProduct } from "./cartRedux";
export const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})