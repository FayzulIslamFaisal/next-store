'use client';
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { postExecutePaymentWithBkash } from "../services/placeorder/postExecutePaymentWithBkash";
import { toast, ToastContainer } from "react-toastify";
import DefaultLoader from "../components/defaultloader/DefaultLoader";

const BkashCallBack = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const paymentID = searchParams.get('paymentID');
    const orderID = searchParams.get('orderId');
    const status = searchParams.get('status');

    useEffect(() => {
        const processPayment = async () => {
            if (status === 'success' && paymentID) {
                try {
                    // Post payment data to server
                    const paymentData = await postExecutePaymentWithBkash(paymentID);
                    // Check if the payment was successful
                    if (paymentData?.code === 200) {
                        // Redirect to the thank you page with the orderId
                        console.log(paymentData.results.order_id);
                        router.push(`/thankyou?orderId=${orderID}`);
                    }
                } catch (error) {
                    console.error('Payment processing failed:', error);
                    toast.error("Payment confirmation failed, try again")
                }
            }else{
                console.log('Payment failed ');
                toast.error("Payment failed, try again")
                router.push(`/paynow?orderId=${orderID}`); // Redirect to the home page if payment failed or ID is missing
            }
        };

        processPayment();
    }, [paymentID, status, router]);

    return (
        <>
        <ToastContainer/>
        <DefaultLoader/>   
        </>
    );
};

export default BkashCallBack;
