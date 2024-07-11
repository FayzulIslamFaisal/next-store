import { apiBaseUrl } from "../utils";

export const addToCartQuantityUpdate = async (quantityUpdateInfo, token) => {
    const response = await fetch(`${apiBaseUrl}/update-cart-product-quantity`, {
        method: "POST",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(quantityUpdateInfo),
    });

    return response.json();
};
