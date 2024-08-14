import { apiBaseUrl } from "../utils";

export const getProductOrderSummery = async (
    orderId,
    token
) => {

    orderId = orderId || 1;
    try {
        const response = await fetch(
            `${apiBaseUrl}/get-order-summery/${orderId}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
                next: { revalidate: 1 },
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
