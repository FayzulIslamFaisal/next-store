import FinanceTopTitle from "@/app/components/customerDashboard/finance/FinanceTopTitle";


const FinanceTransactions = () => {
    return (
        <div className="customer-dashboard-order-history-area">
            <FinanceTopTitle title="Transactions" />
            <div className="p-4 overflow-x-scroll">
                {/*Transactions section */}
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
                        <tr>
                            <td>1</td>
                            <td>24 Aug, 2024 / 01:38 pm</td>
                            <td>Special Bonus</td>
                            <td>--</td>
                            <td>800</td>
                            <td>5,509.41</td>
                            <td>
                                <span className="text-success">Completed</span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>24 Aug, 2024 / 01:38 pm</td>
                            <td>Generation Bonus</td>
                            <td>--</td>
                            <td>800</td>
                            <td>5,509.41</td>
                            <td>
                                <span className="text-success">Completed</span>
                            </td>
                        </tr>
                        {/* Add more transaction rows */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FinanceTransactions;
