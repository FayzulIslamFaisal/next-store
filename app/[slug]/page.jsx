import Head from "next/head";
import Sales from "../components/Sales";
import Service from "../components/Service";
import Breadcrumb from "../components/productDetail/Breadcrumb";
import ProductLeftSide from "../components/productDetail/ProductLeftSide";
import ProductRightSide from "../components/productDetail/ProductRightSide";

export const metadata = {
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
const ProductSinglePage = ({ params }) => {
  const { slug } = params;

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
    <>
      <section className="product-details-section">
        <Head>{metadata}</Head>
        <div className="container">
          <Breadcrumb />
          <div className="row product-details-info">
            <ProductLeftSide />
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
