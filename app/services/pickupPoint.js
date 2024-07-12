import { apiBaseUrl } from "../utils";

export const pickUpPontes = async (outletId) => {
    try {
        const response = await fetch(
            `${apiBaseUrl}/get-outlet-all-pickup-point-by-outlet-id/${outletId}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Something went wrong fetching pick up point data");
        console.info(error);
    }
};
