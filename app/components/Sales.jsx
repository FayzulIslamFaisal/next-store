"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FlipClock from "./FlipClock";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getHomeFlashAndJfyProduct } from "../services/getHomeFlashAndJfyProduct";

function Sales({
  bgcolor = "",
  isHome = true,
  removePx = "",
  isRecentView,
  recentViewProductList,
}) {
  const [flashSaleProductList, setFlashSaleProductList] = useState([]);
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

  const settings = {
    centerPadding: "60px",
    dots: false,
    infinite: isHome ? true : false,
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
                {isHome && !isRecentView
                  ? flashSaleProductList?.map((product) => (
                      <ProductCard key={product.id} item={product} />
                    ))
                  : recentViewProductList?.map((product) => (
                      <ProductCard key={product.id} item={product} />
                    ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sales;
