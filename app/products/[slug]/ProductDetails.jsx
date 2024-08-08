"use client";
import Head from "next/head";
import { Suspense, useEffect, useState } from "react";
import Sales from "@/app/components/Sales";
import Service from "@/app/components/Service";
import Breadcrumb from "@/app/components/productDetail/Breadcrumb";
import ProductLeftSide from "@/app/components/productDetail/ProductLeftSide";
import ProductRightSide from "@/app/components/productDetail/ProductRightSide";
import { getProductDetails } from "@/app/services/getProductDetails";
import { productDetailsPageMetaDataHandler, storeProduct } from "@/app/utils";
import { usePathname, useSearchParams } from "next/navigation";
import NotFound from "@/app/not-found";
import DefaultLoader from "@/app/components/defaultloader/DefaultLoader";
import { useSession } from "next-auth/react";
import { recentViewProductApi } from "@/app/services/postRecentViewProduct";
import { fetchRecentViewProducts } from "@/app/services/getRecentViewProduct";
const ProductSinglePage = ({ params }) => {
    const { slug } = params;
    const { status, data: session } = useSession();
    const [productInfo, setProductInfo] = useState({});
    const searchParams = useSearchParams();
    const pathName = searchParams.toString();
    const [successCode, setSuccessCode] = useState(null);
    const [recentViewProduct, setRecentViewProduct] = useState([]);
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
            const productInfo = await getProductDetails(pathName);
            setSuccessCode(productInfo?.code);
            if (productInfo?.results) {
                const productDetails = productInfo.results;
                const {
                    id,
                    product_name,
                    price,
                    product_thumbnail,
                    outlet_id,
                    category,
                    variations,
                    max_quantity,
                } = productDetails;
                const recentViewProductInformation = {
                    id: id,
                    product_name,
                    mrp_price:
                        price?.original?.results?.discounted_price !== 0
                            ? price?.original?.results?.discounted_price
                            : price?.original?.results?.regular_price,
                    outlet_id: outlet_id,
                    product_thumbnail: product_thumbnail,
                    variations: variations,
                    max_quantity: max_quantity,
                };

                const productInfoRecentView = {
                    product_id: id,
                    outlet_id: outlet_id,
                    category_id: category[0]?.id,
                };
                if (session) {
                    await recentViewProductApi(
                        productInfoRecentView,
                        session?.accessToken
                    );
                }

                storeProduct(recentViewProductInformation);

                setProductInfo(productDetails);
            }
        }
        fetchData();
    }, [pathName, session]);

    const metadata = {
        openGraph: {
            title: "Next.js",
            description: "The React Framework for the Web",
            url: "https://nextjs.org",
            siteName: "Next.js",
            images: [
                {
                    url: "https://static-01.daraz.com.bd/p/57703e043589d286263bb30487d44fd4.jpg",
                    width: 800,
                    height: 600,
                },
                {
                    url: "https://static-01.daraz.com.bd/p/57703e043589d286263bb30487d44fd4.jpg",
                    width: 1800,
                    height: 1600,
                    alt: "My custom alt",
                },
            ],
            locale: "en_US",
            type: "website",
        },
    };

    return (
        <>
            {successCode == 404 ? (
                <NotFound></NotFound>
            ) : (
                <section className="product-details-section">
                    <Head>
                        <title>{metadata.openGraph.title}</title>
                        <meta
                            name="description"
                            content={metadata.openGraph.description}
                        />
                        <meta
                            property="og:title"
                            content={metadata.openGraph.title}
                        />
                        <meta
                            property="og:description"
                            content={metadata.openGraph.description}
                        />
                        <meta
                            property="og:url"
                            content={metadata.openGraph.url}
                        />
                        <meta
                            property="og:site_name"
                            content={metadata.openGraph.siteName}
                        />
                        <meta
                            property="og:locale"
                            content={metadata.openGraph.locale}
                        />
                        <meta
                            property="og:type"
                            content={metadata.openGraph.type}
                        />
                        {metadata.openGraph.images.map((image, index) => (
                            <meta
                                key={index}
                                property="og:image"
                                content={image.url}
                            />
                        ))}
                    </Head>
                    <div className="container">
                        <Breadcrumb category={productInfo?.category} />
                        <Suspense fallback={<DefaultLoader />}>
                            {Object.keys(productInfo).length ? (
                                <>
                                    <div className="row product-details-info">
                                        <ProductLeftSide
                                            productInfo={productInfo}
                                            path_name={pathName}
                                        />
                                        <ProductRightSide
                                            productInfo={productInfo}
                                        />
                                    </div>
                                    <Sales
                                        isHome={false}
                                        bgcolor="bg-white"
                                        removePx={`removepadding-x`}
                                        isRecentView={true}
                                    />
                                    {/* <Service serviceItems={serviceItems} /> */}
                                </>
                            ) : (
                                <DefaultLoader />
                            )}
                        </Suspense>
                    </div>
                </section>
            )}
        </>
    );
};

export default ProductSinglePage;
