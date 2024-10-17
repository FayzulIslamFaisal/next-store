import dynamic from "next/dynamic";
const DiscountPartnerWrapper = dynamic(
    () => import("../components/discountPartner/DiscountPartnerWrapper"),
    { ssr: false }
);

const DiscountPartnersPage = () => {
    return (
        <>
            <DiscountPartnerWrapper />
        </>
    );
};

export default DiscountPartnersPage;
