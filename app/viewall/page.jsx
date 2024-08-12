
import Service from "../components/Service";
import ViewAllBanner from "../components/viewAllProduct/ViewAllBanner";
import ViewAllCategoryTitle from "../components/viewAllProduct/ViewAllCategoryTitle";
import ViewAllCategories from "../components/viewAllProduct/ViewAllCategories";
import ViewAllFlashCheck from "../components/viewAllProduct/ViewAllFlashCheck";
import { getHomeCategory } from "../services/getHomeCategory";
import { getHomeBrand } from "../services/getHomeBrand";
import { NagadhatPublicUrl } from "../utils";
import CategoryPagination from "../components/productCategory/CategoryPagination";

const ViewAllPage = async ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
    let viewCategoryData = [];
    let sectionTitle = "View all";
    let bannerUrl = "/images/fashion.jpg";
    let lastPage = 1;
    const limit = 24; //Per Page Category

    switch (searchParams.type) {
        case "category":
            const categoryData = await getHomeCategory(page, limit);
            viewCategoryData = categoryData.data;
            lastPage = categoryData.last_page;
            if (viewCategoryData?.length >= 1 && viewCategoryData[0].banner_image) {
                bannerUrl = `${NagadhatPublicUrl}/${viewCategoryData[0].banner_image}`;
            }
            sectionTitle = "Categories";
            break;
        case "brand":
            const brandData = await getHomeBrand(page, limit);
            viewCategoryData = brandData.results.brands.data;
            lastPage = brandData.results.brands.last_page;
            if (viewCategoryData?.length >= 1 && viewCategoryData[0].banner) {
                bannerUrl = `${NagadhatPublicUrl}/${viewCategoryData[0].banner}`;
            }
            sectionTitle = "Brands";
            break;
        default:
            break;
    }

    const serviceItems = [
        {
            imageurl: "/images/pickup.svg",
            altText: "pickup image",
            title: " Fast Delivery",
            subTitle: "Free For All Type Order",
        },
        {
            imageurl: "/images/gift-cart.svg",
            altText: "gift cart",
            title: " Best Quality",
            subTitle: "Best Product Peices",
        },
        {
            imageurl: "/images/gift-box.svg",
            altText: "gift box",
            title: " Exchange Offer",
            subTitle: "One Day To Changes",
        },
        {
            imageurl: "/images/headphone.svg",
            altText: "headphone",
            title: "  Help Center",
            subTitle: "Support System 24/7",
        },
    ];


    return (
        <div className="container view-all-product-container">
            <ViewAllBanner imageUrl={bannerUrl} />
            <ViewAllCategoryTitle title={sectionTitle} />
            <ViewAllCategories viewCategoryData={viewCategoryData} />
            <div className="view-all-product-pagination-area ">
                <div className="d-flex justify-content-center align-items-center">
                    <CategoryPagination
                        currentPage={page} 
                        lastPage={lastPage} 
                    />
                </div>
            </div>
            <ViewAllFlashCheck />
            <Service serviceItems={serviceItems} />
        </div>
    );
};

export default ViewAllPage;
