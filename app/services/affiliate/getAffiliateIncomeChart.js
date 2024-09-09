import { apiBaseUrl } from "@/app/utils";

export const getAffiliateIncomeChart = async (token,  params = {}) => {
    try {

        if (typeof params !== 'object' || params === null) {
            throw new Error("Invalid parameters: params should be an object");
        }
        
        const queryString = new URLSearchParams(params).toString();
        const url = `${apiBaseUrl}/affiliate-income-chart${queryString ? `?${queryString}` : ''}`;

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
            "Something went wrong fetching affiliate income chart Data"
        );
        console.info(error);
    }
};
