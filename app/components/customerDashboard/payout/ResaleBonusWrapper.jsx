import ResaleBonusDetail from "./ResaleBonusDetail";
import ResaleBonusTop from "./ResaleBonusTop";

const ResaleBonusWrapper = () => {
    return (
        <div className="customer-dashboard-order-history-area h-100">
            <ResaleBonusTop />
            <ResaleBonusDetail />
        </div>
    );
};

export default ResaleBonusWrapper;
