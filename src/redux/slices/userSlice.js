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
            const { data } = await axios.get(getUserDetailsApi, { headers: { Authorization: token } });
            dispatch(getUserDetailsSuccess(data.isUser));
        } catch (error) {
            console.log(error || "Something went wrong");
            if (error.response.data.clearToken) localStorage.removeItem("ddToken");
        }
    };
};

export default userSlice.reducer;
