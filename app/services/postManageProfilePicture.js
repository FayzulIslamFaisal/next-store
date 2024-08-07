import { apiBaseUrl } from "../utils";

export const postManageProfilePicture = async (profilePicture, token) => {
    try {
        const formData = new FormData();
        formData.append('profile_picture', profilePicture);

        const response = await fetch(`${apiBaseUrl}/manage-profile-picture`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        return await response.json();
    } catch (error) {
        console.error("Error in Manage Nominee Info:", error);
        throw error; 
    }
};