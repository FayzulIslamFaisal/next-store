import { apiBaseUrl } from "../utils";
export const deleteCartProduct = async (cartId, token) => {
    console.log("token ----", token);
    const url = `${apiBaseUrl}/delete-cart-product?cart_id=${cartId}`;
    // try {
    const res = await fetch(url, {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    // if (!res.ok) {
    //     throw new Error(`HTTP error! status: ${res.status}`);
    // }
    console.log(res);
    const data = await res.json();
    return data;
    // } catch (error) {
    //     console.error("Error:", error);
    //     throw error;
    // }
};
