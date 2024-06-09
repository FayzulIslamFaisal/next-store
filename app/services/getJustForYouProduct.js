import { apiBaseUrl } from "../utils";

export const getJustForYouProduct = async () => {
    try {
        const response = await fetch(`${apiBaseUrl}/just-for-you-products/3`, {
            next: { revalidate: 1 },
        });
        return await response.json();
    } catch (error) {
        console.error("Something went wrong fetching Flash Sale Product data");
        console.info(error);
    }
};
