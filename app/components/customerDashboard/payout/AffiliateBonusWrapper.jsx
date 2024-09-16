import AffiliateBonusDetail from "./AffiliateBonusDetail";
import AffiliateBonusTop from "./AffiliateBonusTop";

const AffiliateBonusWrapper = () => {
    return (
        <div className="customer-dashboard-order-history-area h-100">
            <AffiliateBonusTop />
            <AffiliateBonusDetail />
        </div>
    );
};

export default AffiliateBonusWrapper;
