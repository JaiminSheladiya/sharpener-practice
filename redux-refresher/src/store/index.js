import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import UIslice from "./ui-slice";

const store = configureStore({
    reducer : {ui : UIslice.reducer, cart : cartSlice.reducer}
})

export default store