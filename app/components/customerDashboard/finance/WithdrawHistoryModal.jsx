

const WithdrawHistoryModal = () => {
    return (
        <>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="viewWithdrawHistoryModal" tabindex="-1" aria-labelledby="viewWithdrawHistoryModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="viewWithdrawHistoryModalLabel">Completed</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <table class="table table-bordered table-hover">
                                <tbody>
                                    <tr>
                                        <th scope="row">Withdraw Method:</th>
                                        <td>Nagadhat Agent</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Withdraw By:</th>
                                        <td>Sinthia Electronics</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Billing Method:</th>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Account number:</th>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Updated On:</th>
                                        <td>22 Aug, 2024
                                            - 07:28 pm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Amount:</th>
                                        <td>6754</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Charge:</th>
                                        <td>54</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Payable:</th>
                                        <td>6700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Requested On:</th>
                                        <td>21 Aug, 2024
                                            - 01:18 am</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Transaction Id:</th>
                                        <td>Cash</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Payment Script:</th>
                                        <td>Not attached</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WithdrawHistoryModal
