import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginApi } from "../v1apis";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        loading: false,
        user: {},
    },
    reducers: {
        loginSuccess: () => {},
    },
});

export const {} = authSlice.actions;

export const login = (payload) => {
    return async (dispatch) => {
        try {
            console.log(payload);
            const { data } = await axios.post(loginApi, payload);
            console.log(data);
        } catch (error) {
            console.log(error.message || "Something went wrong");
        }
    };
};
