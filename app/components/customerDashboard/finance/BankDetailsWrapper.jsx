import BankDetailsInfo from "./BankDetailsInfo";
import MobileBankingInfo from "./MobileBankingInfo";

const BankDetailsWrapper = () => {
    return (
        <>
            <div className="customer-manage-profile-title">
                <h1 className="customer-dashboard-title">My Bank Details</h1>
            </div>
            <div className="customer-manage-profile-info">
                <div
                    className="accordion accordion-flush rounded-bottom"
                    id="accordion-parent-id"
                >
                    <BankDetailsInfo />
                    <MobileBankingInfo />
                </div>
            </div>
        </>
    );
};

export default BankDetailsWrapper;
