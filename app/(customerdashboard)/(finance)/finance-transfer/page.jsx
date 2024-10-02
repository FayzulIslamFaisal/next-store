import FinanceTopTitle from "@/app/components/customerDashboard/finance/FinanceTopTitle";


const FinanceTransfer = () => {
    return (
        <div className="customer-dashboard-order-history-area">
            <FinanceTopTitle title="Transfer" />
            <div className="p-4">
                {/*Transfer section */}
                <div>
                    {/* transfer form */}
                    <form className="d-flex flex-column gap-3">
                        <div className="form-group">
                            <label
                                className="form-label"
                                htmlFor="withdrawto"
                            >
                                Transfer From :
                            </label>
                            <select
                                className="form-select"
                                name="bank_billing_method"
                                required
                            >
                                <option defaultValue="">
                                    Transfer From :
                                </option>
                                <option value={`Shopping Balance`}>
                                    Shopping Balance
                                </option>
                                <option value={`Cash Balance`}>
                                    Cash Balance
                                </option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label
                                className="form-label"
                                htmlFor="withdrawto"
                            >
                                Transfer To :
                            </label>
                            <select
                                className="form-select"
                                name="bank_billing_method"
                                required
                            >
                                <option defaultValue="">
                                    Transfer To :
                                </option>
                                <option value={`Shopping Balance`}>
                                    Shopping Balance
                                </option>
                                <option value={`Cash Balance`}>
                                    Cash Balance
                                </option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Amount :
                            </label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">৳</span>
                                </div>
                                <input
                                    type="number"
                                    className="form-control withdraw_amount"
                                    name="amount"
                                    required
                                    placeholder="Enter Amount"
                                />
                            </div>
                        </div>

                        <button
                            className={`w-100 add-to-cart-link border-0 mt-3`}
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FinanceTransfer;
