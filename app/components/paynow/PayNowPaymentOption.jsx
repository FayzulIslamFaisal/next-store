"use client";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { postOderPayment } from "@/app/services/postOderPayment";
import { useSession } from "next-auth/react";
import PayWithAgentModal from "./PayWithAgentModal";

const PayNowPaymentOption = ({ orderSummary }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [showAgentModal, setShowAgentModal] = useState(false);
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
        if (optionId === "cashOnDelivery") {
            setSelectedOption(optionId);
        } else if (optionId === "payWithAgent") {
            setSelectedOption(optionId);
            setShowAgentModal(true);
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
        <div className="col-lg-8 col-md-12">
            <ToastContainer />
            <div className="pay-now-payment-option-bg bg-white">
                <div className="pay-now-payment-option-title">
                    <h1>Select a payment option</h1>
                </div>

                <div className="pay-now-payment-option-img">
                    {filteredPaymentOptions.map((option) => (
                        <div
                            key={option.id}
                            className={`pay-now-payment-option-img-box rounded-3 ${
                                selectedOption === option.id ? "selected" : ""
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
            </div>
            <div className="pay-now-terms-condition-area">
                <div className="pay-now-terms-condition">
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
        </div>
    );
};

export default PayNowPaymentOption;
