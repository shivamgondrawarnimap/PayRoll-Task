import { createSlice } from "@reduxjs/toolkit";
// import { homeTabNames } from "utils/constants";

const initialState = {
    // data: homeTabNames.reduce((acc, tab) => {
    //     acc[tab] = []
    //     return acc
    // }, {}),
    isFetching: false,
    activeTab: 0,
    sidebarOpen: false,
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setIsFetching: (state, action) => {
            state.isFetching = action.payload
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        setSidebarOpen: (state, action) => {
            state.sidebarOpen = action.payload
        },
        clear: () => initialState,
    },
})

export default homeSlice.reducer
export const { setIsFetching, setActiveTab, setSidebarOpen, clear } = homeSlice.actions