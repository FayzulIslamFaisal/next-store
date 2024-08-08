import { apiBaseUrl } from "../utils";
export async function addToCartProductAfterLog(cartItems) {
    const response = await fetch(
        `${apiBaseUrl}/add-to-cart-product`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cart_items: cartItems }),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to add product to cart");
    }

    return response.json();
}
