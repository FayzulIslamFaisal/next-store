
import { apiBaseUrl } from "../utils";

export const postManageIdVerificationInfo = async (idVerification, token) => {
    try {
        const formData = new FormData();
        formData.append('nid_no', idVerification.nid_no);
        formData.append('nid_front', idVerification.nid_front);

        const response = await fetch(`${apiBaseUrl}/manage-id-verification-info`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        return await response.json();
    } catch (error) {
        console.error("Error in ID Verification Info:", error);
        throw error; 
    }
};
