const OrderViewAmmount = () => {
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
                                            Subtotal
                                        </td>
                                        <td className="text-right">
                                            <span className="strong-600">
                                                {" "}
                                                ৳ 1500{" "}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-50 fw-600">
                                            Shipping
                                        </td>
                                        <td className="text-right">
                                            <span className="text-italic">
                                                {" "}
                                                ৳ 0{" "}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-50 fw-600">
                                            Discount
                                        </td>
                                        <td className="text-right">
                                            <span className="text-italic">
                                                - ৳ 300
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-top">
                                        <td className="w-50 fw-600">TOTAL</td>
                                        <td className="text-right">
                                            <strong>
                                                <span> ৳ 1200 </span>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-50 fw-600">PAID</td>
                                        <td className="text-right text-success">
                                            <strong>
                                                <span> ৳ 0 </span>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr className="border-top">
                                        <td className="w-50 fw-600">DUE</td>
                                        <td className="text-right text-danger">
                                            <strong>
                                                <span id="dueAmount">
                                                    {" "}
                                                    ৳ 1200{" "}
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
