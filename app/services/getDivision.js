import {apiBaseUrl} from '../utils';

export const getDivision = async () => {
    try {
        const response = await fetch(`${apiBaseUrl}/get-divisions`);
        const data = await response.json();
        return data?.results?.divisions;
    } catch (error) {
        console.error('Something went wrong fetching division data');
        console.info(error);
    }
}

