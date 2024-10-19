import PartnerDetailsWrapper from "@/app/components/discountPartner/PartnerDetailsWrapper";

const DiscountPartnerDetailsPage = ({ params }) => {
    const partnerId = params.id;
    return (
        <div className="container py-5">
            <PartnerDetailsWrapper partnerId={partnerId} />
        </div>
    );
};

export default DiscountPartnerDetailsPage;
