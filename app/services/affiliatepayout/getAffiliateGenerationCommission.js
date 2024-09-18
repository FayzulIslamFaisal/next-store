import { apiBaseUrl } from "@/app/utils";


export const getAffiliateGenerationCommission = async (token)=>{

    try {
        const url = `${apiBaseUrl}/affiliate-generation-commission`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            next: { revalidate: 10 },
        });

        return await response.json();
    } catch (error) {
        console.error("Something went wrong fetching affiliate generation commission Data");
        console.info(error);
    }
}