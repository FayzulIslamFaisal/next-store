import {filterByStatus} from '../utils';

export const getHomeCategory = async () => {
    try {
        const response = await fetch(`https://v3.nagadhat.com/api/all-category`, { next: { revalidate: 10 } });
        const data = await response.json();
        return filterByStatus(data.results.category);
    } catch (error) {
        console.error('Something went wrong fetching Home Category data');
        console.info(error);
    }
}