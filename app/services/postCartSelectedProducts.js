import { apiBaseUrl } from "../utils";

export const addToCartSelectedProduct = async (cartIds, accessToken) => {
    if (cartIds) {
        const response = await fetch(
            `${apiBaseUrl}/selected-cart-products-for-place-order`,
            {
                method: "POST",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ cart_ids: cartIds }),
            }
        );

        return response.json();
    }
};
