import {apiBaseUrl} from '../utils';

export const getDeliveryLocations = async ( districtId ) => {
    try {
        const response = await fetch(`${apiBaseUrl}/get-delivery-locations/${districtId}`);
        const data = await response.json();
        return data?.results;
    } catch (error) {
        console.error('Something went wrong fetching division data');
        console.info(error);
    }
}
