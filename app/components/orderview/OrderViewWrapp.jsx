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

const OrderViewWrapp = ({ orderId }) => {
    const [orderSummary, setOrderSummary] = useState(null);
    const [orderStatus, setOrderStatus] = useState([]);
    const [outletId, setOutletId] = useState(0);
    const [districtId, setDistrictId] = useState(0);
    const { data: session, status } = useSession();

    useEffect(() => {
        const initialOutletId = localStorage.getItem("outletId");
        setOutletId(initialOutletId ? parseInt(initialOutletId) : 3);
    }, []);
    useEffect(() => {
        const initialDistrictId = localStorage.getItem("districtId");
        setDistrictId(initialDistrictId ? parseInt(initialDistrictId) : 47);
    }, []);

    useEffect(() => {
        if (status === "authenticated") {
            const fetchOrderSummary = async () => {
                try {
                    const orderData = await getProductOrderSummery(
                        outletId,
                        districtId,
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
                            <OrderViewPaymentHistory />
                        </div>
                        <OrderViewAmmount orderSummary={orderSummary} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderViewWrapp;
