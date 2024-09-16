import PayoutSalaryTop from "./PayoutSalaryTop";
import PayoutSalaryDate from "./PayoutSalaryDate";
import PayoutSalaryDetail from "./PayoutSalaryDetail";
const PayoutSalaryWrapper = () => {
    return (
        <div className="customer-dashboard-order-history-area h-100">
            <div className="customer-dashboard-order-history-area">
                <PayoutSalaryTop />
                <div className="customer-dashboard-order-history">
                    <PayoutSalaryDate />
                    <PayoutSalaryDetail />
                </div>
                <p className="ps-4">Showing 0 to 0 of 0 entries </p>
                <p className="ps-4">pagination</p>
            </div>
        </div>
    );
};

export default PayoutSalaryWrapper;
