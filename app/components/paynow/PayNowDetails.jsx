import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import PayNowPaymentOption from "./PayNowPaymentOption";
import PayNowSummary from "./PayNowSummary";

const PayNowDetails = () => {
    return (
        <>
            <div className="row pay-now-payment-option-area">
                <PayNowPaymentOption />
                <PayNowSummary/>
            </div>
        </>
    );
};

export default PayNowDetails;
