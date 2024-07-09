import { apiBaseUrl } from "../utils";

export const getProductOrderSummery = async (
    outletId,
    locationId,
    orderId,
    token
) => {
    outletId = outletId || 3;
    locationId = locationId || 47;
    orderId = orderId || 1;
    try {
        const response = await fetch(
            `${apiBaseUrl}/get-order-summery/${outletId}/${locationId}/${orderId}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return await response.json();
    } catch (error) {
        console.error(
            "Something went wrong fetching Product Order Summery data"
        );
        console.info(error);
    }
};
