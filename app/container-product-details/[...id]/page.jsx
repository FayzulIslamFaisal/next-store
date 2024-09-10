"use client";
import AffiliateProductDetails from "@/app/components/customerDashboard/affiliate/affiliateproducts/AffiliateProductDetails";
import PrivateRoute from "@/app/components/PrivateRoute/PrivateRoute";
import { getAffiliateContainerDetails } from "@/app/services/affiliate/affiliateproducts/getAffiliateContainerDetails";
import { useSession } from "next-auth/react";
import { Suspense, useEffect, useState } from "react";

const AffiliateProductDetailsPage = ({ params }) => {
    const [productDetails, setProductDetails] = useState([]);
    const { data: session, status } = useSession();
    const [Id, containerId] = params.id;

    useEffect(() => {
        const containerDetailHandle = async () => {
            if (status === "authenticated" && containerId && Id) {
                const fetchContainerDetails =
                    await getAffiliateContainerDetails(
                        session?.accessToken,
                        containerId,
                        Id
                    );
                const productDetailsRes = fetchContainerDetails?.results;
                setProductDetails(productDetailsRes);
            }
        };
        containerDetailHandle();
    }, [status, Id, containerId, session?.accessToken]);

    return (
        <div>
            <Suspense
                fallback={
                    <div className="d-flex align-items-center justify-content-center vh-100 ">
                        <h1 className="d-flex align-items-center justify-content-center">
                            Loading Container Product....
                        </h1>
                    </div>
                }
            >
                <AffiliateProductDetails productDetails={productDetails} />
            </Suspense>
        </div>
    );
};

export default AffiliateProductDetailsPage;
