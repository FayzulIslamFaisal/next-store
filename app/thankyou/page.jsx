"use client";

import { useEffect, useState } from "react";
import OrderSummaryLeft from "../components/ordersummary/OrderSummaryLeft";
import OrderSummaryRight from "../components/ordersummary/OrderSummaryRight";
import { getProductOrderSummery } from "../services/getProductOrderSummery";
import { useSession } from "next-auth/react";

const ThankYouPage = ({ outletId, locationId, orderId }) => {
    const [orderSummary, setOrderSummary] = useState(null);
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            const fetchOrderSummary = async () => {
                try {
                    const orderData = await getProductOrderSummery(
                        outletId || 3,
                        locationId || 47,
                        orderId || 1,
                        session?.accessToken
                    );
                    setOrderSummary(orderData);
                } catch (error) {
                    console.error("Failed to fetch order summary:", error);
                }
            };
            fetchOrderSummary();
        }
    }, [session, status]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "unauthenticated") {
        return <div>Please log in to view your orders.</div>;
    }

    const orderProduct = orderSummary?.product || [];
    const orderAddress = orderSummary?.address || {};

    return (
        <section className="order-confirm-section-area">
            <div className="custom-container">
                <div className="row align-items-center order-confirm-section  gy-5">
                    <OrderSummaryLeft orderAddress={orderAddress} />
                    <OrderSummaryRight orderProduct={orderProduct} />
                </div>
            </div>
        </section>
    );
};

export default ThankYouPage;
