import {apiBaseUrl} from '../utils';

export const getProfilePicture = async (token) => {
    try {
        const response = await fetch(`${apiBaseUrl}/profile-picture`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return await response.json();
    } catch (error) {
        console.error('Something went wrong fetching Manage Take a Photo Data');
        console.info(error);
    }
}