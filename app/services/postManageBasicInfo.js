import { apiBaseUrl } from "../utils";

export const postManageBasicInfo = async(formData,token) => {
    try {
        const response = await fetch(`${apiBaseUrl}/manage-basic-info`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        });
        return await response.json();
    } catch (error) {
        console.error('Something went wrong Update Manage Basic Info Data');
        console.info(error);
    }
}
