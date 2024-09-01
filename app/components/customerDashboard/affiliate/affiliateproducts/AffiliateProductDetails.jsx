"use client";
import AffiliateProductDetailsImg from "./AffiliateProductDetailsImg";
import ProductLongDescription from "@/app/components/productDetail/ProductLongDescription";
import ProductDetailsContent from "./ProductDetailsContent";
import { Suspense, useEffect, useState } from "react";
import { getProductDetails } from "@/app/services/getProductDetails";

const AffiliateProductDetails = ({ slug }) => {
    const [outletId, setOutletId] = useState(0);
    const [productInfo, setProductInfo] = useState(null);
    const [productGallery, setProductGallery] = useState([]);
    console.log("pathName------>>>", slug, outletId);

    useEffect(() => {
        const initialOutletId = localStorage.getItem("outletId");
        setOutletId(initialOutletId ? parseInt(initialOutletId) : 3);
    }, []);

    useEffect(() => {
        if (!slug || !outletId) return;

        async function fetchData() {
            try {
                const pathName = `outlet_id=${outletId}&slug=${slug}`;
                const fetchedProductInfo = await getProductDetails(pathName);
                const productResult = fetchedProductInfo?.results;
                setProductInfo(productResult);
                setProductGallery(productResult?.gallery);
            } catch (error) {
                console.error("Failed to fetch product details:", error);
            }
        }
        fetchData();
    }, [outletId, slug]);

    return (
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-6 px-5">
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <AffiliateProductDetailsImg
                            productGallery={productGallery}
                        />
                    </Suspense>
                </div>
                <div className="col-lg-6">
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <ProductDetailsContent productInfo={productInfo} />
                    </Suspense>
                </div>
            </div>
            <div>
                <Suspense fallback={<h1>Loading....</h1>}>
                    <ProductLongDescription productInfo={productInfo} />
                </Suspense>
            </div>
        </div>
    );
};

export default AffiliateProductDetails;
