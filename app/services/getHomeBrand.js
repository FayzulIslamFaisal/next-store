import {apiBaseUrl} from '../utils';

export const getHomeBrand = async (page = 1, limit = 24) => {
    try {
        const response = await fetch(`${apiBaseUrl}/get-brand?page=${page}&limit=${limit}`, { next: { revalidate: 10 } });
        return await response.json();
    } catch (error) {
        console.error('Something went wrong fetching Home Brand data');
        console.info(error);
    }
}