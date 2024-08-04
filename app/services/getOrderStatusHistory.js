import { apiBaseUrl } from "../utils";

export const getOrderStatusHistory = async (orderId, token) => {
    orderId = orderId || 1;
    try {
        const response = await fetch(
            `${apiBaseUrl}/order-status-history/${orderId}`,
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
            "Something went wrong fetching Product Order status history data"
        );
        console.info(error);
    }
};
