"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { postOderPayment } from "@/app/services/postOderPayment";
import { getBkashToken } from "@/app/services/placeorder/getBkashToken";
import { toast } from "react-toastify";
import { postPaymentWithBkash } from "@/app/services/placeorder/postPaymentWithBkash";

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

    console.log(orderSummary);
    console.log(session);


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
        } else if (selectedOption === "Bkash") {
            // bkash pement option set
            try {
                const data = {
                    mode: "0011",
                    payerReference: session?.phone,
                    callbackURL: `${window?.location?.origin}/bkash-callback`,
                    amount: parseInt(orderSummary?.grand_total) ,
                    currency: "BDT",
                    intent: "sale",
                    merchantInvoiceNumber: orderSummary?.order_id
                }

                const token = await getBkashToken();

                console.log({ data }, { token });
                const response = await postPaymentWithBkash(token, data);
                console.log(response);
                if (response?.data?.result?.bkashURL) {
                    // Redirect user to the bKash payment page
                    window.location.href = response.data.result.bkashURL;
                } else {
                    toast.error("Failed to initiate bKash payment.");
                }

            } catch (error) {
                console.error("Bkash payment error:", error);
                toast.error("Error processing Bkash payment.");
            }
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
