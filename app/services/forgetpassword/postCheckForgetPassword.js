import { apiBaseUrl } from "@/app/utils";

export const postCheckForgetPassword = async (mobileNumber) => {
    try {
        const response = await fetch(`${apiBaseUrl}/check-forget-password-otp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(mobileNumber),
        });

        return await response.json();
    } catch (error) {
        console.error("Error in forget password:", error);
        throw error;
    }
};
