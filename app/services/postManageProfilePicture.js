import { apiBaseUrl } from "../utils";

export const postManageProfilePicture = async (profilePicture, token) => {
    try {
        const response = await fetch(`${apiBaseUrl}/manage-profile-picture`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(profilePicture),
        });

        return await response.json();
    } catch (error) {
        console.error("Error in Manage Nominee Info:", error);
        throw error; 
    }
};