import { apiBaseUrl } from "../utils";

export const getDivisions = async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/get-divisions`, {
      next: { revalidate: 1 },
    });
    return await response.json();
  } catch (error) {
    console.error("Something went wrong fetching division data");
    console.info(error);
  }
};
