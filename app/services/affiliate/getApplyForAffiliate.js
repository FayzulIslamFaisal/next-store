import { apiBaseUrl } from "@/app/utils";

export const getApplyForAffiliate = async (token) => {
    try {
        const response = await fetch(`${apiBaseUrl}/apply-for-affiliate`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return await response.json();
    } catch (error) {
        console.error("Something went wrong fetching Apply for affiliate data:");
        console.info(error);
    }
};