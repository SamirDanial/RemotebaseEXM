import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from './index'

const store = configureStore({
    reducer: {
        movie: movieReducer
    }
})

export default store;