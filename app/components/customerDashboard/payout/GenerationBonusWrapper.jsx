import GenerationBonusDetail from "./GenerationBonusDetail";
import GenerationBonusTop from "./GenerationBonusTop";

const GenerationBonusWrapper = () => {
    return (
        <div className="customer-dashboard-order-history-area h-100">
            <GenerationBonusTop />
            <GenerationBonusDetail />
        </div>
    );
};

export default GenerationBonusWrapper;
