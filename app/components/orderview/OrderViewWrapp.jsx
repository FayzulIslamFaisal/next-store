"use client";
import { useEffect, useState } from "react";
import OrderViewAmmount from "./OrderViewAmmount";
import OrderViewDetail from "./OrderViewDetail";
import OrderViewPaymentHistory from "./OrderViewPaymentHistory";
import OrderViewSummary from "./OrderViewSummary";
import OrderViewTimeLine from "./OrderViewTimeLine";
import OrderViewTopBtn from "./OrderViewTopBtn";
import { useSession } from "next-auth/react";
import { getProductOrderSummery } from "@/app/services/getProductOrderSummery";
import { getOrderStatusHistory } from "@/app/services/getOrderStatusHistory";
import { useSearchParams } from "next/navigation";
import { getOrderPaymentHistory } from "@/app/services/getOrderPaymentHistory";

const OrderViewWrapp = () => {
    const [orderSummary, setOrderSummary] = useState(null);
    const [orderStatus, setOrderStatus] = useState([]);
    const [orderPaymentHistory, setOrderPaymentHistory] = useState([]);
    const { data: session, status } = useSession();
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderid");

    useEffect(() => {
        if (status === "authenticated") {
            const fetchOrderSummary = async () => {
                try {
                    const orderData = await getProductOrderSummery(
                        orderId,
                        session?.accessToken
                    );

                    setOrderSummary(orderData?.results);
                } catch (error) {
                    console.error("Failed to fetch order summary:", error);
                }
            };
            fetchOrderSummary();
        }
    }, [session, status, orderId]);

    useEffect(() => {
        if (status === "authenticated") {
            const fetchOrderPaymentHistory = async () => {
                try {
                    const orderPaymentData = await getOrderPaymentHistory(
                        orderId,
                        session?.accessToken
                    );
                    const orderPaymentResult = orderPaymentData?.results || {};
                    setOrderPaymentHistory(orderPaymentResult);
                } catch (error) {
                    console.error(
                        "Failed to fetch Order Payment History:",
                        error
                    );
                }
            };
            fetchOrderPaymentHistory();
        }
    }, [session, status, orderId]);

    useEffect(() => {
        if (status === "authenticated") {
            const fetchOrderStatus = async () => {
                try {
                    const orderStatusData = await getOrderStatusHistory(
                        orderId,
                        session.accessToken
                    );
                    const orderStatusResults = orderStatusData?.results || {};
                    setOrderStatus(orderStatusResults);
                } catch (error) {
                    console.error("Failed to fetch order summary:", error);
                }
            };
            fetchOrderStatus();
        }
    }, [session, status, orderId]);

    if (status === "loading") {
        return <h1>Loading...</h1>;
    }

    if (status === "unauthenticated") {
        return <h2>Please log in to view your orders.</h2>;
    }
    const orderProduct = orderSummary?.products || [];

    return (
        <>
            <div className="order-view-wrapper">
                <div className=" container">
                    <OrderViewTopBtn />
                    <OrderViewSummary orderSummary={orderSummary} />
                    <OrderViewTimeLine orderStatus={orderStatus} />
                    <div className="row order-view-payment-history">
                        <div className="col-lg-9">
                            <OrderViewDetail orderProduct={orderProduct} />
                            <OrderViewPaymentHistory
                                orderPaymentHistory={orderPaymentHistory}
                            />
                        </div>
                        <OrderViewAmmount orderSummary={orderSummary} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderViewWrapp;
