
import { apiBaseUrl } from "@/app/utils";

export const deleteShippingAddress = async (addressID, token) => {
    try {
        const response = await fetch(`${apiBaseUrl}/delete-shipping-address`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ address_id: addressID }),
        });

        return await response.json();
    } catch (error) {
        console.error("Error in delete shipping address:", error);
        throw error; 
    }
};