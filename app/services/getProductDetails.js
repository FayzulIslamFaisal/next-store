export const getProductDetails = async () => {
  try {
    const response = await fetch(
      `https://v3.nagadhat.com/api/get-product-details?outlet_id=1&product_id=9`,
      { next: { revalidate: 1 } }
    );
    return await response.json();
  } catch (error) {
    console.error("Something went wrong fetching Flash Sale Product data");
    console.info(error);
  }
};
