import { apiBaseUrl } from "../utils";

export const addToCartProduct = async (cartItems, token) => {
    if (cartItems) {
        const response = await fetch(`${apiBaseUrl}/add-to-cart-product`, {
            method: "POST",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cart_items: [cartItems] }),
        });
    
        return response.json();
    }
};
