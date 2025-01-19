import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getSearchApi } from "../v1apis";

const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {
        loading: false,
        data: [],
    },
    reducers: {
        getSearchSuccess: (state, { payload }) => {
            state.data = payload
        },
    },
});

export const { getSearchSuccess } = searchSlice.actions;

export const getSearch = (payload) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(getSearchApi, { search: payload });
            dispatch(getSearchSuccess(data.data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default searchSlice.reducer;
