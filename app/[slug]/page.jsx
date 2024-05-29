"use client";
import Head from "next/head";
import Sales from "../components/Sales";
import Service from "../components/Service";
import Breadcrumb from "../components/productDetail/Breadcrumb";
import ProductLeftSide from "../components/productDetail/ProductLeftSide";
import ProductRightSide from "../components/productDetail/ProductRightSide";
import { useEffect, useState } from "react";
import { getProductDetails } from "../services/getProductDetails";
import { metadata } from "../utils";

const ProductSinglePage = ({ params }) => {
  const { slug } = params;
  const [productInfo, setProductInfo] = useState({});
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
  console.log(productInfo);

  useEffect(() => {
    async function fetchData() {
      const flashSale = await getProductDetails();
      setProductInfo(flashSale?.results);
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="product-details-section">
        <Head>{metadata}</Head>
        <div className="container">
          <Breadcrumb />
          <div className="row product-details-info">
            <ProductLeftSide productInfo={productInfo} />
            <ProductRightSide />
          </div>
          <Sales bgcolor="bg-white" isHome={false} />
          <Service serviceItems={serviceItems} />
        </div>
      </section>
    </>
  );
};

export default ProductSinglePage;
