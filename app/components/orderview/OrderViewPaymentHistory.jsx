const OrderViewPaymentHistory = () => {
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
                                    <th style={{ width: "20%" }}>Paid On</th>
                                    <th style={{ width: "30%" }}>
                                        Payment Gateway
                                    </th>
                                    <th style={{ width: "20%" }}>
                                        Payment Method
                                    </th>
                                    <th style={{ width: "20%" }}>Bank name</th>
                                    <th style={{ width: "20%" }}>TxId/DC</th>
                                    <th style={{ width: "20%" }}>Amount</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderViewPaymentHistory;
