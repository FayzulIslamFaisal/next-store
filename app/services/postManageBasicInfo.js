import { apiBaseUrl } from "../utils";

export const postManageBasicInfo = async (formData, token) => {
    try {
        const response = await fetch(`${apiBaseUrl}/manage-basic-info`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        });

        // if (!response.ok) {
           
        //     let errorData;
        //     try {
        //         errorData = await response.json();
        //     } catch (e) {
        //         throw new Error("An unexpected error occurred");
        //     }

           
        //     throw new Error(errorData.message || "Failed to update profile. Please try again.");
        // }

        return await response.json();
    } catch (error) {
        console.error("Error in postManageBasicInfo:", error);
        throw error; 
    }
};