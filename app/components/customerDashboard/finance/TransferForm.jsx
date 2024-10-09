"use client";
import { postaffiliateFundTransfer } from "@/app/services/affiliate-finance/postaffiliateFundTransfer";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import TransferVerifyOTPModal from "./TransferVerifyOTPModal";
import { toast, ToastContainer } from "react-toastify";
import { postVerifyTransferOtpRequest } from "@/app/services/affiliate-finance/postVerifyTransferOtp copy";

const TransferForm = () => {
    const [transfer, setTransfer] = useState("");
    const [amount, setAmount] = useState(0);
    const [charge, setCharge] = useState(0);
    const [payable, setPayable] = useState(0);
    const [transferDetails, setTransferDetails] = useState(null);
    const [transferRequestData, setTransferRequestData] = useState(null);
    const [isAmountValid, setIsAmountValid] = useState(true); // new state to track amount validity

    const { data: session, status } = useSession();

    // transfer changes
    const handleTransferChange = async (e) => {
        const selectedTransfer = e.target.value;
        setTransfer(selectedTransfer);
        // get transfer details
        const transferResponse = await postaffiliateFundTransfer(session?.accessToken, selectedTransfer);
        setTransferDetails(transferResponse.results);
        console.log(transferDetails);
    };

    const handleAmountChange = (e) => {
        const enteredAmount = parseFloat(e?.target?.value || 0);

        // Check if entered amount exceeds balance
        const availableBalance = transfer === "C2S" ? transferDetails?.cash_balance : transferDetails?.shopping_balance;
        if (enteredAmount > availableBalance) {
            setIsAmountValid(false);
            toast.error("Entered amount exceeds available balance");
            setAmount(availableBalance)
        } else {
            setAmount(enteredAmount);
            setIsAmountValid(true);
        }
    };

    useEffect(() => {
        // Apply 7% charge only if transferring from Cash Balance to Shopping Balance
        if (transfer === "C2S" && amount) {
            const calculatedCharge = (amount * 7) / 100;
            setCharge(calculatedCharge);
            setPayable(amount - calculatedCharge);
        } else {
            setCharge(0);
            setPayable(amount);
        }
    }, [transfer, amount]);

    const handleTransferRequest = async (e) => {
        e.preventDefault();
        const data = {
            transfer_form: transfer === "S2C" ? "Shopping balance" : "Cash balance",
            transfer_to: transfer === "C2S" ? "Shopping balance" : "Cash balance",
            transfer_type: transfer,
            amount,
            charge,
            payable,
        };

        try {
            const response = await postVerifyTransferOtpRequest(session.accessToken, data);
            if (response.code === 200) {
                // Open Bootstrap modal
                const modalElement = document.getElementById("successModal");
                const successModal = new bootstrap.Modal(modalElement);
                successModal.show(); // Show the modal
                setTransferRequestData(response?.results);
            } else {
                toast.error(response.message);
            }
            console.log(response);
        } catch (error) {
            // handle error
        }
    };

    return (
        <>
            <ToastContainer />
            <form className="d-flex flex-column gap-3">
                <div className="form-group">
                    <label className="form-label" htmlFor="transfefrom">
                        Transfer From:
                    </label>
                    <select
                        className="form-select"
                        name="transfefrom"
                        value={transfer}
                        onChange={handleTransferChange}
                        required
                    >
                        <option value="">Select Transfer From</option>
                        <option value="S2C">Shopping Balance</option>
                        <option value="C2S">Cash Balance</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="transfeto">
                        Transfer To:
                    </label>
                    <select
                        className="form-select"
                        name="transfeto"
                        value={transfer}
                        onChange={handleTransferChange}
                        required
                    >
                        <option value="">Select Transfer To</option>
                        <option value="S2C">Cash Balance</option>
                        <option value="C2S">Shopping Balance</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">
                        Amount:
                        <span className="praymary-color">
                            (Balance: {transfer === "C2S" ? transferDetails?.cash_balance : transferDetails?.shopping_balance})
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
                            onChange={handleAmountChange}
                        />
                    </div>
                </div>
                {transfer === "C2S" && amount && isAmountValid && (
                    <div className="form-group paySheet">
                        <p className="mb-0">Amount: {amount}</p>
                        <p className="mb-0">Charge: {charge.toFixed(2)}</p>
                        <p className="mb-0">Payable: {payable.toFixed(2)}</p>
                    </div>
                )}
                {transfer === "C2S" && (
                    <p>7% service charge applicable when transferring from Cash Balance to Shopping Balance</p>
                )}
                <button
                    className={`w-100 add-to-cart-link border-0 mt-3 ${(isAmountValid && transfer && amount) ? "" : "disabled-button"}`}
                    disabled={!isAmountValid || !(transfer && amount)}
                    onClick={handleTransferRequest}
                >
                    Continue
                </button>
            </form>
            <TransferVerifyOTPModal transferRequestData={transferRequestData} />
        </>
    );
};

export default TransferForm;
