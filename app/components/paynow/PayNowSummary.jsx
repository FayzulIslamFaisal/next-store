const PayNowSummary = () => {
    return (
        <>
            <div className="col-lg-4 col-md-12">
                <div className="pay-now-payment-option-bg bg-white">
                    <div className="pay-now-summary-title d-flex align-items-center justify-content-between">
                        <h2 className="text-capitalize fw-medium">summary</h2>
                        <span className="px-2 py-1 rounded-1 bg-danger text-white">
                            - Items
                        </span>
                    </div>
                    <div className="pay-now-summary-body">
                        <div className="pay-now-summary-cash-on-bg">
                            <p className="rounded-1">
                                cash on delivery is not available for those
                                products
                            </p>
                        </div>
                        <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                            <strong>Product</strong>
                            <strong>Total</strong>
                        </div>
                        <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                            <p>xiaomi redmi note 13</p>
                            <p>৳ 31,000</p>
                        </div>
                        <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                            <strong>Subtotal</strong>
                            <strong>৳ 31,000</strong>
                        </div>
                        <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Have a coupon code?"
                            />
                            <button className="btn btn-dark">apply</button>
                        </div>
                        <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                            <strong>Discount</strong>
                            <p>৳ 31,000</p>
                        </div>
                        <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                            <strong>Shopping balance</strong>
                            <div className="d-flex flex-column gap-2">
                                <p>৳ 31,000</p>
                                <button className="btn btn-dark">apply</button>
                            </div>
                        </div>
                        <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                            <strong>
                                Total Shipping <br />
                                (*Applicable)
                            </strong>
                            <p>৳ 31,000</p>
                        </div>
                        <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                            <strong>Total </strong>
                            <p>৳ 31,000</p>
                        </div>
                        <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                            <strong>Paid </strong>
                            <p>৳ 21,000</p>
                        </div>
                        <div className="pay-now-summary-info d-flex align-items-center justify-content-between">
                            <strong>Due </strong>
                            <p>৳ 0</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayNowSummary;
