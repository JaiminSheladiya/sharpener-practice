import { configureStore } from "@reduxjs/toolkit";
import UIslice from "./ui-slice";

const store = configureStore({
    reducer : {ui : UIslice.reducer}
})

export default store