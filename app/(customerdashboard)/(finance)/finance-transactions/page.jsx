import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FinanceTopTitle from "@/app/components/customerDashboard/finance/FinanceTopTitle";
import { geAffiliateFinanceTransitions } from "@/app/services/affiliate-finance/geAffiliateFinanceTransitions";
import { getServerSession } from "next-auth";

const FinanceTransactions = async () => {
    // get server session
    const session = await getServerSession(authOptions);
    console.log(session);

    // fetch affiliate finance transfer history data
    const data = await geAffiliateFinanceTransitions(session?.accessToken);
    console.log(data);

    // check if the results exist
    const transactions = data?.results?.data || [];

    return (
        <div className="customer-dashboard-order-history-area">
            <FinanceTopTitle title="Transactions" />
            <div className="p-4 overflow-x-scroll">
                {/* Transactions section */}
                <table className="table table-hover" style={{ minWidth: "645px" }}>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Date/Time</th>
                            <th>Purpose</th>
                            <th>Debit</th>
                            <th>Credit</th>
                            <th>Balance</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.length > 0 ? (
                            transactions.map((transaction, index) => (
                                <tr key={transaction.id}>
                                    <td>{index + 1}</td>
                                    <td>{transaction.date_time}</td>
                                    <td>{transaction.purpose}</td>
                                    <td>{transaction.debit !== "0.00" ? transaction.debit : "--"}</td>
                                    <td>{transaction.credit !== "0.00" ? transaction.credit : "--"}</td>
                                    <td>{transaction.balance}</td>
                                    <td>
                                        <span
                                            className={
                                                transaction.status === "Completed"
                                                    ? "text-success"
                                                    : "text-warning"
                                            }
                                        >
                                            {transaction.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">No transactions found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FinanceTransactions;
