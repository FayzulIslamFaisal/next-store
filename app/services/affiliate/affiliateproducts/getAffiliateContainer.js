import { apiBaseUrl } from "@/app/utils";

export const getAffiliateContainer = async (token) => {
    try {
        const url = `${apiBaseUrl}/container`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            next: { revalidate: 1 },
        });

        return await response.json();
    } catch (error) {
        console.error(
            "Something went wrong fetching affiliate Container Data"
        );
        console.info(error);
    }
};
