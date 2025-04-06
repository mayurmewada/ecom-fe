import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addToCartApi, getUserDetailsApi } from "../v1apis";
import { loading } from "./productSlice";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        loading: false,
        userDetails: {},
    },
    reducers: {
        getUserDetailsSuccess: (state, { payload }) => {
            state.userDetails = payload;
        },
    },
});

export const { getUserDetailsSuccess } = userSlice.actions;

export const getUserDetails = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem("ddToken");
            if (!token) return;
            const { data } = await axios.get(getUserDetailsApi, { headers: { Authorization: `Bearer ${token}` } });
            dispatch(getUserDetailsSuccess(data.data));
        } catch (error) {
            console.log(error.message || "Something went wrong");
        }
    };
};

export default userSlice.reducer