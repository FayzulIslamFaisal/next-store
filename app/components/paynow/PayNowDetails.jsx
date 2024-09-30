"use client";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import PayNowPaymentOption from "./PayNowPaymentOption";
import PayNowSummary from "./PayNowSummary";
import { useState } from "react";

const PayNowDetails = () => {
    const [orderSummary, setOrderSummary] = useState({});
    return (
        <>
            <div className="row pay-now-payment-option-area">
                <PayNowPaymentOption orderSummary={orderSummary} />
                <PayNowSummary
                    orderSummary={orderSummary}
                    setOrderSummary={setOrderSummary}
                />
            </div>
        </>
    );
};

export default PayNowDetails;
