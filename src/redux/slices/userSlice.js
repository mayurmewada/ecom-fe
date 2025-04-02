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
            console.log(data.data);
        } catch (error) {
            console.log(error.message || "Something went wrong");
        }
    };
};

export const getCartDetails = () => {
    return async (dispatch) => {
        try {
        } catch (error) {
            console.log(error.message || "Something went wrong");
        }
    };
};

export const addToCart = (productId, qnty = 1, action = "incr") => {
    return async (dispatch) => {
        try {
            console.log(productId, qnty, action)
            const token = localStorage.getItem("ddToken");
            if (token) {
                const data = await axios.post(addToCartApi, [productId, qnty, action],{ headers: { Authorization: token } });
                console.log(data)
            } else {
                const getSessionCart = JSON.parse(sessionStorage.getItem("ddCart"));
                let cart = getSessionCart || {};
                if (cart.length > 0) {
                    for (let i = 0; i < cart.length; i++) {
                        if (cart[i].id == productId) {
                            var currqnty = cart[i].qnty;
                            cart[i].qnty = currqnty + qnty;
                            sessionStorage.setItem("ddCart", JSON.stringify(cart));
                            return;
                        }
                    }
                }
                getSessionCart.length > 0 ? "" : (cart = []);
                cart.push({ id: productId, qnty });
                sessionStorage.setItem("ddCart", JSON.stringify(cart));
            }
        } catch (error) {
            console.log(error.message || "Something went wrong");
        }
    };
};

export default userSlice.reducer;
