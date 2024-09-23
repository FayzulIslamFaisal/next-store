
import { getFinanceWithdrawHistoryById } from "@/app/services/affiliate-finance/getFinanceWithdrawHistoryById";

const WithdrawHistoryModal = async ({ selectedId, token }) => {
    let withdrawData = []
    if (selectedId && token) {
        const response = await getFinanceWithdrawHistoryById(token, selectedId);
        console.log(response?.results);
        withdrawData = response?.results;
    }

    return (
        <>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="viewWithdrawHistoryModal" tabIndex="-1" aria-labelledby="viewWithdrawHistoryModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="viewWithdrawHistoryModalLabel">{withdrawData ? withdrawData.status : 'Loading...'}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            {withdrawData ? (
                                <table className="table table-bordered table-hover">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Withdraw Method:</th>
                                            <td>{withdrawData.withdraw_method || '--'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Withdraw By:</th>
                                            <td>{withdrawData.withdraw_by || '--'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Billing Method:</th>
                                            <td>{withdrawData.billing_method || '--'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Account number:</th>
                                            <td>{withdrawData.account_number || '--'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Updated On:</th>
                                            <td>{withdrawData.update_on || '--'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Amount:</th>
                                            <td>{withdrawData.amount || '--'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Charge:</th>
                                            <td>{withdrawData.charge || '--'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Payable:</th>
                                            <td>{withdrawData.payable || '--'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Requested On:</th>
                                            <td>{withdrawData.request_on || '--'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Transaction Id:</th>
                                            <td>{withdrawData.transection_id || '--'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Payment Script:</th>
                                            <td>{withdrawData.script_pic ? (
                                                <a href={`/path-to-script-pics/${withdrawData.script_pic}`} target="_blank" rel="noopener noreferrer">View Script</a>
                                            ) : 'Not attached'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WithdrawHistoryModal;
