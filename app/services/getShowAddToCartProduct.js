import { apiBaseUrl } from "../utils";

export const fetchCartProducts = async (accessToken, outletId, districtId) => {
    try {
        // console.log("get cart product ================", accessToken);
        const response = await fetch(
            `${apiBaseUrl}/get-cart-products?outlet_id=${outletId}&location_id=${districtId}`,
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
};
