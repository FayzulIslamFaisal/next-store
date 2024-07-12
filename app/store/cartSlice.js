// store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    num: 2,
    addToCartLength: 0,
};

if (typeof window !== "undefined" && localStorage.getItem("addToCart")) {
    initialState.addToCartLength = JSON.parse(
        localStorage.getItem("addToCart")
    ).length;
}

const cartSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.num += 1;
        },
        decrement: (state) => {
            state.num -= 1;
        },
        setAddToCart: (state, action) => {
            const { hasSession, length } = action.payload;
            if (hasSession) {
                state.addToCartLength = length;
            } else {
                state.addToCartLength = localStorage.getItem("addToCart")
                    ? JSON.parse(localStorage.getItem("addToCart")).length
                    : 0;
            }
        },
    },
});

export const { increment, decrement, setAddToCart } = cartSlice.actions;
export default cartSlice.reducer;
