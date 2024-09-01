import AffiliateProductDetails from "@/app/components/customerDashboard/affiliate/affiliateproducts/AffiliateProductDetails";
import { Suspense } from "react";

const AffiliateProductDetailsPage = ({ params }) => {
    const { slug } = params;

    return (
        <div>
            <Suspense
                fallback={
                    <div className="d-flex align-items-center justify-content-center vh-100 ">
                        <h1 className="d-flex align-items-center justify-content-center">
                            Loading....
                        </h1>
                    </div>
                }
            >
                <AffiliateProductDetails slug={slug} />
            </Suspense>
        </div>
    );
};

export default AffiliateProductDetailsPage;
