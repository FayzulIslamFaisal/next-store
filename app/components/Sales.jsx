"use client";

import { useEffect, useState } from "react";
import FlipClock from "./FlipClock";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
// import AddToCartButton from "./AddToCartButton";
// import Like from "./Like";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getFlashSaleProduct } from "../services/getFlashSaleProduct";
import getAllSettings from "../services/getAllSettings";

function Sales({ bgcolor = "", isHome = true, removePx = "" }) {
  const [flashSaleProductList, setFlashSaleProductList] = useState([]);
  const [hasFlashSaleSettings, setHasFlashSaleSettings] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const flashSale = await getFlashSaleProduct();
      setFlashSaleProductList(flashSale?.results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let ignore = false;

    async function fetchSettingData() {
      const settingData = await getAllSettings();
      if (!ignore) {
        const settingAllData = settingData?.results;
        const flashSaleProduct = settingAllData
          ?.filter(
            (settingItem) =>
              settingItem.type === "Flash Sale" && settingItem.status === 1
          )
          .map((settingItem) =>
            settingItem.type.split(" ").join("_").toLowerCase()
          );

        if (flashSaleProduct.length > 0) {
          setHasFlashSaleSettings(true);
        } else {
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
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: isHome ? true : false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
            {isHome && <FlipClock endsAt={`2024-06-25 12:00`} />}
          </SectionTitle>
          <div className="row">
            <div className="col-md-12">
              <div className="flash-sale-content-area-grid">
                <Slider {...settings}>
                  {flashSaleProductList?.map((product) => (
                    <ProductCard key={product.id} item={product} />
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
