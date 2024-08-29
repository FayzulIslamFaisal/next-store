

import { apiBaseUrl } from "@/app/utils";

export const postOneTimeResetPassword = async (dataToSubmit) => {
    try {
        const response = await fetch(`${apiBaseUrl}/one-time-reset-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(dataToSubmit),
        });

        return await response.json();
    } catch (error) {
        console.error("Error in Post Reset Password:", error);
        throw error; 
    }
};