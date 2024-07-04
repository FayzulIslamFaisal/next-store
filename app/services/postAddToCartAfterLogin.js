export const addToCartProduct = async (cartItems, token) => {
    console.log(cartItems);
    const response = await fetch(
        "https://v3.nagadhat.com/api/add-to-cart-product",
        {
            method: "POST",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cart_items: [cartItems] }),
        }
    );

    console.log("post send response1111111111111111", response);
    return response.json();
};
