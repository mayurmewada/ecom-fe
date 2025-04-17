import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import filterSlice from "./slices/filterSlice";
import searchSlice from "./slices/searchSlice";
import homeSlice from "./slices/homeSlice";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import orderSlice from "./slices/orderSlice";

export default configureStore({
    reducer: {
        homeSlice,
        productSlice,
        filterSlice,
        searchSlice,
        authSlice,
        userSlice,
        cartSlice,
        orderSlice,
    },
});
