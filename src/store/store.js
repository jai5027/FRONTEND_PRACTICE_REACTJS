import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/features/counter/counter.Slice.js"

const store = configureStore({
    reducer: {
      counter: counterReducer
    }
})


export default store 