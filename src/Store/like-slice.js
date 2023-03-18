import { createSlice } from "@reduxjs/toolkit"

const likeSlice = createSlice({
    name: 'like',
    initialState: { like: false, counter: 0,},
    reducers: {
        setLike(state, action) {
            state.like = !state.like
            if(state.like === true){
                state.counter = parseInt(state.counter) + 1
            }
        },
        setprelike(state,action){
            state.counter =+ action.payload

        }

    }
})
export const actionss = likeSlice.actions
export default likeSlice;