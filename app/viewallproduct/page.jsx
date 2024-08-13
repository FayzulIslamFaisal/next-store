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
import { useSearchParams } from "next/navigation";
import CategoryPagination from "../components/productCategory/CategoryPagination";

const ViewAllProductPage = () => {
    const [viewProductData, setViewProductData] = useState([]);
    const [recentViewProductData, setRecentViewProductData] = useState([]);
    const [flashSaleEndData, setFlashSaleEndData] = useState(null);
    const [sectionTitle, setSectionTitle] = useState("View All Product");
    const [bannerUrl, setBannerUrl] = useState("/images/fashion.jpg");
    const [districtId, setDistrictId] = useState(null);
    const { status, data: session } = useSession();
    const [outletId, setOutletId] = useState(0);
    const [lastPage, setLastPage] = useState(1); // New state for last page
    const [currentPages, setCurrentPages] = useState(1); // New state for current pages

    const searchParams = useSearchParams();
    const type = searchParams.get('type');

    useEffect(() => {
        const page = searchParams.get('page');
        if (page && page !== currentPages) {
            setCurrentPages( parseInt(page));
        }
    }, [searchParams, currentPages]);
    const limit = 12; //Per Page Category

    useEffect(() => {
        const initialOutletId = localStorage.getItem("outletId");
        setOutletId(initialOutletId ? parseInt(initialOutletId) : 3);
    }, [session]);

    useEffect(() => {
        const initialDistrictId = localStorage.getItem("districtId");
        setDistrictId(initialDistrictId || 47);
    }, []);
    // useEffect(() => {
    const recentViewConfigure = async () => {
        if (session) {
            const recentViewProductFetch = await fetchRecentViewProducts(
                session?.accessToken,
                outletId
            );
            // setViewProductData(
            //     recentViewProductFetch?.results?.for_you_products
            // );
            setRecentViewProductData(
                recentViewProductFetch?.results?.for_you_products
            );
        } else {
            if (typeof window !== "undefined") {
                const storedProducts =
                    JSON.parse(localStorage.getItem("recentlyViewProducts")) ||
                    [];
                // setViewProductData(storedProducts);
                setRecentViewProductData(storedProducts);
            }
        }
    };
    //     recentViewConfigure();
    // }, [session, outletId]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (type && districtId) {
                    switch (type) {
                        case "justForYou":
                            try {
                                const justForYouProductData = await getHomeJustForYouProduct(districtId, currentPages, limit);
                                setViewProductData(justForYouProductData?.results?.just_for_you?.data);
                                setLastPage(justForYouProductData?.results?.just_for_you?.last_page)
                                setSectionTitle("Just For You");
                                recentViewConfigure();
                            } catch (error) {
                                console.error("Error fetching 'Just For You' products:", error);
                            }
                            break;

                        case "flashSale":
                            try {
                                const flashSaleProductData =
                                    await getHomeFlashSalesProduct(districtId, currentPages, limit);
                                const flashSaleInfoTime =
                                    flashSaleProductData?.results?.flash_sale_info
                                        ?.end_time;
                                setViewProductData(
                                    flashSaleProductData?.results
                                        ?.flash_sales_product.data
                                );
                                setLastPage(flashSaleProductData?.results
                                    ?.flash_sales_product.last_page)
                                setFlashSaleEndData(flashSaleInfoTime);
                                setSectionTitle("Flash Sale");
                                recentViewConfigure();
                            } catch (error) {
                                console.error("Error fetching 'Just For You' products:", error);
                            }
                            break;
                        case "recentview":
                            try {
                                setViewProductData([]); // Clear existing data
                                setRecentViewProductData([]); // Clear recent view data
                                if (session) {
                                    const recentViewProductFetch =
                                        await fetchRecentViewProducts(
                                            session?.accessToken,
                                            outletId
                                        );
                                    setViewProductData(
                                        recentViewProductFetch?.results
                                            ?.for_you_products || []
                                    );
                                } else {
                                    if (typeof window !== "undefined") {
                                        const storedProducts =
                                            JSON.parse(
                                                localStorage.getItem(
                                                    "recentlyViewProducts"
                                                )
                                            ) || [];
                                        setViewProductData(storedProducts);
                                    }
                                }
                                setSectionTitle("Recent View Product");
                                setRecentViewProductData([]);
                            } catch (error) {
                                console.error("Error fetching 'Just For You' products:", error);
                            }
                            break;
                        default:
                            setViewProductData("No Data");
                            setSectionTitle("View All Product");
                            break;
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [districtId, type]);

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
                flashSaleEndData={flashSaleEndData}
            />
            <ViewAllProduct viewProductData={viewProductData} />
            <CategoryPagination
                currentPage={currentPages}
                lastPage={lastPage}
            />
            {recentViewProductData?.length > 0 && (
                <Sales
                    isHome={false}
                    bgcolor="bg-white"
                    removePx={`removepadding-x`}
                />
            )}

            <Service serviceItems={serviceItems} />
        </div>
    );
};

export default ViewAllProductPage;
