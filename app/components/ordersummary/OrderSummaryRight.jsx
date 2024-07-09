import Image from "next/image";
import ProductOrderPriceSummary from "./ProductOrderPriceSummary";

const OrderSummaryRight = ({ orderProduct }) => {
    return (
        <>
            <div className="col-lg-6">
                <div className="position-relative order-summary-row">
                    <div className="order-summary-area mx-3">
                        <div className="border-bottom order-summary-title">
                            <h2>Order Summary</h2>
                        </div>
                        <div className="order-summary-table-holder">
                            <div className="py-2 border-bottom table-responsive order-summary-table-one">
                                <table className="summary-header ">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Invoice No</th>
                                            <th>Payment Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>02 May 2023</td>
                                            <td>024-125478956</td>
                                            <td>Mastercard</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="py-2 border-bottom table-responsive order-summary-table-two">
                                <table className="order-summary">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="order-product-img">
                                                    <Image
                                                        fill
                                                        src={
                                                            "/images/flash-img2.jpg"
                                                        }
                                                        alt="image"
                                                    />
                                                </div>
                                            </td>
                                            <td className="product-cart-text-continer">
                                                <strong>
                                                    LED Monitor With High
                                                    Quality
                                                </strong>
                                                <p>
                                                    <strong>Size: Large</strong>
                                                </p>
                                                <p>
                                                    <strong>Qty: 1</strong>
                                                </p>
                                            </td>
                                            <td>
                                                <strong>৳20,000</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="order-product-img">
                                                    <Image
                                                        fill
                                                        src="/images/flash-img4.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                            </td>
                                            <td className="product-cart-text-continer">
                                                <strong>
                                                    LED Monitor With High
                                                    Quality
                                                </strong>
                                                <p>
                                                    <strong>Size: Large</strong>
                                                </p>
                                                <p>
                                                    <strong>Qty: 1</strong>
                                                </p>
                                            </td>
                                            <td>
                                                <strong>৳20,000</strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <ProductOrderPriceSummary />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderSummaryRight;
