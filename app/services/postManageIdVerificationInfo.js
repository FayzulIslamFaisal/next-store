import { apiBaseUrl } from "../utils";

export const postManageIdVerificationInfo = async (idVerification, token) => {
    try {
        const response = await fetch(`${apiBaseUrl}/manage-id-verification-info`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(idVerification),
        });

        return await response.json();
    } catch (error) {
        console.error("Error in ID Verification Info:", error);
        throw error; 
    }
};