import { apiBaseUrl } from "../utils";

export const fetchCartProducts = async (accessToken) => {
    if (accessToken) {
        try {
            const response = await fetch(
                `${apiBaseUrl}/get-cart-products?outlet_id=3&location_id=47`,
                {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
    
            if (!response.ok) {
                throw new Error("Failed to fetch cart products");
            }
            return response.json();
        } catch (error) {
            console.error(error);
        }
    }
    
};
