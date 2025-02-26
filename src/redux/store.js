import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import filterSlice from "./slices/filterSlice";
import searchSlice from "./slices/searchSlice";
import homeSlice from "./slices/homeSlice";

export default configureStore({
    reducer: {
        homeSlice,
        productSlice,
        filterSlice,
        searchSlice,
    },
});
