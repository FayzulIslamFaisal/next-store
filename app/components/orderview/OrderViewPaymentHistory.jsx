"use client";

const OrderViewPaymentHistory = ({ orderPaymentHistory }) => {
    return (
        <>
            <div className="card mt-4">
                <div className="card-header">
                    <b className="fs-15">Payment History</b>
                </div>
                <div className="card-body pb-0">
                    <div className="table-responsive">
                        <table className="table table-borderless table-responsive">
                            <thead>
                                <tr>
                                    <th>Paid On</th>
                                    <th>Payment Gateway</th>
                                    <th>Payment Method</th>
                                    <th>Bank name</th>
                                    <th>TxId/DC</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderPaymentHistory.length > 0 ? (
                                    orderPaymentHistory.map((item) => {
                                        const {
                                            id,
                                            bank_name,
                                            date,
                                            payment_getway,
                                            payment_method,
                                            transaction_amount,
                                            transaction_id,
                                        } = item;
                                        return (
                                            <tr key={id}>
                                                <td>{date ? date : null}</td>
                                                <td>
                                                    {payment_getway
                                                        ? payment_getway
                                                        : null}
                                                </td>
                                                <td>
                                                    {payment_method
                                                        ? payment_method
                                                        : null}
                                                </td>
                                                <td>
                                                    {bank_name
                                                        ? bank_name
                                                        : null}
                                                </td>
                                                <td>
                                                    {transaction_id
                                                        ? transaction_id
                                                        : null}
                                                </td>
                                                <td>
                                                    {transaction_amount
                                                        ? transaction_amount
                                                        : null}
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td>
                                            <h6>No Data Found</h6>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderViewPaymentHistory;
