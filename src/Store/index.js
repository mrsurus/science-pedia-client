import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./comment-slice";
import likeSlice from "./like-slice";


const store = configureStore({
    reducer: {
        like: likeSlice.reducer,
        comment: commentSlice.reducer
    }

})

export default store;
