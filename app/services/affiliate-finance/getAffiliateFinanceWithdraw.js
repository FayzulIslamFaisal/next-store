import { apiBaseUrl } from "@/app/utils";

export const getAffiliateFinanceWithdraw = async (token) => {
    if (!token) {
        console.error("Token is missing. Cannot fetch finance withdraw data.");
        return null;
    }
    const url = `${apiBaseUrl}/affiliate-finance-withdraw`;
    try {
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
        console.error(
            "Something went wrong fetching affiliate finance withdraw Data"
        );
        console.info(error);
        return null;
    }
};
