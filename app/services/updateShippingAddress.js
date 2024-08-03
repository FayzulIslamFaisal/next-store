import { apiBaseUrl } from "../utils";
export const updateShippingAddress = async (addressData, accessToken) => {
    const response = await fetch(`${apiBaseUrl}/update-shipping-address`, {
        method: "POST",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(addressData),
    });

    return response.json();
};
