"use client";

import { getOrdersByUserId } from "@/app/services/getOrdersByUserId";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import CustomerLeftSideNavbar from "@/app/components/customerDashboard/CustomerLeftSideNavbar";
import CustomerRightsids from "@/app/components/customerDashboard/orderhistory/CustomerRightsids";

const CustomerDashboardPage = () => {
    const [customerOrders, setCustomerOrders] = useState([]);
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            const getOrderDataFetch = async () => {
                const orderData = await getOrdersByUserId(session?.accessToken);
                const orderResult = orderData?.results;
                setCustomerOrders(orderResult);
            };
            getOrderDataFetch();
        }
    }, [status, session]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "unauthenticated") {
        return <div>Please log in to view your orders.</div>;
    }
    return (
        <section className="customer-dashboard-section-area">
            <div className="container">
                <div className="row">
                    <CustomerLeftSideNavbar authSessionData={session} />
                    <CustomerRightsids customerOrders={customerOrders} />
                </div>
            </div>
        </section>
    );
};

export default CustomerDashboardPage;
