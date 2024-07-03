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
import { getHomeFlashAndJfyProduct } from "../services/getHomeFlashAndJfyProduct";
import { getFlashSlaeShowOnHomePage } from "../services/getFlashSlaeShowOnHomePage";

function Sales({
    bgcolor = "",
    isHome = true,
    removePx = "",
    isRecentView,
    recentViewProductList,
}) {
    const [flashSaleProductList, setFlashSaleProductList] = useState([]);
    const [hasFlashSaleSettings, setHasFlashSaleSettings] = useState(false);
    const [flashSaleEndsTime, setFlashSaleEndsTime] = useState(null);
    const searchParams = useSearchParams();
    let districtId = searchParams.get("districtId");
    useEffect(() => {
        async function fetchData() {
            if (!districtId) {
                districtId = 47;
            }
            const flashSale = await getHomeFlashAndJfyProduct(districtId);
            let flashProduct = flashSale?.results?.flash_sales_product;
            setFlashSaleProductList(flashProduct);
        }
        fetchData();
    }, []);

    useEffect(() => {
        let ignore = false;

        async function fetchSettingData() {
            const settingData = await getFlashSlaeShowOnHomePage();
            if (!ignore) {
                const settingAllData = settingData?.results;
                const showOnHome = settingAllData?.show_on_home;
                const flashSaleEndsTime = settingAllData?.end_time;
                if ( showOnHome === 1) {
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

    const settings = {
        centerPadding: "60px",
        dots: false,
        infinite: isHome ? false : false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows: flashSaleProductList?.length < 6 ? false : isHome ? false : true,
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
        <section className={`flash-sale-area ${bgcolor} ${removePx}`}>
            <div className="container">
                <SectionTitle
                    isSale={true}
                    title={isHome ? `Flash Sale` : `Recent View`}
                    target="flashSale"
                    path="/viewallproduct"
                >
                    {isHome && flashSaleEndsTime && <FlipClock endsAt={flashSaleEndsTime} />}
                </SectionTitle>
                <div className="row">
                    <div className="col-md-12">
                        <div className="flash-sale-content-area-grid">
                            <Slider {...settings}>
                                {isHome && !isRecentView
                                    ? flashSaleProductList?.length > 0 && flashSaleProductList?.map((product) => (
                                          <ProductCard
                                              key={product.id}
                                              item={product}
                                          />
                                      ))
                                    : recentViewProductList?.map((product) => (
                                          <ProductCard
                                              key={product.id}
                                              item={product}
                                          />
                                      ))}
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
