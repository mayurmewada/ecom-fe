import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getFiltersApi } from "../v1apis";

const filterSlice = createSlice({
    name: "filterSlice",
    initialState: {
        loading: false,
        filters: [],
        activeFilters: [],
    },
    reducers: {
        getFilterSuccess: (state, action) => {
            state.filters = action.payload.data;
        },
        setActiveFilter: (state, action) => {
            console.log(action.payload)
            state.activeFilters = action.payload
        }
    },
});

export const { getFilterSuccess, setActiveFilter } = filterSlice.actions;

export const getFilters = (category) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(getFiltersApi, { category });
            dispatch(getFilterSuccess(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export const setFilters = (filters) => {
    return (dispatch) => {
        try {
            dispatch(setActiveFilter(filters))
            console.log(filters);
        } catch (error) {
            console.log(error);
        }
    };
};

export default filterSlice.reducer;
