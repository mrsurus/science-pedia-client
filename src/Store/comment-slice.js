import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: 'comment',
    initialState: {comment: [], },
    reducers: {
        setComment(state, action){
            state.comment = action.payload
        }
    }
})

export const actions = commentSlice.actions
export default commentSlice;