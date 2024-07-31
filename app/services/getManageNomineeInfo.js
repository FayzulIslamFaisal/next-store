import {apiBaseUrl} from '../utils';

export const getManageNomineeInfo = async (token) => {
    try {
        const response = await fetch(`${apiBaseUrl}/nominee-info`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return await response.json();
    } catch (error) {
        console.error('Something went wrong fetching Nominee Info Data');
        console.info(error);
    }
}