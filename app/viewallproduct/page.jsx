"use client";
import { useEffect, useState } from "react";
import Sales from "../components/Sales";
import Service from "../components/Service";
import ViewAllBanner from "../components/viewAllProduct/ViewAllBanner";
import ViewAllCategoryTitle from "../components/viewAllProduct/ViewAllCategoryTitle";
import ViewAllProduct from "../components/viewAllProduct/ViewAllProduct";
import { getHomeFlashAndJfyProduct } from "../services/getHomeFlashAndJfyProduct";

const ViewAllProductPage = ({ searchParams }) => {
    const [viewProductData, setViewProductData] = useState([]);
    const [sectionTitle, setSectionTitle] = useState("View All Product");
    const [bannerUrl, setBannerUrl] = useState("/images/fashion.jpg");
    const [districtId, setDistrictId] = useState(null);
    useEffect(() => {
        const initialDistrictId = localStorage.getItem("districtId");
        setDistrictId(initialDistrictId || 47);
    }, []);
    console.log(districtId);
    
    console.log(viewProductData);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (districtId && searchParams) {
                    const justForYouProductData = await getHomeFlashAndJfyProduct(districtId);
                    switch (searchParams.type) {
                        case "justForYou":
                            setViewProductData(justForYouProductData?.results?.just_for_you?.for_you_products);
                            setSectionTitle("Just For You");
                            break;

                        case "flashSale":
                            setViewProductData(justForYouProductData?.results?.flash_sales_product);
                            setSectionTitle("Flash Sale");
                            break;

                        default:
                            setViewProductData(["No Data"]);
                            setSectionTitle("View All Product");
                            break;
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                
            }
        };
        fetchData();
    }, [districtId, searchParams]);

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
