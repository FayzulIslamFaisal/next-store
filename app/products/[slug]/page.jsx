"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
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
  // const [metaData, setMetaData] = useState({});

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
  }, [pathName]);

  // const metadataSocialMedia = () => {
  //   return {
  //     openGraph: {
  //       title: productInfo?.product_name,
  //       description: productInfo?.Short_description,
  //       url: "https://nagadhat.com.bd/",
  //       siteName: "nagadhat.com.bd",
  //       images: [
  //         {
  //           url: `https://v3.nagadhat.com/${productInfo?.product_thumbnail}`, // Must be an absolute URL
  //           width: 800,
  //           height: 600,
  //         },
  //         {
  //           url: `https://v3.nagadhat.com/${productInfo?.product_thumbnail}`, // Must be an absolute URL
  //           width: 1800,
  //           height: 1600,
  //           alt: "My custom alt",
  //         },
  //       ],
  //       locale: "en_US",
  //       type: "website",
  //     },
  //   };
  // };

  const metadata = {
    openGraph: {
      title: "Next.js",
      description: "The React Framework for the Web",
      url: "https://nextjs.org",
      siteName: "Next.js",
      images: [
        {
          url: "https://static-01.daraz.com.bd/p/57703e043589d286263bb30487d44fd4.jpg", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://static-01.daraz.com.bd/p/57703e043589d286263bb30487d44fd4.jpg", // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };

  /*  useEffect(() => {
    const updateMetaData = metadataSocialMedia();
    setMetaData(updateMetaData);
  }, [productInfo]); */

  return (
    <>
      <section className="product-details-section">
        <Head>{metadata}</Head>
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
    </>
  );
};

export default ProductSinglePage;
