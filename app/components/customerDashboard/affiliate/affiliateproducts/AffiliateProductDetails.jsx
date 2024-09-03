"use client";
import AffiliateProductDetailsImg from "./AffiliateProductDetailsImg";
import ProductDetailsContent from "./ProductDetailsContent";
import { Suspense } from "react";
import ContainerProductLongDescription from "@/app/components/productDetail/ContainerProductLongDescription";

const AffiliateProductDetails = ({ productDetails }) => {
    const productGallery = productDetails?.gallery;
    return (
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-6 px-5">
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <AffiliateProductDetailsImg
                            productGallery={productGallery}
                            productDetails={productDetails}
                        />
                    </Suspense>
                </div>
                <div className="col-lg-6">
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <ProductDetailsContent productInfo={productDetails} />
                    </Suspense>
                </div>
            </div>
            <div>
                <Suspense fallback={<h1>Loading....</h1>}>
                    <ContainerProductLongDescription
                        productInfo={productDetails}
                    />
                </Suspense>
            </div>
        </div>
    );
};

export default AffiliateProductDetails;
