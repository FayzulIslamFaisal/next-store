import AffiliateProductDetails from "@/app/components/customerDashboard/affiliate/affiliateproducts/AffiliateProductDetails";

const AffiliateProductDetailsPage = ({ params }) => {
    const { slug } = params;
    console.log(slug);

    return (
        <div>
            <AffiliateProductDetails slug={slug} />
        </div>
    );
};

export default AffiliateProductDetailsPage;
