import { apiBaseUrl } from "@/app/utils";

export const getAffiliateMembersTeam = async (token, userId, params = {}, page = 1, limit = 20) => {
    try {
        const queryString = new URLSearchParams(params).toString();
        const url = `${apiBaseUrl}/affiliate-members-team/${userId}?${queryString}&page=${page}&limit=${limit}`;
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
            "Something went wrong fetching Affiliate Home Dashboard Data"
        );
        console.info(error);
    }
};
