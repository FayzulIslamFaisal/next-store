"use client";

import { getOrdersByUserId } from "@/app/services/getOrdersByUserId";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

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
        <section>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-3">
                        <div className="row">
                            <div className=" col-md-12">
                                <h4>{session?.user?.name}</h4>
                                <strong>{session?.user?.email}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className=" col-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Invoice ID</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Order Status</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">payment status</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customerOrders &&
                                            customerOrders.length > 0 &&
                                            customerOrders.map((orderItem) => {
                                                const {
                                                    invoice_id,
                                                    order_date,
                                                    order_status,
                                                    price_amount,
                                                    payment_status,
                                                } = orderItem;
                                                return (
                                                    <tr>
                                                        <td>{invoice_id}</td>
                                                        <td>{order_date}</td>
                                                        <td>{order_status}</td>
                                                        <td>{price_amount}</td>
                                                        <td>
                                                            {payment_status}
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerDashboardPage;
