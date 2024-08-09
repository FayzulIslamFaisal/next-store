"use client";

import { useEffect, useState } from "react";
import OrderInvoiceTop from "../components/orderinvoice/OrderInvoiceTop";
import InvoiceProductDetail from "../components/orderinvoice/InvoiceProductDetail";
import InvoicePaymentHistory from "../components/orderinvoice/InvoicePaymentHistory";
import InvoiceFooter from "../components/orderinvoice/InvoiceFooter";
import { getProductOrderSummery } from "../services/getProductOrderSummery";
import { useSession } from "next-auth/react";
import { useSearchParams } from 'next/navigation'

const OrderInvoicePage = () => {
    const [orderInvoice, setOrderInvoice] = useState(null);
    const [orderPaymentHistory, setOrderPaymentHistory] = useState([]);
    const { data: session, status } = useSession();
    const searchParams = useSearchParams()
    const orderId = searchParams.get('orderId')

    useEffect(() => {
        window.print();
    }, []);

    useEffect(() => {
        if (status === "authenticated") {
            const fetchOrderInvoice = async () => {
                try {
                    const invoiceData = await getProductOrderSummery(
                        orderId,
                        session?.accessToken
                    );
                    setOrderInvoice(invoiceData?.results);
                } catch (error) {
                    console.error("Failed to fetch order summary:", error);
                }
            };
            fetchOrderInvoice();

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
    }, [session, status]);

    if (status === "loading") {
        return <h1>Loading...</h1>;
    }

    if (status === "unauthenticated") {
        return <h2>Please log in to view your orders.</h2>;
    }

    const invoiceProduct = orderInvoice?.products;

    return (
        <>
            <div className=" container-fluid">
                <div className="row invoice-wrapper">
                    <section className="invoice-section order-invoice-section-area col-12 pt-3 ps-4">
                        <div className="d-flex flex-column align-content-between h-100 ">
                            <div className="invoice-body flex-grow-1">
                                <OrderInvoiceTop />
                                <InvoiceProductDetail
                                    invoiceProduct={invoiceProduct}
                                    orderInvoice={orderInvoice}
                                />
                                <InvoicePaymentHistory
                                    orderInvoice={orderInvoice}
                                    orderPaymentHistory={orderPaymentHistory}
                                />
                            </div>
                            <InvoiceFooter />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default OrderInvoicePage;
