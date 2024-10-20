import { apiBaseUrl } from "@/app/utils";

export const getDiscountPartnerData = async () => {
    try {
        const response = await fetch(`${apiBaseUrl}/get-request-with-discount-partner`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
            next: { revalidate: 1 },
        });

        return await response.json();
    } catch (error) {
        console.error(
            "Something went wrong fetching discount partner list Data",
            error
        );
        console.info(error);
    }
};
