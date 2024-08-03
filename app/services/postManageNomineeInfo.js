import { apiBaseUrl } from "../utils";

export const postManageNomineeInfo = async (nomineInfo, token) => {
    try {
        const response = await fetch(`${apiBaseUrl}/manage-nominee-info`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(nomineInfo),
        });

        return await response.json();
    } catch (error) {
        console.error("Error in Manage Nominee Info:", error);
        throw error; 
    }
};