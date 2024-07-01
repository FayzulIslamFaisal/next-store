import { apiBaseUrl } from "../utils";

export const getCategorydetailBySlug = async (slug, option) => {
    try {
        let CategoryRootApi = '';
        if ( option ) {
            const params = new URLSearchParams(option).toString();
            CategoryRootApi = `${apiBaseUrl}/category-detail-by-slug/${slug}?${params}`;
        } else {
            CategoryRootApi = `${apiBaseUrl}/category-detail-by-slug/${slug}`;
        }

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
