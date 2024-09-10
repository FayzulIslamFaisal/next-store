"use client";

import { useEffect, useState } from "react";
import OrderSummaryLeft from "../components/ordersummary/OrderSummaryLeft";
import OrderSummaryRight from "../components/ordersummary/OrderSummaryRight";
import { getProductOrderSummery } from "../services/getProductOrderSummery";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const ThankYouPage = () => {
    const [orderSummary, setOrderSummary] = useState(null);
    const { data: session, status } = useSession();
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");

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
    }, [session, status]);

    if (status === "loading") {
        return (
            <div className="d-flex align-items-center justify-content-center vh-100 ">
                <h1 className="text-center">Loading...</h1>
            </div>
        );
    }

    if (status === "unauthenticated") {
        return (
            <div className="d-flex align-items-center justify-content-center vh-100 ">
                <h1 className="text-center">
                    Please log in to view your orders.
                </h1>
            </div>
        );
    }
    const orderProduct = orderSummary?.products || [];

    return (
        <PrivateRoute>
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
        </PrivateRoute>
    );
};

export default ThankYouPage;
