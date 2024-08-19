"use client";

import { getOrdersByUserId } from "@/app/services/getOrdersByUserId";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import CustomerRightsids from "@/app/components/customerDashboard/orderhistory/CustomerRightsids";
import { useSearchParams } from "next/navigation";

const CustomerDashboardPage = () => {
    const [customerOrders, setCustomerOrders] = useState([]);
    const { data: session, status } = useSession();
    const [lastPage, setLastPage] = useState(1); // New state for last page
    const [currentPage, setCurrentPage] = useState(1); // New state for current pages

    const searchParams = useSearchParams();

    useEffect(() => {
        const page = searchParams.get('page');
        if (page && page !== currentPage) {
            setCurrentPage( parseInt(page));
        }
    }, [searchParams, currentPage]);
    const limit = 20; //Per Page Category

    useEffect(() => {
        if (status === "authenticated") {
            const getOrderDataFetch = async () => {
                const orderData = await getOrdersByUserId(session?.accessToken, currentPage, limit);
                const orderResult = orderData?.results?.data;
                setCustomerOrders(orderResult);
                setLastPage(orderData?.results?.last_page)
            };
            getOrderDataFetch();
        }
    }, [status, session, currentPage]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "unauthenticated") {
        return <div>Please log in to view your orders.</div>;
    }
    return (
        <>
            <CustomerRightsids customerOrders={customerOrders} lastPage={lastPage} currentPage={currentPage}/>
        </>
    );
};

export default CustomerDashboardPage;
