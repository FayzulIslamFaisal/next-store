import Image from "next/image"


const thankYouPage = () => {
  return (
    <section className="order-confirm-section-area">
        <div className="custom-container">
            <div className="row align-items-center order-confirm-section  gy-5">
                <div className="col-lg-6">
                    <div className="order-billing-info">
                        <div className="thank-you">
                            <h1>Thank you for your purchase!</h1>
                            <p>
                                Your order will be processed within 24 hours during working days. We will notify you by
                                email once your order has been shipped.
                            </p>
                        </div>
                        <div className="billing-address">
                            <div className="billing-address-title">
                                <h3>Billing address</h3>
                            </div>
                            <div className="billing-address-item-continar">
                                <div className="billing-address-item">
                                    <strong>Name:</strong>
                                    <p>Jane Smith</p>
                                </div>
                                <div className="billing-address-item">
                                    <strong>Address:</strong>
                                    <p>Khaja Super Market, 2nd to 7th Floor, Kallyanpur Bus Stop, Mirpur Road, Dhaka-1207.</p>
                                </div>
                                <div className="billing-address-item">
                                    <strong>Phone:</strong>
                                    <p>01906198502</p>
                                </div>
                                <div className="billing-address-item">
                                    <strong>Email:</strong>
                                    <p>jane.smith@email.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="billing-btn-area">
                            <button className="add-to-cart-link border-0">Track Your Order</button>
                            <button className="add-to-cart-link border-0">Download Invoice</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="position-relative order-summary-row">
                        <div className="order-summary-area mx-3">
                            <div className="border-bottom order-summary-title">
                                <h2>Order Summary</h2>
                            </div>
                            <div className="py-2 border-bottom table-responsive">
                                <table className="summary-header ">
                                    <tr>
                                        <th>Date</th>
                                        <th>Invoice No</th>
                                        <th>Payment Status</th>
                                    </tr>
                                    <tr>
                                        <td>02 May 2023</td>
                                        <td>024-125478956</td>
                                        <td>Mastercard</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="py-2 border-bottom table-responsive">
                                <table className="order-summary">
                                    <tr>
                                        <td className="order-product-img">
                                            <Image fill src="/images/flash-img2.jpg" alt="image" />
                                        </td>
                                        <td className="product-cart-text-continer">
                                            <strong>
                                                LED Monitor With High Quality
                                            </strong>
                                            <p>Size: Large</p>
                                            <p>Qty: 1</p>
                                        </td>
                                        <td>
                                            <strong>৳20,000</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="order-product-img">
                                            <Image fill src="/images/flash-img4.jpg" alt="image" />
                                        </td>
                                        <td className="product-cart-text-continer">
                                            <strong>
                                                LED Monitor With High Quality
                                            </strong>
                                            <p>Size: Large</p>
                                            <p>Qty: 1</p>
                                        </td>
                                        <td>
                                            <strong>৳20,000</strong>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className="order-summary-price">
                                <div className="d-flex gap-3 justify-content-between">
                                    <p>Sub Total</p>
                                    <strong>৳106.00</strong>
                                </div>
                                <div className="d-flex gap-3 justify-content-between">
                                    <p>Shipping</p>
                                    <strong>৳00</strong>
                                </div>
                                <div className="d-flex gap-3 justify-content-between">
                                    <p>Discount</p>
                                    <strong>৳06.00</strong>
                                </div>
                            </div>
                            <div className="shopping-price-area">
                                <div className="d-flex gap-3 justify-content-between align-items-center">
                                    <strong>Total</strong>
                                    <p className="total-order-price">৳1,952.66</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default thankYouPage