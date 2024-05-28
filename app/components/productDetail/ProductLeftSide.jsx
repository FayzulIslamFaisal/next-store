import Head from "next/head";
import ProductImage from "./ProductImage";
import ProductInformetion from "./ProductInformetion";
import ProductLongDescription from "./ProductLongDescription";

const ProductLeftSide = () => {
  return (
    <>
      <Head>
        <title>Welcome to the Product Page</title>
        <meta property="og:title" content="Welcome to the Product Page" />
        <meta property="og:description" content="Check out this product" />
        <meta
          property="og:image"
          content="https://nagadhat.com.bd/storage/media/project_images/1674733711_Discount-Partners-Web-Slider.jpg"
        />
        <meta
          property="og:url"
          content="https://next-store-self-five.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nagadhat" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome to the Product Page" />
        <meta name="twitter:description" content="Check out this product" />
        <meta
          name="twitter:image"
          content="https://nagadhat.com.bd/storage/media/project_images/1674733711_Discount-Partners-Web-Slider.jpg"
        />
      </Head>
      <div className=" col-xl-9">
        <div className="row">
          <ProductImage />
          <ProductInformetion />
        </div>
        <ProductLongDescription />
      </div>
    </>
  );
};

export default ProductLeftSide;
