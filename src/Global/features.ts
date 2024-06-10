import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    maxUser: {},
    userToken: "",
    getOneUser: {},
};

const features = createSlice({
    name: "maxSignal",
    initialState,
    reducers: {
        user: (state, {payload}) => {
            state.maxUser = payload;
            // console.log("User Data:", payload);
        },

        oneUser: (state, {payload}) => {
            state.getOneUser = payload;
            // console.log("Get One User Data:", payload);
        },

        token: (state, {payload}) => {
            state.userToken = payload;
            // console.log("User Token:", payload);
        },
        logout: (state) => {
            state.maxUser = {};
            state.userToken = "";
            state.getOneUser = {};
        },
    },
});

export const {user, logout, token, oneUser} = features.actions;

export default features.reducer;
