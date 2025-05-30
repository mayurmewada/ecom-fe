import { createSlice } from "@reduxjs/toolkit";
import { createOrderApi } from "../v1apis";
import axios from "axios";
const razorpayKeyId = import.meta.env.VITE_RPKEYID;

const orderSlice = createSlice({
    name: "orderSlice",
    initialState: {
        loading: false,
        orders: [],
    },
});

export const createOrder = (Razorpay) => {
    return async (dispatch, getState) => {
        try {
            const { userDetails } = getState().userSlice;
            const { data } = await axios.get(createOrderApi, { headers: { Authorization: localStorage.getItem("ddToken") } });

            const options = await {
                key: razorpayKeyId,
                amount: data.data.amount,
                currency: data.data.currency,
                name: userDetails?.email?.split("@")?.[0],
                description: userDetails._id,
                order_id: data.data.id,
                handler: () => {},
                prefill: {
                    name: userDetails?.email?.split("@")?.[0],
                    email: userDetails?.email,
                    contact: userDetails?.phone,
                },
                theme: {
                    color: "#22262b",
                },
            };

            const razorpayInstance = await new Razorpay(options);
            razorpayInstance.open();
        } catch (error) {
            console.log(error.message || "Something went wrong");
        }
    };
};

export default orderSlice.reducer;
