"use client";
import { getContainerOrderSummery } from "@/app/services/affiliate/getContainerOrderSummery";
import { getProductOrderSummery } from "@/app/services/getProductOrderSummery";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PayNowSummary = () => {
    const [orderSummary, setOrderSummary] = useState({});
    const [orderProduct, setOrderProduct] = useState([]);
    const { data: session, status } = useSession();
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");
    const orderProductType = searchParams.get("order_product_type");

    useEffect(() => {
        if (status === "authenticated" && orderId) {
            const fetchOrderSummary = async () => {
                try {
                    let orderData;
                    if (orderProductType === "3") {
                        orderData = await getContainerOrderSummery(
                            orderId,
                            session?.accessToken
                        );
                    } else {
                        orderData = await getProductOrderSummery(
                            orderId,
                            session?.accessToken
                        );
                    }

                    if (orderData && orderData?.results) {
                        setOrderSummary(orderData?.results);
                        setOrderProduct(orderData?.results?.products || []);
                    } else {
                        console.error("Invalid response format:", orderData);
                    }
                } catch (error) {
                    console.error("Failed to fetch order summary:", error);
                }
            };
            fetchOrderSummary();
        }
    }, [session, status, orderId, orderProductType]);

    return (
        <div className="col-lg-4 col-md-12">
            <div className="pay-now-payment-option-bg bg-white">
                <div className="pay-now-summary-title d-flex align-items-center justify-content-between">
                    <h2 className="text-capitalize fw-medium">Summary</h2>
                    <span className="px-2 py-1 rounded-1 bg-praymary-color fs-6 text-white">
                        {orderProduct?.length} Items
                    </span>
                </div>
                <div className="pay-now-summary-body">
                    <div className="pay-now-summary-cash-on-bg">
                        <p className="rounded-1">
                            Only cash on delivery is available for these
                            products
                        </p>
                    </div>
                    <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                        <strong>Product</strong>
                        <strong>Total</strong>
                    </div>
                    {orderProduct?.map((productItem, index) => (
                        <div
                            key={index}
                            className="pay-now-summary-info d-flex align-items-center justify-content-between"
                        >
                            <p>{productItem?.product_name}</p>
                            <p>৳ {(productItem?.regular_price || 0) * (productItem?.quantity || 1)}</p>
                        </div>
                    ))}
                    <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                        <strong>Subtotal</strong>
                        <strong>৳ {orderSummary?.sub_total}</strong>
                    </div>
                    {/* <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Have a coupon code?"
                        />
                        <button className="btn btn-dark">Apply</button>
                    </div> */}
                    <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                        <strong>Discount</strong>
                        <p>৳ {orderSummary?.discount_amount}</p>
                    </div>
                    <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                        <strong>Shopping balance</strong>
                        <div className="d-flex flex-column gap-2">
                            <p>৳ 00</p>
                            {/* <button className="btn btn-dark">Apply</button> */}
                        </div>
                    </div>
                    <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                        <strong>
                            Total Shipping <br /> (*Applicable)
                        </strong>
                        <p>৳ {orderSummary?.total_delivery_charge}</p>
                    </div>
                    <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                        <strong>Total</strong>
                        <strong>৳ {orderSummary?.grand_total}</strong>
                    </div>
                    <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                        <strong>Paid</strong>
                        <p>৳ 00</p>
                    </div>
                    <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                        <strong>Due</strong>
                        <strong>৳ {orderSummary?.grand_total}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayNowSummary;
