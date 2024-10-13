"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { postOderPayment } from "@/app/services/postOderPayment";

const PayCompletedOrderBtn = ({
    session,
    orderId,
    selectedOption,
    setShowAgentModal,
    setShowBankModal,
    isTermsChecked,
    orderSummary,
}) => {
    const router = useRouter();

    // function for handleSubmit
    const handleSubmit = async () => {
        if (!session || !orderId) {
            toast.error("Order not found.");
            return;
        }
        if (selectedOption === "Cash On Delivery") {
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
        } else if (selectedOption === "With Agent") {
            setShowAgentModal(true);
        } else if (selectedOption === "With Bank") {
            setShowBankModal(true);
        }
    };

    return (
        <>
            <button
                className="add-to-cart-link border-0"
                onClick={handleSubmit}
                style={{
                    pointerEvents:
                        isTermsChecked && selectedOption ? "auto" : "none",
                    opacity: isTermsChecked && selectedOption ? 1 : 0.5,
                }}
            >
                Pay Order{" "}
                {orderSummary?.order_product_type === "1"
                    ? selectedOption
                    : selectedOption === "Cash On Delivery"
                    ? "Later"
                    : selectedOption}
            </button>
        </>
    );
};

export default PayCompletedOrderBtn;
