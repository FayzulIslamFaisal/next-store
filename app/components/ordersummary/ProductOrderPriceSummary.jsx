const ProductOrderPriceSummary = ({ orderSummary }) => {
    return (
        <>
            <div className="user-product-order-price-summary">
                <div className="order-summary-price">
                    <div className="d-flex gap-3 justify-content-between">
                        <p>Sub Total</p>
                        {orderSummary?.sub_total && (
                            <strong>
                                ৳{" "}
                                {orderSummary?.sub_total
                                    ? orderSummary?.sub_total
                                    : null}
                            </strong>
                        )}
                    </div>
                    <div className="d-flex gap-3 justify-content-between">
                        <p>Shipping</p>
                        {orderSummary?.shipping_charge && (
                            <strong>
                                ৳{" "}
                                {orderSummary?.shipping_charge
                                    ? orderSummary?.shipping_charge
                                    : null}
                            </strong>
                        )}
                    </div>
                    <div className="d-flex gap-3 justify-content-between">
                        <p>Discount</p>
                        {orderSummary?.discount > 0 && (
                            <strong>
                                ৳{" "}
                                {orderSummary?.discount
                                    ? orderSummary?.discount
                                    : null}
                            </strong>
                        )}
                    </div>
                </div>
                <div className="shopping-price-area">
                    <div className="d-flex gap-3 justify-content-between align-items-center">
                        <strong>Total</strong>
                        {orderSummary?.total && (
                            <p className="total-order-price">
                                ৳{" "}
                                {orderSummary?.total
                                    ? orderSummary?.total
                                    : null}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductOrderPriceSummary;
