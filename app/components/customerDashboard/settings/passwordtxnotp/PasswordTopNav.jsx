const PasswordTopNav = () => {
    return (
        <>
            <div className="customer-setting-header">
                <ul className="nav nav-pills" id="myTab" role="tablist">
                    <li className="nav-item">
                        <button
                            className="nav-link active"
                            id="change-password-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#change-password"
                            type="button"
                            role="tab"
                        >
                            Change Password
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link"
                            id="transaction-otp-pin-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#transaction-otp-pin"
                            type="button"
                            role="tab"
                        >
                            Transaction OTP/PIN
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default PasswordTopNav;
