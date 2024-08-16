"use client";
import { Suspense, useEffect, useState } from "react";
import Sales from "@/app/components/Sales";
import Breadcrumb from "@/app/components/productDetail/Breadcrumb";
import ProductLeftSide from "@/app/components/productDetail/ProductLeftSide";
import ProductRightSide from "@/app/components/productDetail/ProductRightSide";
import { getProductDetails } from "@/app/services/getProductDetails";
import { storeProduct } from "@/app/utils";
import { useSearchParams } from "next/navigation";
import NotFound from "@/app/not-found";
import DefaultLoader from "@/app/components/defaultloader/DefaultLoader";
import { useSession } from "next-auth/react";
import { recentViewProductApi } from "@/app/services/postRecentViewProduct";

const ProductSinglePage = ({ params }) => {
    const { status, data: session } = useSession();
    const [productInfo, setProductInfo] = useState({});
    const searchParams = useSearchParams();
    const pathName = searchParams.toString();
    const [successCode, setSuccessCode] = useState(null);
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

    return (
        <>
            {successCode == 404 ? (
                <NotFound></NotFound>
            ) : (
                <section className="product-details-section">
                    <div className="container">
                        <Breadcrumb category={productInfo?.category} />
                        <Suspense fallback={<DefaultLoader />}>
                            {Object.keys(productInfo).length ? (
                                <>
                                    <div className="row product-details-info">
                                        <ProductLeftSide
                                            productInfo={productInfo}
                                            path_name={params}
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
