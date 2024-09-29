import PayoutSalaryTop from "./PayoutSalaryTop";
import PayoutSalaryDate from "./PayoutSalaryDate";
import PayoutSalaryDetail from "./PayoutSalaryDetail";
import PayoutSearchForm from "./PayoutSearchForm";
const PayoutSalaryWrapper = () => {
    return (
        <div className="customer-dashboard-order-history-area h-100 pb-4">
            <div className="customer-dashboard-order-history-area">
                <PayoutSalaryTop />
                <div className="customer-dashboard-order-history p-0 py-4">
                    <PayoutSalaryDate />
                    <PayoutSearchForm />
                    <PayoutSalaryDetail />
                </div>

                <p className="ps-4">pagination</p>
            </div>
        </div>
    );
};

export default PayoutSalaryWrapper;
