import { apiBaseUrl } from "../utils";

export const getCategorydetailBySlug = async (slug, option) => {
    try {
        const params = new URLSearchParams(option).toString();
        const CategoryRootApi = `${apiBaseUrl}/category-detail-by-slug/${slug}?${params}`;
        const response = await fetch(CategoryRootApi, {
            next: { revalidate: 1 },
        });
        return await response.json();
    } catch (error) {
        console.error(
            "Something went wrong fetching Category details Slug Data"
        );
        console.info(error);
    }
};
