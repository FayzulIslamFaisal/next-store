"use client";

import { useEffect, useState } from "react";
import OrderInvoiceTop from "../components/orderinvoice/OrderInvoiceTop";
import InvoiceProductDetail from "../components/orderinvoice/InvoiceProductDetail";
import InvoicePaymentHistory from "../components/orderinvoice/InvoicePaymentHistory";
import InvoiceFooter from "../components/orderinvoice/InvoiceFooter";
import { getProductOrderSummery } from "../services/getProductOrderSummery";
import { useSession } from "next-auth/react";

const OrderInvoicePage = () => {
    const [orderInvoice, setOrderInvoice] = useState(null);
    const { data: session, status } = useSession();

    const outletId = 3;
    const locationId = 47;
    const orderId = 1;

    useEffect(() => {
        window.print();
    }, []);

    useEffect(() => {
        if (status === "authenticated") {
            const fetchOrderInvoice = async () => {
                try {
                    const invoiceData = await getProductOrderSummery(
                        outletId,
                        locationId,
                        orderId,
                        session?.accessToken
                    );
                    setOrderInvoice(invoiceData?.results);
                } catch (error) {
                    console.error("Failed to fetch order summary:", error);
                }
            };
            fetchOrderInvoice();
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
