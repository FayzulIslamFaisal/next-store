"use client"
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { postOderPayment } from "@/app/services/postOderPayment";
import { useSession } from "next-auth/react";

const PayNowPaymentOption = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const searchParams = useSearchParams()
    const orderId = searchParams.get('orderId')
    const { status, data: session } = useSession();
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const router = useRouter();

    const paymentOptions = [
        { id: "bkash", src: "/images/Bkash.png", alt: "Bkash" },
        { id: "bankDeposit", src: "/images/bank-deposit.png", alt: "Bank Deposit" },
        { id: "cashOnDelivery", src: "/images/cash-on.png", alt: "Cash on Delivery" },
        { id: "sslcommerz", src: "/images/sslcommerz.png", alt: "SSLCommerz" },
    ];

    const handleOptionClick = (optionId) => {
        if (optionId =="cashOnDelivery") {
            toast.success("Selected payment option is cash 0n deliver.")
            setSelectedOption(optionId);
        }
        else{
            toast.error("This Payment option is not available at the moment.")
        }
    };
    const paymentData={
            order_id: orderId,
            user_name: session?.user?.name|| "",
            transaction_amount: 0,
            payment_getway: selectedOption,
            payment_method: "",
            bank_name: "",
            transaction_id: ""
    }

    const handleSubmit = async () => {
        if (!selectedOption) {
            toast.error("Please select a payment option");
            return;
        }
        
        if (!session && !orderId) {
            toast.error("Order Not Found");
            return;
        }
        
        try {
            const orderPayment = await postOderPayment(session?.accessToken, paymentData);
            if (!orderPayment.error) {
                router.push(`/thankyou?orderId=${orderId}`);
            }
        } catch (error) {
            console.error("Error submitting the order:", error);
            toast.error("Failed to process payment. Please try again.");
            console.log({error})
        }
    };
    

    return (
        <div className="col-lg-8 col-md-12">
            <div className="pay-now-payment-option-bg bg-white">
                <div className="pay-now-payment-option-title">
                    <h1>Select a payment option</h1>
                </div>
                <div className="pay-now-payment-option-img">
                    {paymentOptions.map((option) => (
                        <div
                            key={option.id}
                            className={`pay-now-payment-option-img-box rounded-3 ${selectedOption === option.id ? "selected" : ""
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
                            className="form-check-input "
                            id="exampleCheck1"
                            onChange={() =>
                                setIsTermsChecked(
                                    !isTermsChecked
                                )
                            }
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            I agree to the terms and conditions, return
                            policy, and privacy policy
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
                            isTermsChecked &&
                            selectedOption
                                    ? "auto"
                                    : "none",
                            opacity:
                            isTermsChecked &&
                            selectedOption
                                    ? 1
                                    : 0.5,
                        }}
                    >
                        Complete order
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default PayNowPaymentOption;
