import {configureStore} from "@reduxjs/toolkit";
import postsSlice from "./postsSlice.js";

export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer
    }
})

