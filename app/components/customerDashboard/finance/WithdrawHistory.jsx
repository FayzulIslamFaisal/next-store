import React from 'react'
import { FaEye } from 'react-icons/fa6'
import WithdrawHistoryModal from './WithdrawHistoryModal'

const WithdrawHistory = () => {
    return (
        <>
            <div className="table-responsive pt-4">
                <table className="table" style={{ minWidth: "645px" }}>
                    <thead>
                        <tr >
                            <th>Date</th>
                            <th>Billing Method</th>
                            <th>Account ID/Code</th>
                            <th className='text-end'>Amount</th>
                            <th className='text-end'>Charge</th>
                            <th className='text-end'>Payable</th>
                            <th>Status</th>
                            <th className='text-center'>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>22 Aug, 2024 / 07:23 pm</td>
                            <td>Nagadhat Agent</td>
                            <td>347378</td>
                            <td className='text-end'>42802</td>
                            <td className='text-end'>4280</td>
                            <td className='text-end'>38522</td>
                            <td className="paid">Completed</td>
                            <td className='text-center'>
                                <div className='customer-dashboard-order-history-actions'>
                                    <button
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#viewWithdrawHistoryModal"
                                    >
                                        <FaEye />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>22 Aug, 2024 / 07:23 pm</td>
                            <td>Nagadhat Agent</td>
                            <td>347378</td>
                            <td className='text-end'>42802</td>
                            <td className='text-end'>4280</td>
                            <td className='text-end'>38522</td>
                            <td className="paid">Completed</td>
                            <td className='text-center'>
                                <div className='customer-dashboard-order-history-actions'>
                                    <button
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#viewWithdrawHistoryModal"
                                    >
                                        <FaEye />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>22 Aug, 2024 / 07:23 pm</td>
                            <td>Nagadhat Agent</td>
                            <td>347378</td>
                            <td className='text-end'>42802</td>
                            <td className='text-end'>4280</td>
                            <td className='text-end'>38522</td>
                            <td className="paid">Completed</td>
                            <td className='text-center'>
                                <div className='customer-dashboard-order-history-actions'>
                                    <button
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#viewWithdrawHistoryModal"
                                    >
                                        <FaEye />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <p className="pt-3">Pagination</p> */}

            {/* <!-- Modal --> */}
            <WithdrawHistoryModal />
        </>
    )
}

export default WithdrawHistory
