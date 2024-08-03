import { apiBaseUrl } from "../utils";
export const postShippingAddress = async (addressData, accessToken) => {
    // Your logic here
    const response = await fetch(`${apiBaseUrl}/add-shipping-address`, {
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
