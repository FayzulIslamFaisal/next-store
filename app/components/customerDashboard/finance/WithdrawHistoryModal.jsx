"use client";
import { getFinanceWithdrawHistoryById } from "@/app/services/affiliate-finance/getFinanceWithdrawHistoryById";
import { useEffect, useState, useTransition } from "react";

const WithdrawHistoryModal = ({ selectedId, token }) => {
    const [withdrawData, setWithdrawData] = useState(null);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (selectedId && token) {
            startTransition(async () => {
                try {
                    const response = await getFinanceWithdrawHistoryById(
                        token,
                        selectedId
                    );
                    setWithdrawData(response?.results || {});
                } catch (err) {
                    console.error("Failed to load withdraw history:", err);
                }
            });
        }
    }, [selectedId, token]);

    return (
        <>
            {/* <!-- Modal --> */}
            <div
                className="modal fade"
                id="viewWithdrawHistoryModal"
                tabIndex="-1"
                aria-labelledby="viewWithdrawHistoryModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="viewWithdrawHistoryModalLabel"
                            >
                                {withdrawData
                                    ? withdrawData.status
                                    : "Loading..."}
                            </h1>
                            <button
                                type="button"
                                className="btn-close rounded-0  "
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body p-4">
                            {withdrawData ? (
                                <table className="table table-bordered table-hover">
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                Withdraw Method:
                                            </th>
                                            <td>
                                                {withdrawData.withdraw_method ||
                                                    "--"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Withdraw By:</th>
                                            <td>
                                                {withdrawData.withdraw_by ||
                                                    "--"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Billing Method:</th>
                                            <td>
                                                {withdrawData.billing_method ||
                                                    "--"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Account number:</th>
                                            <td>
                                                {withdrawData.account_number ||
                                                    "--"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Updated On:</th>
                                            <td>
                                                {withdrawData.update_on || "--"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Amount:</th>
                                            <td>
                                                {withdrawData.amount || "--"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Charge:</th>
                                            <td>
                                                {withdrawData.charge || "--"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Payable:</th>
                                            <td>
                                                {withdrawData.payable || "--"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Requested On:</th>
                                            <td>
                                                {withdrawData.request_on ||
                                                    "--"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Transaction Id:</th>
                                            <td>
                                                {withdrawData.transection_id ||
                                                    "--"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Payment Script:</th>
                                            <td>
                                                {withdrawData.script_pic ? (
                                                    <a
                                                        href={`/path-to-script-pics/${withdrawData.script_pic}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        View Script
                                                    </a>
                                                ) : (
                                                    "Not attached"
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger rounded-0"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WithdrawHistoryModal;
