const SaleOnNagadhatDetailInvoice = () => {
    return (
        <>
            <div className="resale-invoice-areass text-center p-4 pt-0">
                <h1 className="mb-4 bg-success d-inline-block text-white px-4 py-2 fs-4 font-width-medium rounded-4 ">
                    Invoice Details
                </h1>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col fs-6">SL</th>
                                <th scope="col fs-6">Invoice Number & Date</th>
                                <th scope="col fs-6">MRP Price (BDT)</th>
                                <th scope="col fs-6">Discount (BDT)</th>
                                <th scope="col fs-6" className=" text-end">
                                    Trade Price (BDT)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>REG40626698 (29 May, 2022 | 01:08 PM)</td>
                                <td>20,000.00</td>
                                <td>12,000.00</td>
                                <td className=" text-end">12,000.00</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>REG40626698 (29 May, 2022 | 01:08 PM)</td>
                                <td>20,000.00</td>
                                <td>12,000.00</td>
                                <td className=" text-end">12,000.00</td>
                            </tr>
                            <tr>
                                <td colSpan={`4`} className=" text-end">
                                    <strong>Total Paid Amount</strong>
                                </td>
                                <td className=" text-end">
                                    <strong>12,000.00</strong>{" "}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default SaleOnNagadhatDetailInvoice;
