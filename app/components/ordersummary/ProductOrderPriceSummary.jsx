const ProductOrderPriceSummary = () => {
    return (
        <>
            <div className="user-product-order-price-summary">
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
        </>
    );
};

export default ProductOrderPriceSummary;
