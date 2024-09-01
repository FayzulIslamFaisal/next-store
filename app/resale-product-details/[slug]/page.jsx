import AffiliateProductDetailsImg from "@/app/components/customerDashboard/affiliate/affiliateproducts/AffiliateProductDetailsImg";
import ResaleProductDetailsContent from "@/app/components/customerDashboard/affiliate/affiliateproducts/ResaleProductDetailsContent";
import ResaleProductLongDescription from "@/app/components/productDetail/ResaleProductLongDescription";

const ResaleProductDetailsPage = ({ params }) => {
    const { slug } = params;
    console.log(slug);

    return (
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-6 px-5">
                    <AffiliateProductDetailsImg />
                </div>
                <div className="col-lg-6">
                    <ResaleProductDetailsContent />
                </div>
            </div>
            <div>
                <ResaleProductLongDescription />
            </div>
        </div>
    );
};

export default ResaleProductDetailsPage;
