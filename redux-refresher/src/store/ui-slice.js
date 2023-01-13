import { createSlice } from "@reduxjs/toolkit";

const UIslice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})

export const uiActions = UIslice.actions
export default UIslice