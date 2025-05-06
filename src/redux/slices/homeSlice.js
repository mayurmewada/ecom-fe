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
    },
});

export const { getHomeDataSuccess } = homeSlice.actions;

export const getHomePageData = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(getHomeDataApi);
            dispatch(getHomeDataSuccess(data.data));
        } catch (error) {
            console.log(error?.message || "Something went wrong");
        }
    };
};

export default homeSlice.reducer;
