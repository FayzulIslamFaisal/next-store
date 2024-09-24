import SellOnNagadhatHistory from "@/app/components/customerDashboard/affiliate/sellOnNagadhat/SellOnNagadhatHistory";
import FinanceTopTitle from "@/app/components/customerDashboard/finance/FinanceTopTitle";
import WithdrawHistory from "@/app/components/customerDashboard/finance/WithdrawHistory";

const FinanceWithdraw = () => {
    return (
        <div className="customer-dashboard-order-history-area">
            <FinanceTopTitle title="Sell On Nagadhat" />
            <div className="p-4">
                {/* Sell On Nagadhat History */}
                <SellOnNagadhatHistory />
            </div>
        </div>
    );
};

export default FinanceWithdraw;
