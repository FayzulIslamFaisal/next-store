const OrderViewAmmount = ({ orderSummary, orderTotalPaid }) => {
    return (
        <>
            <div className="col-lg-3">
                <div className="card mt-4">
                    <div className="card-header">
                        <b className="fs-15">Order Ammount</b>
                    </div>
                    <div className="card-body pb-0">
                        <div className="table-responsive">
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td className="w-50 fw-600">
                                            Sub Total
                                        </td>
                                        <td className="text-right">
                                            <span className="strong-600">
                                                ৳ {orderSummary?.sub_total}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-50 fw-600">
                                            Discount
                                        </td>
                                        <td className="text-right">
                                            <span className="text-italic">
                                                ৳{" "}
                                                {orderSummary?.discount_amount >
                                                0
                                                    ? orderSummary?.discount_amount
                                                    : 0}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-top">
                                        <td className="w-50 fw-600">TOTAL</td>
                                        <td className="text-right">
                                            <strong>
                                                <span>
                                                    ৳{" "}
                                                    {orderSummary?.total_products_price >
                                                    0
                                                        ? orderSummary?.total_products_price
                                                        : 0}
                                                </span>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-50 fw-600">
                                            Shipping
                                        </td>
                                        <td className="text-right">
                                            <span className="text-italic">
                                                ৳{" "}
                                                {orderSummary?.total_delivery_charge >
                                                0
                                                    ? orderSummary?.total_delivery_charge
                                                    : 0}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-top">
                                        <td className="w-50 fw-600">
                                            Grand Total
                                        </td>
                                        <td className="text-right">
                                            <strong>
                                                <span>
                                                    ৳{" "}
                                                    {orderSummary?.grand_total >
                                                    0
                                                        ? orderSummary?.grand_total
                                                        : 0}
                                                </span>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-50 fw-600">PAID</td>
                                        <td className="text-right text-success">
                                            <strong>
                                                <span>
                                                    ৳{" "}
                                                    {orderTotalPaid > 0
                                                        ? orderTotalPaid
                                                        : 0}
                                                </span>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr className="border-top">
                                        <td className="w-50 fw-600">DUE</td>
                                        <td className="text-right text-danger">
                                            <strong>
                                                <span id="dueAmount">
                                                    ৳{" "}
                                                    {parseInt(
                                                        orderSummary?.grand_total -
                                                            orderTotalPaid
                                                    )}
                                                </span>
                                            </strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderViewAmmount;
