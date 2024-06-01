import Pagination from "../components/productCategory/Pagination";
import Service from "../components/Service";
import ViewAllBanner from "../components/viewAllProduct/ViewAllBanner";
import ViewAllCategoryTitle from "../components/viewAllProduct/ViewAllCategoryTitle";
import ViewAllCategories from "../components/viewAllProduct/ViewAllCategories";
import Sales from "../components/Sales";
import { getHomeCategory } from "../services/getHomeCategory";
import { getHomeBrand } from "../services/getHomeBrand";

const viewAllProduct = async ({ searchParams }) => {
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
  
    let viewCategoryData = [];
    let sectionTitle = "View all";
    let bannerUrl = "/images/fashion.jpg";
    if (searchParams) {
        switch (searchParams.type) {
            case "category":
                viewCategoryData = await getHomeCategory();
                
                if (
                  viewCategoryData.length >= 1 &&
                  viewCategoryData[1].banner_image
                ) {
                  bannerUrl = `https://v3.nagadhat.com/${viewCategoryData[1].banner_image}`;
                }
                sectionTitle = "Categories";
                break;
            case "brand":
                const data = await getHomeBrand();
                viewCategoryData = data.results.brands;
                if (
                  viewCategoryData.length >= 1 &&
                  viewCategoryData[1].banner
                ) {
                  bannerUrl = `https://v3.nagadhat.com/${viewCategoryData[1].banner}`;
                }
                sectionTitle = "Brands";
                break;
            default:
                break;
        }
    }

    return (
        <div className="container view-all-product-container">
            <ViewAllBanner imageUrl={bannerUrl} />
            <ViewAllCategoryTitle title={sectionTitle} />
            <ViewAllCategories viewCategoryData={viewCategoryData} />
            <div className="row view-all-product-pagination-area">
                <div className="col-md-12 text-center">
                    <Pagination />
                </div>
            </div>
            <Sales
                isHome={false}
                bgcolor="bg-white"
                removePx={`removepadding-x`}
            />
            <Service serviceItems={serviceItems} />
        </div>
    );
};

export default viewAllProduct;
