import {apiBaseUrl} from '../utils';

export const registerUser = async (payload) => {
    try {
        const response = await fetch(`${apiBaseUrl}/sign-up`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        return await response.json();
    } catch (error) {
        console.error('Something went wrong creating user');
        console.info(error);
    }
}