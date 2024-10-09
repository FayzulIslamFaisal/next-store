import DiscountPartnerInfo from "./DiscountPartnerInfo";
import DiscountPartnerTop from "./DiscountPartnerTop";
import FilterCategories from "./FilterCategories";

const DiscountPartnerWrapper = () => {
    return (
        <div className="container py-5">
            <DiscountPartnerTop />
            <FilterCategories />
            <DiscountPartnerInfo />
        </div>
    );
};

export default DiscountPartnerWrapper;
