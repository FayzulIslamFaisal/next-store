const OrderViewPaymentHistory = ({ orderPaymentHistory }) => {
    console.log("orderPaymentHistory", { orderPaymentHistory });

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
                                    {/* <th>Bank name</th> */}
                                    <th>TxId/DC</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderPaymentHistory?.payment_history?.length >
                                0 ? (
                                    orderPaymentHistory?.payment_history.map(
                                        (item) => {
                                            const {
                                                id,
                                                bank_name,
                                                date,
                                                payment_getway,
                                                payment_method,
                                                transaction_amount,
                                                transaction_id,
                                            } = item;
                                            console.log("item", { item });

                                            return (
                                                <tr key={id}>
                                                    <td>
                                                        {date ? date : null}
                                                    </td>
                                                    <td>
                                                        {payment_getway
                                                            ? payment_getway
                                                            : "N/A"}
                                                    </td>
                                                    <td>
                                                        {item?.account_head_id
                                                            ? (item?.account_head?.assign_type == 1 ? item?.account_head?.head_name: item?.account_head?.bank_name )
                                                            : item?.nh_agent_id
                                                            ? item.agent?.user
                                                                  ?.name
                                                            : payment_method}
                                                    </td>

                                                    {/* <td>
                                                        {bank_name
                                                            ? bank_name
                                                            : "N/A"}
                                                    </td> */}
                                                    <td>
                                                        {transaction_id
                                                            ? transaction_id
                                                            : "N/A"}
                                                    </td>
                                                    <td>
                                                        ৳{" "}
                                                        {transaction_amount
                                                            ? transaction_amount
                                                            : "0"}
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    )
                                ) : (
                                    <tr>
                                        <td colSpan={6}>
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
