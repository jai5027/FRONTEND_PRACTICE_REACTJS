import { configureStore } from "@reduxjs/toolkit";
import searchSlice from './features/searchSlice.js'

export const store = configureStore({
    reducer: {
        search: searchSlice
    },
})