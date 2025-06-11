import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginApi, signupApi } from "../v1apis";
import { toast } from "react-toastify";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        loading: false,
        user: {},
    },
    reducers: {
        setLoading: (state, { payload }) => {
            state.loading = payload;
        },
    },
});

export const { setLoading } = authSlice.actions;

export const login = (payload, navigate) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const { data } = await axios.post(loginApi, payload);
            localStorage.setItem("ddToken", data.data.token);
            console.log(data);
            toast.success(data?.message, {
                position: "top-center",
            });
            navigate("/");
            dispatch(setLoading(false));
        } catch (error) {
            console.log(error.message || "Something went wrong");
            toast.error(error?.response?.data?.message, {
                position: "top-center",
            });
            dispatch(setLoading(false));
        }
    };
};

export const signup = (payload, navigate) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const { data } = await axios.post(signupApi, payload);
            toast.success(data?.message, {
                position: "top-center",
            });
            navigate("/login");
            dispatch(setLoading(false));
        } catch (error) {
            console.log(error.message || "Something went wrong");
            toast.error(error?.response?.data?.message, {
                position: "top-center",
            });
            dispatch(setLoading(false));
        }
    };
};

export default authSlice.reducer;
