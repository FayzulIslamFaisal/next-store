import { apiBaseUrl } from "../utils";
export const getDistrictForShipping = async () => {
    try {
        const response = await fetch(`${apiBaseUrl}/get-districts`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Something went wrong fetching division data");
        console.info(error);
    }
};
