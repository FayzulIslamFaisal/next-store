import PayoutRankRewardDetail from "./PayoutRankRewardDetail";
import PayoutRankRewardTop from "./PayoutRankRewardTop";
const PayoutRankRewardWrapper = () => {
    return (
        <>
            <div className="customer-dashboard-order-history-area h-100">
                <PayoutRankRewardTop />
                <div className="customer-dashboard-order-history">
                    <PayoutRankRewardDetail />

                    <div className="pt-5 ">
                        <p className="ps-4">Showing 0 to 0 of 0 entries </p>
                        <p className="ps-4">pagination</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayoutRankRewardWrapper;
