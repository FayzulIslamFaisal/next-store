import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FinanceTopTitle from "@/app/components/customerDashboard/finance/FinanceTopTitle";
import WithdrawHistoryModal from "@/app/components/customerDashboard/finance/WithdrawHistoryModal";
import { geAffiliateFinanceTransferHistory } from "@/app/services/affiliate-finance/geAffiliateFinanceTransferHistory";
import { getServerSession } from "next-auth";
import { FaEye } from "react-icons/fa6";

const FinanceTransferHistory = async () => {
    // get server session
    const session = await getServerSession(authOptions);
    console.log(session);
    
    // fetch affiliate finance transfer history data
    const data = await geAffiliateFinanceTransferHistory(session?.accessToken);
    // render the component with the fetched data
    console.log(data);

    return (
        <div className="customer-dashboard-order-history-area">
            <FinanceTopTitle title="Transfer History" />
            <div className="p-4 overflow-x-scroll">
                {/*Transactions section */}
                <table className="table table-hover" style={{ minWidth: "645px" }}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Transfer From</th>
                            <th>Transfer To</th>
                            <th>Amount</th>
                            <th>Charge</th>
                            <th>To Credit</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2022-01-15 10:30 AM</td>
                            <td>Cash Balance</td>
                            <td>Shopping Balance</td>
                            <td>100.00</td>
                            <td>10.00</td>
                            <td>465.00</td>
                            <td className="text-center">
                                <div className="customer-dashboard-order-history-actions justify-content-center">
                                    <button
                                        type="button"
                                        className="border-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#viewWithdrawHistoryModal"
                                    >
                                        <FaEye />
                                    </button>
                                </div>
                                <WithdrawHistoryModal />
                            </td>
                        </tr>
                        <tr>
                            <td>2022-01-15 10:30 AM</td>
                            <td>Shopping Balance</td>
                            <td>Cash Balance</td>
                            <td>100.00</td>
                            <td>10.00</td>
                            <td>465.00</td>
                            <td className="text-center">
                                <div className="customer-dashboard-order-history-actions justify-content-center">
                                    <button
                                        type="button"
                                        className="border-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#viewWithdrawHistoryModal"
                                    >
                                        <FaEye />
                                    </button>
                                </div>
                                <WithdrawHistoryModal />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FinanceTransferHistory;
