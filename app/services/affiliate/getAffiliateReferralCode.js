import { apiBaseUrl } from "@/app/utils";

export const  getAffiliateReferralCode = async(referralCode)=>{
    try {
        const response = await fetch(`${apiBaseUrl}/user-info-by-referral-code/${referralCode}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });
        return await response.json();
    } catch (error) {
        console.error('Something went wrong fetching Affiliate Referral Code Data');
        console.info(error);
    }
}


