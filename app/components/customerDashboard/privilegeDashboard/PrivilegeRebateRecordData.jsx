const PrivilegeRebateRecordData = () => {
    return (
        <>
            <div className="px-4 py-4">
                <div className="table-responsive">
                    <table className="table" style={{ minWidth: "720px" }}>
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Date/Time</th>
                                <th scope="col">Purpose</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>15 Jan, 2024 / 07:12 pm</td>
                                <td>
                                    Monthly (List Choice) Rebate of October,
                                    2024
                                </td>
                                <td>৳ 444</td>
                                <td>--</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>25 Jun, 2024 / 07:12 pm</td>
                                <td>Fund Transfer</td>
                                <td>৳ 465</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>30 August, 2024 / 07:12 pm</td>
                                <td>Payment</td>
                                <td>৳ 444</td>
                                <td>--</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="px-4 py-2 pb-4">
                <h3>Pagination...</h3>
            </div>
        </>
    );
};

export default PrivilegeRebateRecordData;
