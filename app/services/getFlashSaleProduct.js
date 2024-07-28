import {apiBaseUrl} from '../utils';

export const getFlashSaleProduct = async (outletId) => {
  try {
    const response = await fetch(
      `${apiBaseUrl}/get-flash-sale-products/${outletId}`,
      { next: { revalidate: 1 } }
    );
    return await response.json();
  } catch (error) {
    console.error("Something went wrong fetching Flash Sale Product data");
    console.info(error);
  }
};
