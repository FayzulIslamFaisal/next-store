import { apiBaseUrl } from "../utils";

export const fetchAllLocationAuthUser = async (accessToken) => {
    try {
        // console.log("get cart product ================", accessToken);
        const response = await fetch(`${apiBaseUrl}/get-shipping-address`, {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch cart products");
        }
        return response.json();
    } catch (error) {
        console.error(error);
    }
};
