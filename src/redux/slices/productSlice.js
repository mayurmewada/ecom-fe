import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllProductsApi, getFilteredProductsApi } from "../v1apis";

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        products: [],
        loading: false,
    },
    reducers: {
        getProductSuccess: (state, action) => {
            state.products = action.payload;
        },
        loading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { getProductSuccess, loading } = productSlice.actions;

export const getAllProducts = (category) => {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            // console.log(category);
            const wait = await setTimeout(async () => {
                const { data } = await axios.post(getAllProductsApi, { category });
                dispatch(getProductSuccess(data.res));
                dispatch(loading(false));
            }, 1000);
        } catch (error) {
            // console.log(error);
            dispatch(loading(false));
        }
    };
};

export const getFilteredProducts = (category, filters) => {
    return async (dispatch) => {
        try {
            // console.log(filters);
            dispatch(loading(true));
            const wait = setTimeout(async () => {
                const { data } = await axios.post(getFilteredProductsApi, [category, filters]);
                // console.log(data.data);
                dispatch(getProductSuccess(data.data));
                dispatch(loading(false));
            }, 1000);
        } catch (error) {
            // console.log(error);
            dispatch(loading(false));
        }
    };
};

export default productSlice.reducer;
