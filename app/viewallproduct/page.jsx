"use client";

import { useEffect, useState } from "react";
import Sales from "../components/Sales";
import Service from "../components/Service";
import ViewAllBanner from "../components/viewAllProduct/ViewAllBanner";
import ViewAllCategoryTitle from "../components/viewAllProduct/ViewAllCategoryTitle";
import ViewAllProduct from "../components/viewAllProduct/ViewAllProduct";
import { getHomeFlashSalesProduct } from "../services/getHomeFlashSalesProduct";
import { getHomeJustForYouProduct } from "../services/getHomeJustForYouProduct";
import { fetchRecentViewProducts } from "../services/getRecentViewProduct";
import { useSession } from "next-auth/react";

const ViewAllProductPage = ({ searchParams }) => {
    const [viewProductData, setViewProductData] = useState([]);
    const [sectionTitle, setSectionTitle] = useState("View All Product");
    const [bannerUrl, setBannerUrl] = useState("/images/fashion.jpg");
    const [districtId, setDistrictId] = useState(null);
    const { status, data: session } = useSession();
    const recentViewConfigure = async () => {
        if (session) {
            const recentViewProductFetch = await fetchRecentViewProducts(
                session?.accessToken,
                3
            );
            setViewProductData(
                recentViewProductFetch?.results?.for_you_products
            );
        } else {
            if (typeof window !== "undefined") {
                const storedProducts =
                    JSON.parse(localStorage.getItem("recentlyViewProducts")) ||
                    [];
                setViewProductData(storedProducts);
            }
        }
    };

    useEffect(() => {
        const initialDistrictId = localStorage.getItem("districtId");
        setDistrictId(initialDistrictId || 47);
    }, []);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
               
            if (searchParams && districtId) {
                const flashSaleProductData = await getHomeFlashSalesProduct(
                    districtId
                );

                const justForYouProductData = await getHomeJustForYouProduct(
                    districtId
                );
                switch (searchParams.type) {
                    case "justForYou":
                        setViewProductData(
                            justForYouProductData?.results?.just_for_you
                                ?.for_you_products
                        );
                        setSectionTitle("Just For You");
                        break;

                    case "flashSale":
                        setViewProductData(
                            flashSaleProductData?.results?.flash_sales_product
                        );
                        setSectionTitle("Flash Sale");
                        break;
                    case "recentview":
                        recentViewConfigure();
                        setSectionTitle("Recent View Product");
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
