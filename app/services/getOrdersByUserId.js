import {apiBaseUrl} from '../utils';

export const getOrdersByUserId = async (token, page = 1, limit = 20) => {
    try {
        const response = await fetch(`${apiBaseUrl}/get-orders-by-user-id?page=${page}&limit=${limit}`, {
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