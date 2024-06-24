import { apiBaseUrl } from "../utils";

const getAllSettings = async () => {
    try {
        const response = await fetch(`${apiBaseUrl}/get-all-settings/business`, { next: { revalidate: 1 } });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Something went wrong fetching All Setting data');
        console.info(error);
    }
}

export default getAllSettings