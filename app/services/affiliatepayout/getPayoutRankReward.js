
import { apiBaseUrl } from "@/app/utils";
export const getPayoutRankReward = async (token) =>{
    try {
        const url = `${apiBaseUrl}/affiliate-rank-reward`;

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
        console.error("Something went wrong fetching affiliate payout rank reward Data");
        console.info(error);
    }
}