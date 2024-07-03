import {apiBaseUrl} from '../utils';
// /api/check-phone-exists
export const validatePhoneNumber = async (payload) => {
    try {
        const response = await fetch(`${apiBaseUrl}/check-phone-exists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        return await response.json();
    } catch (error) {
        console.error('Something went wrong validating user phone number');
        console.info(error);
    }
}