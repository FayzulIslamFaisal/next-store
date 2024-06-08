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

function Sales({
  bgcolor = "",
  isHome = true,
  removePx = "",
  isRecentView,
  recentViewProductList,
}) {
  const [flashSaleProductList, setFlashSaleProductList] = useState([]);
  const [fetchProduct, setFetchProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const flashSale = await getFlashSaleProduct();
      setFlashSaleProductList(flashSale?.results);
    }
    fetchData();
  }, []);

  // const flashSaleProductList = [
  //     {
  //         id: 1,
  //         image: "/images/flash-img1.jpg",
  //         altText: "flash sale image",
  //         path: "#",
  //         title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
  //         price: 685.0,
  //         addToCart: <AddToCartButton />,
  //         like: <Like />,
  //     },
  //     {
  //         id: 2,
  //         image: "/images/flash-img2.jpg",
  //         altText: "flash sale image",
  //         path: "#",
  //         title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
  //         price: 685.0,
  //         addToCart: <AddToCartButton />,
  //         like: <Like />,
  //     },
  //     {
  //         id: 3,
  //         image: "/images/flash-img3.jpg",
  //         altText: "flash sale image",
  //         path: "#",
  //         title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
  //         price: 685.0,
  //         addToCart: <AddToCartButton />,
  //         like: <Like />,
  //     },
  //     {
  //         id: 4,
  //         image: "/images/flash-img4.jpg",
  //         altText: "flash sale image",
  //         path: "#",
  //         title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
  //         price: 685.0,
  //         addToCart: <AddToCartButton />,
  //         like: <Like />,
  //     },
  //     {
  //         id: 5,
  //         image: "/images/flash-img3.jpg",
  //         altText: "flash sale image",
  //         path: "#",
  //         title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
  //         price: 685.0,
  //         addToCart: <AddToCartButton />,
  //         like: <Like />,
  //     },
  //     {
  //         id: 6,
  //         image: "/images/flash-img5.jpg",
  //         altText: "flash sale image",
  //         path: "#",
  //         title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
  //         price: 685.0,
  //         addToCart: <AddToCartButton />,
  //         like: <Like />,
  //     },
  //     {
  //         id: 7,
  //         image: "/images/flash-img6.jpg",
  //         altText: "flash sale image",
  //         path: "#",
  //         title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
  //         price: 685.0,
  //         addToCart: <AddToCartButton />,
  //         like: <Like />,
  //     },
  //     {
  //         id: 8,
  //         image: "/images/flash-img3.jpg",
  //         altText: "flash sale image",
  //         path: "#",
  //         title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
  //         price: 685.0,
  //         addToCart: <AddToCartButton />,
  //         like: <Like />,
  //     },
  // ];
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
        <SectionTitle title={isHome ? `Flash Sale` : `Recent View`}>
          {isHome && <FlipClock endsAt={`2024-06-01 12:00`} />}
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
