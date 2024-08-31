"use client";
import AffiliateProductDetailsImg from "./AffiliateProductDetailsImg";
import ProductLongDescription from "@/app/components/productDetail/ProductLongDescription";
import ProductDetailsContent from "./ProductDetailsContent";
import { useEffect, useState } from "react";
import { getProductDetails } from "@/app/services/getProductDetails";

const AffiliateProductDetails = ({ slug }) => {
    const [outletId, setOutletId] = useState(0);
    const [productInfo, setProductInfo] = useState(null);
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
                console.log("{{ {pathName} }}", pathName);

                const fetchedProductInfo = await getProductDetails(pathName);
                setProductInfo(fetchedProductInfo);
            } catch (error) {
                console.error("Failed to fetch product details:", error);
            }
        }

        fetchData();
    }, [outletId, slug]);

    console.log("productInfo------", productInfo);

    return (
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-6 px-5">
                    <AffiliateProductDetailsImg />
                </div>
                <div className="col-lg-6">
                    <ProductDetailsContent />
                </div>
            </div>
            <div>
                <ProductLongDescription />
            </div>
        </div>
    );
};

export default AffiliateProductDetails;
