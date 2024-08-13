const ChangeTransactionOtp = () => {
    return (
        <>
            <div
                className="tab-pane fade"
                id="transaction-otp-pin"
                role="tabpanel"
            >
                <form>
                    <div className="customer-setting-form-group ">
                        <label className="form-label" htmlFor="otp">
                            OTP Type
                        </label>
                        <select
                            className="form-select district-list"
                            name="otp"
                            id="otp"
                        >
                            <option defaultValue="PIN">PIN</option>
                            <option defaultValue="Mobile OTP">
                                Mobile OTP
                            </option>
                        </select>
                    </div>

                    <div className="customer-setting-form-group ">
                        <label className="form-label" htmlFor="transactionPIN">
                            Transaction PIN
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="transactionPIN"
                            placeholder="Enter PIN Number"
                        />
                        <span className="password-view-icon">
                            <i className="fa-regular fa-eye"></i>
                        </span>
                    </div>
                    <div className="pb-3">
                        <small>
                            If you change it once, then you can't change it
                            again.
                        </small>
                    </div>
                    <button
                        type="submit"
                        className="add-to-cart-link border-0 mx-auto"
                    >
                        Update OTP
                    </button>
                </form>
            </div>
        </>
    );
};

export default ChangeTransactionOtp;
