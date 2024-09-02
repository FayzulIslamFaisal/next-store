"use client";

import AffiliateProductDetailsImg from "@/app/components/customerDashboard/affiliate/affiliateproducts/AffiliateProductDetailsImg";
import ResaleProductDetailsContent from "@/app/components/customerDashboard/affiliate/affiliateproducts/ResaleProductDetailsContent";
import ResaleProductLongDescription from "@/app/components/productDetail/ResaleProductLongDescription";
import { getAffiliateResaleProductDetail } from "@/app/services/affiliate/affiliateproducts/getAffiliateResaleProductDetail";
import { useSession } from "next-auth/react";
import { Suspense, useEffect, useState } from "react";

const ResaleProductDetailsPage = ({ params }) => {
    const [productDetails, setProductDetails] = useState({});
    const [productGallery, setProductGallery] = useState([]);
    const [outletId, setOutletId] = useState(0);
    const { data: session, status } = useSession();

    const productId = params.Id;
    useEffect(() => {
        const initialOutletId = localStorage.getItem("outletId");
        setOutletId(initialOutletId ? parseInt(initialOutletId) : 3);
    }, []);

    useEffect(() => {
        if (status === "authenticated" && productId && outletId) {
            const fetchResaleProduct = async () => {
                try {
                    const resaleProductInfo =
                        await getAffiliateResaleProductDetail(
                            session?.accessToken,
                            productId,
                            outletId
                        );
                    const resaleProductResult =
                        resaleProductInfo?.results || {};
                    setProductDetails(resaleProductResult);
                    setProductGallery(resaleProductResult?.gallery);
                } catch (error) {
                    console.error(
                        "Error fetching resale product details:",
                        error
                    );
                }
            };

            fetchResaleProduct();
        }
    }, [status, session?.accessToken, productId, outletId]);

    console.log(productDetails);
    console.log(productGallery);

    return (
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-6 px-5">
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <AffiliateProductDetailsImg
                            productGallery={productGallery}
                            productDetails={productDetails}
                        />
                    </Suspense>
                </div>
                <div className="col-lg-6">
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <ResaleProductDetailsContent
                            productDetails={productDetails}
                        />
                    </Suspense>
                </div>
            </div>
            <div>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <ResaleProductLongDescription />
                </Suspense>
            </div>
        </div>
    );
};

export default ResaleProductDetailsPage;
