import ChangePasswordForm from "./ChangePasswordForm";
import ChangeTransactionOtp from "./ChangeTransactionOtp";
import PasswordTopNav from "./PasswordTopNav";

const PasswordTxnOtpRight = () => {
    return (
        <div className="col-lg-9">
            <div className="customer-setting">
                <PasswordTopNav />
                <div className="tab-content customer-setting-body">
                    <ChangePasswordForm />
                    <ChangeTransactionOtp />
                </div>
            </div>
        </div>
    );
};

export default PasswordTxnOtpRight;
