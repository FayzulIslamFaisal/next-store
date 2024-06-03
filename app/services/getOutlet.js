import {apiBaseUrl} from '../utils';

export const getOutletByDistrictId = async ( districtId ) => {
    try {
        const response = await fetch(`${apiBaseUrl}/outlet/${districtId}`);
        const data = await response.json();
        return data?.results;
    } catch (error) {
        console.error('Something went wrong fetching division data');
        console.info(error);
    }
}
