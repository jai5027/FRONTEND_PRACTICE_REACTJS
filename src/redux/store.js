import { configureStore } from "@reduxjs/toolkit";
import searchSlice from './features/searchSlice.js'
import collectionSlice from './features/collectionSlice.js'

export const store = configureStore({
    reducer: {
        search: searchSlice,
        collection: collectionSlice
    },
})