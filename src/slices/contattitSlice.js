import { createSlice } from "@reduxjs/toolkit";

const contattiSlice = createSlice({
    name: "contact",
    initialState: {
        all: [],
        active: null,
        favorite: []
    },
    reducers: {
        setContatti: (state, action) => {
            state.all = action.payload
        },
        setActiveContatti: (state, action) => {
            state.active = action.payload
        }
    }
})

export const { setActiveContatti, setContatti } = contattiSlice.actions
export default contattiSlice.reducer