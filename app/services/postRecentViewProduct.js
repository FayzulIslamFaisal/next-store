import { apiBaseUrl } from "../utils";

export const recentViewProduct = async (productInfo, token) => {
    const response = await fetch(`${apiBaseUrl}/just-for-you-products`, {
        method: "POST",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productInfo),
    });

    return response.json();
};
