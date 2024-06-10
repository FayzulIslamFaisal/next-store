"use client";
import Head from "next/head";
import { Suspense, useEffect, useState } from "react";
import Sales from "@/app/components/Sales";
import Service from "@/app/components/Service";
import Breadcrumb from "@/app/components/productDetail/Breadcrumb";
import ProductLeftSide from "@/app/components/productDetail/ProductLeftSide";
import ProductRightSide from "@/app/components/productDetail/ProductRightSide";
import { getProductDetails } from "@/app/services/getProductDetails";
import { productDetailsPageMetaDataHandler } from "@/app/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { api_base_url } from "@/app/config";
const ProductSinglePage = ({ params }) => {
  const { slug } = params;
  const [productInfo, setProductInfo] = useState({});
  const searchParams = useSearchParams();
  const pathName = searchParams.toString();

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

  useEffect(() => {
    async function fetchData() {
      const flashSale = await getProductDetails(pathName);
      setProductInfo(flashSale?.results);
    }
    fetchData();
  }, []);

  return (
    <Suspense>
      <section className="product-details-section">
        <Head>{productDetailsPageMetaDataHandler(productInfo)}</Head>
        <div className="container">
          <Breadcrumb />
          <div className="row product-details-info">
            <ProductLeftSide productInfo={productInfo} path_name={pathName} />
            <ProductRightSide productInfo={productInfo} />
          </div>
          <Sales bgcolor="bg-white" isHome={false} />
          <Service serviceItems={serviceItems} />
        </div>
      </section>
    </Suspense>
  );
};

export default ProductSinglePage;
