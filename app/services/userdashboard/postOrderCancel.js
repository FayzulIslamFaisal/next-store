

import { apiBaseUrl } from "../utils";

export const postOrderCancel = async (formData, token) => {
    try {
        const response = await fetch(`${apiBaseUrl}/order-cancel`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        });

        return await response.json();
    } catch (error) {
        console.error("Error in Order Cancel:", error);
        throw error; 
    }
};