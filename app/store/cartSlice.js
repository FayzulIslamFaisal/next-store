import { createSlice } from "@reduxjs/toolkit";
import { addToCartProductList, getTotalQuantity } from "../utils";

const initialState = {
    num: 2,
    addToCartLength: 0, // Initialize to 0
};
const getAddToCartProduct = addToCartProductList();
const productQuantityCount = getTotalQuantity(getAddToCartProduct);

console.log("addToCartLength", initialState.addToCartLength);

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
                state.addToCartLength = length;
                console.log("slice redux redux", productQuantityCount);
            }
        },
    },
});

export const { increment, decrement, setAddToCart } = cartSlice.actions;
export default cartSlice.reducer;
