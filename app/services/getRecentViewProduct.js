import { apiBaseUrl } from "../utils";

export const fetchRecentViewProducts = async (accessToken, outlet_id) => {
    if (outlet_id) {
        try {
            const response = await fetch(
                `${apiBaseUrl}/just-for-you-products/${outlet_id}`,
                {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Failed to fetch recent view products");
            }
            return response.json();
        } catch (error) {
            console.error(error);
        }
    }
    
};
