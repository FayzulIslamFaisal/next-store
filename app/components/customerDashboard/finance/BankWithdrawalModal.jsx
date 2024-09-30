import bank from "@/public/images/bank.png";
import Image from "next/image";
import { useState } from "react";

const BankWithdrawalModal = ({ bankTransferInfo }) => {
    const [Bank, setBank] = useState('');
    const [amount, setAmount] = useState("");
    const [charge, setCharge] = useState(0);
    const [payable, setPayable] = useState(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleAmountChange = (e) => {
        const inputAmount = parseFloat(e.target.value);
        const maxAmount = parseInt(bankTransferInfo?.total_withdrawable) || 0; // Get max withdrawable amount
        console.log(maxAmount);
        
        if (isNaN(inputAmount) || inputAmount <= 0) {
            setAmount("");
            setCharge(0);
            setPayable(0);
            setIsButtonDisabled(true);
            return;
        }
    
        // If the input amount exceeds the maximum, reset to max value
        if (inputAmount > maxAmount) {
            setAmount(maxAmount);
        } else {
            setAmount(inputAmount);
        }
    
        const chargeAmount = (inputAmount > maxAmount ? maxAmount : inputAmount) * 0.1; // 10% charge
        const payableAmount = (inputAmount > maxAmount ? maxAmount : inputAmount) - chargeAmount;
    
        setCharge(chargeAmount);
        setPayable(payableAmount);
    
        // Disable button if amount is less than minimum, exceeds balance, or agent is not selected
        if (inputAmount < 500 || 
            inputAmount > maxAmount ||
            !bank
        ) {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false);
        }
    };
    return (
        <div
            className="modal fade"
            id="bankModal"
            tabIndex="-1"
            aria-labelledby="bankModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="bankModalLabel">
                            Withdraw With Bank
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="modal-body">
                        <div className="container d-flex gap-3 flex-column">
                            <div className="text-center">
                                <Image
                                    height={200}
                                    width={300}
                                    className="img-fluid"
                                    style={{ width: "50%" }}
                                    src={bank}
                                    alt="Withdraw to bank"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    className="form-label"
                                    htmlFor="withdrawto"
                                >
                                    Withdraw to
                                </label>
                                <select
                                    className="custom-select form-control"
                                    name="bank_billing_method"
                                    required
                                    onChange={(e)=>setBank(e.target.value)}
                                >
                                    <option defaultValue="">
                                        Select Payment Gateway
                                    </option>
                                    <option value={`${bankTransferInfo?.bank}`}>
                                        {bankTransferInfo?.bank}
                                        {bankTransferInfo?.number}
                                    </option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Amount{" "}
                                    <span className="praymary-color">
                                        (Balance:{bankTransferInfo?.total_withdrawable})
                                    </span>
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
                                        value={amount}
                                        onChange={handleAmountChange}
                                        max={bankTransferInfo?.total_withdrawable || 0} // Set maximum allowed value
                                        min={500} // Set minimum allowed value
                                    />
                                </div>
                            </div>

                            <div className="form-group paySheet">
                                <p className="mb-0">Amount: {amount || 0}</p>
                                <p className="mb-0">Charge: {charge.toFixed(2)}</p>
                                <p className="mb-0">Payable: {payable.toFixed(2)}</p>
                            </div>

                            <button
                                className={`w-100 add-to-cart-link border-0 ${isButtonDisabled ? 'disabled-button' : ''}`}
                                type="submit"
                                disabled={isButtonDisabled}
                            >
                                Continue
                            </button>

                            <div>
                                <p className="text-muted">10% service charge applicable.</p>
                                <p className="text-muted">Minimum withdrawal Amount 500.00 ৳</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankWithdrawalModal;
