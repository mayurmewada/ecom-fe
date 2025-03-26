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

export const login = (payload, navigate) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(loginApi, payload);
            localStorage.setItem("ddToken", data.data.token);
            navigate("/");
        } catch (error) {
            console.log(error.message || "Something went wrong");
        }
    };
};

export default authSlice.reducer;
