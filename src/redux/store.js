import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import filterSlice from "./slices/filterSlice";

export default configureStore({
    reducer: {
        productSlice,
        filterSlice,
    },
});
