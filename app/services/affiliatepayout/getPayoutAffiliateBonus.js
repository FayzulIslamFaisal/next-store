import { apiBaseUrl } from "@/app/utils";


export const getPayoutAffiliateBonus =async(token)=>{
    try {
        const url = `${apiBaseUrl}/affiliate-bonus`;

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
        console.error("Something went wrong fetching affiliate bonus Data");
        console.info(error);
    }
}