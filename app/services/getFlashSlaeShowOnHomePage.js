
import { apiBaseUrl } from "../utils";

export const  getFlashSlaeShowOnHomePage = async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/get-flash-sale-info`, {
      next: { revalidate: 1 }}
    );
    return await response.json();
  } catch (error) {
    console.error("Something went wrong fetching Flash Sale Show On Home Page Data");
    console.info(error);
  }
};