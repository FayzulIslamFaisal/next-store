"use client";
import AffiliateProductDetailsImg from "./AffiliateProductDetailsImg";
import ProductDetailsContent from "./ProductDetailsContent";
import { Suspense } from "react";
import ContainerProductLongDescription from "@/app/components/productDetail/ContainerProductLongDescription";

const AffiliateProductDetails = ({ productDetails }) => {
    const productGallery = productDetails?.gallery;
    return (
        <div className="container py-5">
            <Suspense
                fallback={
                    <div className=" d-flex align-items-center justify-content-center vh-100">
                        <h1 className="text-center">Loading... </h1>;
                    </div>
                }
            >
                <div className="row g-5">
                    <div className="col-lg-6 px-5">
                        <AffiliateProductDetailsImg
                            productGallery={productGallery}
                            productDetails={productDetails}
                        />
                    </div>
                    <div className="col-lg-6">
                        <ProductDetailsContent productInfo={productDetails} />
                    </div>
                </div>
                <div>
                    <ContainerProductLongDescription
                        productInfo={productDetails}
                    />
                </div>
            </Suspense>
        </div>
    );
};

export default AffiliateProductDetails;
