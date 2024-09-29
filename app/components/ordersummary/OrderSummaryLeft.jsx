"use client";
import DownloadInvoiceBtn from "./DownloadInvoiceBtn";
import OrderShippingAddress from "./OrderShippingAddress";
import TrackYourOrderBtn from "./TrackYourOrderBtn";

const OrderSummaryLeft = ({ orderSummary }) => {
    const messages = {
        1: "Thank you for your purchase!",
        2: "Thank you for your Sale On Nagadhat Product purchase!",
        3: "Thank you for your Container Product purchase!",
    };

    const message = messages[orderSummary?.order_product_type];

    return (
        <>
            <div className="col-lg-5">
                <div className="order-billing-info">
                    <div className="thank-you">
                        {message && <h1 className="text-warning">{message}</h1>}
                        <p className="text-warning">
                            Your order will be processed within 24 hours during
                            working days. We will notify you by email once your
                            order has been shipped.
                        </p>
                    </div>
                    <OrderShippingAddress orderSummary={orderSummary} />
                    <div className="billing-btn-area">
                        <TrackYourOrderBtn />
                        <DownloadInvoiceBtn orderSummary={orderSummary} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderSummaryLeft;
