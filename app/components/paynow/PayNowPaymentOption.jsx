"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FaChevronLeft } from "react-icons/fa6";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { postOderPayment } from "@/app/services/postOderPayment";
import { useSession } from "next-auth/react";
import DefaultLoader from "../defaultloader/DefaultLoader";
const PayWithBankModal = dynamic(() => import("./PayWithBankModal"), {
    ssr: false,
});
const PayWithAgentModal = dynamic(() => import("./PayWithAgentModal"), {
    ssr: false,
});

const PayNowPaymentOption = ({ orderSummary, isPending }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [showAgentModal, setShowAgentModal] = useState(false);
    const [showBankModal, setShowBankModal] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");
    const { status, data: session } = useSession();
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const router = useRouter();

    const paymentOptions = [
        { id: "payWithAgent", src: "/images/Agent-Pay.png", alt: "Agent Pay" },
        {
            id: "bankDeposit",
            src: "/images/bank-deposit.png",
            alt: "Bank Deposit",
        },
        {
            id: "cashOnDelivery",
            src: "/images/cash-on.png",
            alt: "Cash on Delivery",
        },
        { id: "bkash", src: "/images/Bkash.png", alt: "Bkash" },

        { id: "sslcommerz", src: "/images/sslcommerz.png", alt: "SSLCommerz" },
    ];

    //filteredPaymentOptions order_product_type === "2"

    const filteredPaymentOptions =
        orderSummary?.order_product_type === "2"
            ? paymentOptions
                  .map((option) =>
                      option.id === "cashOnDelivery"
                          ? {
                                id: "cashOnDelivery",
                                src: "/images/Pay-Later.png",
                                alt: "Pay later",
                            }
                          : option
                  )
                  .filter(
                      (option) =>
                          option.id !== "bkash" && option.id !== "sslcommerz"
                  )
            : paymentOptions;

    const handleOptionClick = (optionId) => {
        if (!isTermsChecked) {
            toast.error("Please first check the terms and conditions.");
            setErrorMsg("Please first check the terms and conditions.");
            return;
        }
        if (optionId === "cashOnDelivery") {
            setSelectedOption(optionId);
        } else if (optionId === "payWithAgent") {
            setSelectedOption(optionId);
            setShowAgentModal(true);
        } else if (optionId === "bankDeposit") {
            setSelectedOption(optionId);
        } else {
            toast.error("This payment option is not available at the moment.");
        }
    };

    const handleSubmit = async () => {
        if (!session || !orderId) {
            toast.error("Order not found.");
            return;
        }
        const paymentData = {
            order_id: orderId,
            user_name: session?.user?.name || "",
            transaction_amount: 0,
            payment_getway: selectedOption,
            payment_method: "",
            bank_name: "",
            transaction_id: "",
        };

        try {
            const orderPayment = await postOderPayment(
                session?.accessToken,
                paymentData
            );
            if (!orderPayment?.error) {
                router.push(`/thankyou?orderId=${orderId}`);
            } else {
                toast.error("Failed to process payment. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting the order:", error);
            toast.error("Failed to process payment. Please try again.");
        }
    };

    return (
        <div className="col-lg-8">
            <ToastContainer />
            <div className="pay-now-payment-option-bg bg-white">
                <div className="pay-now-payment-option-title">
                    <h1>Select a payment option</h1>
                </div>
                {isPending ? (
                    <DefaultLoader />
                ) : (
                    <div className="pay-now-payment-option-img">
                        {filteredPaymentOptions.map((option) => (
                            <div
                                key={option.id}
                                className={`pay-now-payment-option-img-box rounded-3 ${
                                    selectedOption === option.id
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() => handleOptionClick(option.id)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="pay-now-payment-option-img-item">
                                    <Image
                                        fill={true}
                                        src={option.src}
                                        className="img-fluid"
                                        alt={option.alt}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="pay-now-terms-condition-area">
                <div className="pay-now-terms-condition">
                    {errorMsg && !isTermsChecked && (
                        <p className="text-danger pb-2">{errorMsg}</p>
                    )}
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            onChange={() => setIsTermsChecked(!isTermsChecked)}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            I agree to the terms and conditions, return policy,
                            and privacy policy
                        </label>
                    </div>
                </div>

                <div className="pay-now-return-shop d-flex align-items-center justify-content-between">
                    <div className="pay-now-return-shop-item">
                        <Link href="/">
                            <FaChevronLeft />
                            Return to Shop
                        </Link>
                    </div>
                    <button
                        className="add-to-cart-link border-0"
                        onClick={handleSubmit}
                        style={{
                            pointerEvents:
                                isTermsChecked && selectedOption
                                    ? "auto"
                                    : "none",
                            opacity: isTermsChecked && selectedOption ? 1 : 0.5,
                        }}
                    >
                        Complete order
                    </button>
                </div>
            </div>

            {/* Bootstrap Modal for Pay with Agent */}
            {showAgentModal && (
                <PayWithAgentModal
                    showAgentModal={showAgentModal}
                    setShowAgentModal={setShowAgentModal}
                    orderSummary={orderSummary}
                />
            )}
            {/* Bootstrap Modal for Pay with Bank */}
            {showBankModal && (
                <PayWithBankModal
                    showBankModal={showBankModal}
                    setShowBankModal={setShowBankModal}
                />
            )}
        </div>
    );
};

export default PayNowPaymentOption;
