"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FlipClock from "./FlipClock";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { getFlashSaleProduct } from "../services/getFlashSaleProduct";
// import getAllSettings from "../services/getAllSettings";
import { getHomeFlashSalesProduct } from "../services/getHomeFlashSalesProduct";
import { getFlashSlaeShowOnHomePage } from "../services/getFlashSlaeShowOnHomePage";
import { fetchRecentViewProducts } from "../services/getRecentViewProduct";
import { useSession } from "next-auth/react";

function Sales({ bgcolor = "", isHome = true, removePx = "", isRecentView }) {
    const [flashSaleProductList, setFlashSaleProductList] = useState([]);
    const [hasFlashSaleSettings, setHasFlashSaleSettings] = useState(false);
    const [flashSaleEndsTime, setFlashSaleEndsTime] = useState(null);
    const [recentViewProductList, setRecentViewProductList] = useState([]);
    const { status, data: session } = useSession();
    const searchParams = useSearchParams();
    const currentDate = new Date();
    const toDay = currentDate.getDay();
    const flashSaleEndDate = flashSaleEndsTime < toDay;

    const [districtId, setDistrictId] = useState(null);
    useEffect(() => {
        const initialDistrictId = localStorage.getItem("districtId");
        setDistrictId(initialDistrictId ? parseInt(initialDistrictId) : 47);
    }, []);

    useEffect(() => {
        async function fetchData() {
            const flashSale = await getHomeFlashSalesProduct(districtId);
            let flashProduct = flashSale?.results?.flash_sales_product;
            setFlashSaleProductList(flashProduct);
        }
        fetchData();
    }, [districtId]);

    useEffect(() => {
        let ignore = false;

        async function fetchSettingData() {
            const settingData = await getFlashSlaeShowOnHomePage();
            if (!ignore) {
                const settingAllData = settingData?.results;
                const showOnHome = settingAllData?.show_on_home;
                const flashSaleEndsTime = settingAllData?.end_time;
                if (showOnHome === 1) {
                    setHasFlashSaleSettings(true);
                    setFlashSaleEndsTime(flashSaleEndsTime);
                } else {
                    console.error(
                        "settingAllData is not an array",
                        settingAllData
                    );
                    setHasFlashSaleSettings(false);
                }
            }
        }
        fetchSettingData();
        return () => {
            ignore = true;
        };
    }, []);

    useEffect(() => {
        const recentViewConfigure = async () => {
            if (session) {
                const recentViewProductFetch = await fetchRecentViewProducts(
                    session?.accessToken,
                    3
                );
                setRecentViewProductList(
                    recentViewProductFetch?.results?.for_you_products
                );
            } else {
                if (typeof window !== "undefined") {
                    const storedProducts =
                        JSON.parse(
                            localStorage.getItem("recentlyViewProducts")
                        ) || [];
                    setRecentViewProductList(storedProducts);
                }
            }
        };
        recentViewConfigure();
    }, [session]);

    const settings = {
        centerPadding: "60px",
        dots: false,
        infinite: isHome ? false : false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows: flashSaleProductList?.length <= 6 ? false : true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    arrows: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    arrows: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                },
            },
        ],
    };

    return (
        hasFlashSaleSettings && (
            // flashSaleEndDate &&
            <section className={`flash-sale-area ${bgcolor} ${removePx}`}>
                <div className="container">
                    <SectionTitle
                        isSale={true}
                        title={
                            isHome
                                ? `Flash Sale`
                                : recentViewProductList?.length > 0 &&
                                  `Recent View`
                        }
                        target={isHome ? "flashSale" : `recentview`}
                        path="/viewallproduct"
                    >
                        {isHome && flashSaleEndsTime && (
                            <FlipClock endsAt={flashSaleEndsTime} />
                        )}
                    </SectionTitle>
                    <div className="row">
                        <div className="col-md-12">
                            {/* */}
                            <div
                                className={`${"flash-sale-content-area-grid "}`}
                            >
                                <Slider {...settings}>
                                    {isHome && !isRecentView
                                        ? flashSaleProductList?.length > 0 &&
                                          flashSaleProductList?.map(
                                              (product) => (
                                                  <ProductCard
                                                      key={product.id}
                                                      item={product}
                                                  />
                                              )
                                          )
                                        : recentViewProductList?.length > 0 &&
                                          recentViewProductList?.map(
                                              (product) => (
                                                  <ProductCard
                                                      key={product.id}
                                                      item={product}
                                                  />
                                              )
                                          )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    );
}

export default Sales;
