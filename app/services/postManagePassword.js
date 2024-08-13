import { apiBaseUrl } from "../utils";

export const  postManagePassword = async (managPassword, token) => {
    try {
        const response = await fetch(`${apiBaseUrl}/manage-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(managPassword),
        });

        return await response.json();
    } catch (error) {
        console.error("Error in Manage Password Info:", error);
        throw error; 
    }
}

export default postManagePassword