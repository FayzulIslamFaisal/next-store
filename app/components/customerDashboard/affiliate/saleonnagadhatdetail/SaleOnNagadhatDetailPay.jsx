const SaleOnNagadhatDetailPay = () => {
    return (
        <>
            <div className=" text-center p-4 pt-0">
                <h1 className="mb-4 bg-success d-inline-block text-white px-4 py-2 fs-6 font-width-medium rounded-4 ">
                    নগদহাট ডিজিটাল মার্কেট প্লেসে বিক্রিতব্য/বিক্রয়কৃত পণ্যের
                    টাকা প্রদানের সম্ভাব্য তারিখ ও টাকার বিবরণ
                </h1>
                <div className="table-responsive">
                    <table className="table table-striped border-secondary table-bordered">
                        <thead>
                            <tr>
                                <th scope="col fs-6">SL</th>
                                <th scope="col fs-6">Date</th>
                                <th scope="col fs-6">
                                    Depositing Amount in the Personal Wallet
                                </th>
                                <th scope="col fs-6">
                                    Payable Amount (After deducting 10% Service
                                    Charge)
                                </th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>2022-06-29</td>
                                <td>666.67</td>
                                <td>600.00</td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>2022-06-29</td>
                                <td>666.67</td>
                                <td>600.00</td>
                                <td>Unpaid</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>2022-06-29</td>
                                <td>666.67</td>
                                <td>600.00</td>
                                <td>Paid</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default SaleOnNagadhatDetailPay;
