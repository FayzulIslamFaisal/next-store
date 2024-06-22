// apiUtils.js
import { apiBaseUrl } from "../utils";

export const getQuestionAndAns = async (productId) => {
  try {
    const response = await fetch(`${apiBaseUrl}/questions/${productId}`, {
      next: { revalidate: 1 },
    });

    // Check if the response is not okay (status code not in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Check if the response is JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Received content is not JSON");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Something went wrong fetching question data:", error);
  }
};
