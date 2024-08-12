import { apiBaseUrl } from "../utils";
export const deleteProductFromTheApi = async (cartIds, accessToken) => {
    // console.log("productsCardId", cartIds);
    // console.log("productsCardId", accessToken);
    // Your logic her
    const response = await fetch(`${apiBaseUrl}/delete-all-cart-product`, {
        method: "POST",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart_ids: cartIds }),
    });

    return response.json();
};
