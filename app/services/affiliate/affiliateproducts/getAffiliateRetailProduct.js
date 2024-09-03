import { apiBaseUrl } from "@/app/utils";

export const getAffiliateRetailProduct = async (token, outletId, params = {}, limit = 12) => {
    try {
        const queryString = new URLSearchParams(params).toString();
        const url = `${apiBaseUrl}/affiliate-retail-products/${outletId}?${queryString}&limit=${limit}`;

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
            "Something went wrong fetching affiliate retail products Data"
        );
        console.info(error);
    }
};
