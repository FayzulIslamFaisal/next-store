const InvoicePaymentHistory = ({ orderInvoice }) => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <h5 className=" text-capitalize mb-1 py-2">
                        payment history
                    </h5>
                </div>
            </div>
            <div className="row sub-section-margin-t">
                <div className="col-sm-8 invoice-payment-info">
                    <table className="table border rounded">
                        <thead>
                            <tr>
                                <th>#SL</th>
                                <th>Date</th>
                                <th>Method</th>
                                <th>Note</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody className="border-top-2">
                            <tr>
                                <td>1</td>
                                <td>30/05/24 7:32 PM</td>
                                <td>Cash</td>
                                <td>37863</td>
                                <td>৳ 3344</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>10/07/24 3:30 PM</td>
                                <td>Cash</td>
                                <td>37863</td>
                                <td>৳ 1044</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>07/06/24 9:00 AM</td>
                                <td>Cash</td>
                                <td>37863</td>
                                <td>৳ 5485</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-4 invoice-pay-info">
                    <div className="border rounded">
                        <div className="d-flex justify-content-between align-items-center border-bottom px-3 py-2">
                            <p className="text-black">Subtotal</p>
                            {orderInvoice?.sub_total > 0 && (
                                <p className="text-black">
                                    ৳ {orderInvoice?.sub_total}
                                </p>
                            )}
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom px-3 py-2">
                            <p className="text-black">Discount</p>
                            {orderInvoice?.discount > 0 && (
                                <p className="text-black">
                                    ৳ {orderInvoice?.discount}
                                </p>
                            )}
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom px-3 py-2">
                            <p className="text-black">Shipping Charge</p>
                            {orderInvoice?.shipping_charge > 0 && (
                                <p className="text-black">
                                    ৳ {orderInvoice?.shipping_charge}
                                </p>
                            )}
                        </div>
                        <div className="d-flex justify-content-between align-items-center px-3 pt-2">
                            <p className="text-black">
                                <strong>Total</strong>
                            </p>
                            {orderInvoice?.total > 0 && (
                                <p className="text-black">
                                    <strong>৳ {orderInvoice?.total}</strong>
                                </p>
                            )}
                        </div>
                        <div className="d-flex justify-content-between align-items-center px-3 py-1">
                            <p className="text-black">Paid</p>
                            <p className="text-black"></p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom px-3 pb-1">
                            <p className="text-black">Amount</p>
                            <p className="text-black">৳ 0</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center px-3 py-2">
                            <p className="text-danger">
                                <strong>Due</strong>
                            </p>
                            <p className="text-danger">
                                <strong>৳ 0.080</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InvoicePaymentHistory;
