import {apiBaseUrl} from '../utils';

export const getBackRegistration = async (payload) => {
    try {
        const response = await fetch(`${apiBaseUrl}/remove-temp-customer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        return await response.json();
    } catch (error) {
        console.error('Something went wrong fetching Back Registration');
        console.info(error);
    }
}
