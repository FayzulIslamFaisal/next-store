import {apiBaseUrl} from '../utils';

export const getOrdersByUserId = async (token) => {
    try {
        const response = await fetch(`${apiBaseUrl}/get-orders-by-user-id`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return await response.json();
    } catch (error) {
        console.error('Something went wrong fetching Orders Data');
        console.info(error);
    }
}