"use client";

import { useEffect, useState } from "react";
import OrderSummaryLeft from "../components/ordersummary/OrderSummaryLeft";
import OrderSummaryRight from "../components/ordersummary/OrderSummaryRight";
import { getProductOrderSummery } from "../services/getProductOrderSummery";
import { useSession } from "next-auth/react";

const ThankYouPage = ({ orderId }) => {
    const [orderSummary, setOrderSummary] = useState(null);
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
    }, [session, status]);

    if (status === "loading") {
        return <h1>Loading...</h1>;
    }

    if (status === "unauthenticated") {
        return <h2>Please log in to view your orders.</h2>;
    }
    const orderProduct = orderSummary?.products || [];

    return (
        <section className="order-confirm-section-area">
            <div className="custom-container">
                <div className="row align-items-center order-confirm-section  gy-5">
                    <OrderSummaryLeft orderSummary={orderSummary} />
                    <OrderSummaryRight
                        orderProduct={orderProduct}
                        orderSummary={orderSummary}
                    />
                </div>
            </div>
        </section>
    );
};

export default ThankYouPage;
