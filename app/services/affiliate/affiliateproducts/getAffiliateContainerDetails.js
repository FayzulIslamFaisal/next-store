import { apiBaseUrl } from "@/app/utils";

export const getAffiliateContainerDetails = async (
    token,
    containerId,
    productId
) => {
    try {
        const url = `${apiBaseUrl}/container-product-details?container_id=${containerId}&product_id=${productId}`;

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
        console.error("Something went wrong fetching affiliate Container Details Data");
        console.info(error);
    }
};
