import { apiBaseUrl } from "../utils";

export const postOderPayment = async ( accessToken, paymentData ) => {
    
        const response = await fetch(
            `${apiBaseUrl}/order-payment/create`,
            {
                method: "POST",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(paymentData),
            }
        );

        return response.json();
    
};
