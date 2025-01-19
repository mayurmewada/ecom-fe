import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import filterSlice from "./slices/filterSlice";
import searchSlice from "./slices/searchSlice";

export default configureStore({
    reducer: {
        productSlice,
        filterSlice,
        searchSlice,
    },
});
