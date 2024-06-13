

import { apiBaseUrl } from "../utils"

export const getCategorydetailBySlug = async (slug) => {
  try {
    const response = await fetch(
      `${apiBaseUrl}/category-detail-by-slug/${slug}`,
      { next: { revalidate: 1 } }
    );
    return await response.json();
  } catch (error) {
    console.error("Something went wrong fetching Category details Slug Data");
    console.info(error);
  }
};