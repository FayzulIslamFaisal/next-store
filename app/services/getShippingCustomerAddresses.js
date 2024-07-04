export const getCustomerAllShippingAddress = async (token) => {
    const res = await fetch(
        "https://v3.nagadhat.com/api/get-shipping-address",
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (!res.ok) {
        console.error(`get shippingAdd`);
    }

    const data = await res.json();
    return data;
};
