import { apiBaseUrl } from "../utils";

export const placeOrder = async (cartItems, token) => {
    console.log("cartItems place order", cartItems);
    console.log("cartItems token", token);

    const response = await fetch(`${apiBaseUrl}/place-order`, {
        method: "POST",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
    });

    return response.json();
};
