import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getHomeDataApi } from "../v1apis";
import { loading } from "./productSlice";
import { data } from "react-router-dom";

export const homeSlice = createSlice({
    name: "homeSlice",
    initialState: {
        loading: false,
        data: {},
    },
    reducers: {
        getHomeDataSuccess: (state, { payload }) => {
            state.data = payload;
        },
        setLoading: (state, { payload }) => {
            state.loading = payload;
        },
    },
});

export const { getHomeDataSuccess, setLoading } = homeSlice.actions;

export const getHomePageData = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const { data } = await axios.get(getHomeDataApi);
            dispatch(getHomeDataSuccess(data.data));
            dispatch(setLoading(false));
        } catch (error) {
            console.log(error?.message || "Something went wrong");
            dispatch(setLoading(false));
        }
    };
};

export default homeSlice.reducer;
