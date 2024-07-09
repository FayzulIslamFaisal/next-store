"use client";
import DownloadInvoiceBtn from "./DownloadInvoiceBtn";
import OrderShippingAddress from "./OrderShippingAddress";
import TrackYourOrderBtn from "./TrackYourOrderBtn";

const OrderSummaryLeft = () => {
    return (
        <>
            <div className="col-lg-6">
                <div className="order-billing-info">
                    <div className="thank-you">
                        <h1>Thank you for your purchase!</h1>
                        <p>
                            Your order will be processed within 24 hours during
                            working days. We will notify you by email once your
                            order has been shipped.
                        </p>
                    </div>
                    <OrderShippingAddress />
                    <div className="billing-btn-area">
                        <TrackYourOrderBtn />
                        <DownloadInvoiceBtn />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderSummaryLeft;
