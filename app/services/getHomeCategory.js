import {filterByStatus, apiBaseUrl} from '../utils';

export const getHomeCategory = async (page = 1, limit = 24) => {
    try {
        const response = await fetch(`${apiBaseUrl}/all-category?page=${page}&limit=${limit}`, { next: { revalidate: 10 } });
        const data = await response.json();
        return data?.results?.category;
    } catch (error) {
        console.error('Something went wrong fetching Home Category data');
        console.info(error);
    }
}