
import { apiBaseUrl } from "@/app/utils";


export const getPayoutResaleBonus =async(token)=>{
    try {
        const url = `${apiBaseUrl}/affiliate-buyback-commission`;

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
        console.error("Something went wrong fetching payout resale bonus Data");
        console.info(error);
    }
}