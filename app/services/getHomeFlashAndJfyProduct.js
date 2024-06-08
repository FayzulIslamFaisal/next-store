import {apiBaseUrl} from '../utils';

export const getHomeFlashAndJfyProduct = async (districtId = 47) => {
    try {
        const response = await fetch(`${apiBaseUrl}/get-outlet-product-by-district-id/${districtId}`, { next: { revalidate: 10 } });
        return await response.json();
    } catch (error) {
        console.error('Something went wrong fetching slider data');
        console.info(error);
    }
}