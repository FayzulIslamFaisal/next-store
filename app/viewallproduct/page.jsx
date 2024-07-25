// import Pagination from "../components/productCategory/Pagination";
import Sales from "../components/Sales";
import Service from "../components/Service";
import ViewAllBanner from "../components/viewAllProduct/ViewAllBanner";
import ViewAllCategoryTitle from "../components/viewAllProduct/ViewAllCategoryTitle";
import ViewAllProduct from "../components/viewAllProduct/ViewAllProduct";
import { getJustForYouProduct } from "../services/getJustForYouProduct";
import { getFlashSaleProduct } from "../services/getFlashSaleProduct";
// import { NagadhatPublicUrl } from "../utils";

const ViewAllProductPage = async ({ searchParams }) => {
    let viewProductData = [];
    let sectionTitle = "View All Product";
    let bannerUrl = "/images/fashion.jpg";
    if (searchParams) {
        switch (searchParams.type) {
            case "justForYou":
                const justForYouProductData = await getJustForYouProduct();
                viewProductData =
                    justForYouProductData?.results?.for_you_products;
                sectionTitle = "Just For You";
                break;

            case "flashSale":
                const flashSaleProduct = await getFlashSaleProduct();
                viewProductData = flashSaleProduct?.results;
                sectionTitle = "Flash Sale";
                break;
            default:
                break;
        }
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
            <ViewAllCategoryTitle
                title={sectionTitle}
                isFlashSaleTimer={true}
            />
            <ViewAllProduct viewProductData={viewProductData} />
            {/* Pagination code */}
            {/* <div className="row view-all-product-pagination-area">
                <div className="col-md-12 text-center">
                    <Pagination />
                </div>
            </div> */}
            <Sales
                isHome={false}
                bgcolor="bg-white"
                removePx={`removepadding-x`}
            />
            <Service serviceItems={serviceItems} />
        </div>
    );
};

export default ViewAllProductPage;
