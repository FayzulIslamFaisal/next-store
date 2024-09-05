

// import { apiBaseUrl } from "../utils";

import { apiBaseUrl } from "@/app/utils";

export const postOrderCancel = async (orderID, token) => {
    try {
        const response = await fetch(`${apiBaseUrl}/order-cancel`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ order_id: orderID }),
        });

        return await response.json();
    } catch (error) {
        console.error("Error in Order Cancel:", error);
        throw error; 
    }
};