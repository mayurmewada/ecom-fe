import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addToCartApi, cartLengthApi } from "../v1apis";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        loading: false,
        cart: [],
        cartlength: 0,
    },
    reducers: {
        updateCartLength: (state, action) => {
            state.cartlength = action.payload;
        },
    },
});

export const { updateCartLength } = cartSlice.actions;

export const getCartDetails = () => {
    return async (dispatch) => {
        try {
        } catch (error) {
            console.log(error.message || "Something went wrong");
        }
    };
};

export const getCartLength = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem("ddToken");
            if (token) {
                const { data } = await axios.get(cartLengthApi, { headers: { Authorization: token } });
                dispatch(updateCartLength(data.data));
            } else {
                const sessionCart = JSON.parse(sessionStorage?.getItem("ddCart"));
                dispatch(updateCartLength(sessionCart.length));
            }
        } catch (error) {
            console.log(error.message || "Something went wrong");
        }
    };
};

export const addToCart = (productId, brand, price, qnty = 1, action = "incr") => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem("ddToken");
            if (token) {
                const res = await axios.post(addToCartApi, [productId, qnty, action], { headers: { Authorization: token } });
                if (res.status === 200) {
                    const { data } = await axios.get(cartLengthApi, { headers: { Authorization: token } });
                    dispatch(updateCartLength(data.data));
                }
            } else {
                const getSessionCart = JSON.parse(sessionStorage.getItem("ddCart")) || [];
                let cart = getSessionCart || [];
                if (cart.length > 0) {
                    for (let i = 0; i < cart.length; i++) {
                        if (cart[i].id == productId) {
                            const currqnty = cart[i].qnty;
                            if (action === "incr") {
                                cart[i].qnty = currqnty + qnty;
                            } else if (action === "decr") {
                                cart[i].qnty = currqnty - qnty;
                            }
                            sessionStorage.setItem("ddCart", JSON.stringify(cart));
                            return;
                        }
                    }
                }
                getSessionCart.length > 0 ? "" : (cart = []);
                cart.push({ id: productId, qnty, brand, price });
                dispatch(updateCartLength(cart.length));
                sessionStorage.setItem("ddCart", JSON.stringify(cart));
            }
        } catch (error) {
            console.log(error.message || "Something went wrong");
        }
    };
};

export default cartSlice.reducer;
