import { apiBaseUrl } from "@/app/utils";

export const  getAffiliateNewSignup = async(token)=>{
    try {
        const response = await fetch(`${apiBaseUrl}/affiliate-new-signup`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            next: { revalidate: 1 },
        });
        return await response.json();
    } catch (error) {
        console.error('Something went wrong fetching Affiliate New Signup Data');
        console.info(error);
    }
}