"use client"
import { useState } from "react";
import FinanceTopTitle from "@/app/components/customerDashboard/finance/FinanceTopTitle";

const FinanceTransfer = () => {
    const [transferFrom, setTransferFrom] = useState("");
    const [transferTo, setTransferTo] = useState("");

    const handleTransferFromChange = (e) => {
        setTransferFrom(e.target.value);
        if (e.target.value === "Shopping Balance") {
            setTransferTo("Cash Balance");
        } else if (e.target.value === "Cash Balance") {
            setTransferTo("Shopping Balance");
        }
    };

    const handleTransferToChange = (e) => {
        setTransferTo(e.target.value);
        if (e.target.value === "Shopping Balance") {
            setTransferFrom("Cash Balance");
        } else if (e.target.value === "Cash Balance") {
            setTransferFrom("Shopping Balance");
        }
    };

    return (
        <div className="customer-dashboard-order-history-area">
            <FinanceTopTitle title="Transfer" />
            <div className="p-4">
                {/*Transfer section */}
                <div>
                    {/* transfer form */}
                    <form className="d-flex flex-column gap-3">
                        <div className="form-group">
                            <label className="form-label" htmlFor="transfefrom">
                                Transfer From:
                            </label>
                            <select
                                className="form-select"
                                name="transfefrom"
                                value={transferFrom}
                                onChange={handleTransferFromChange}
                                required
                            >
                                <option value="">Select Transfer From</option>
                                <option value="Shopping Balance">
                                    Shopping Balance
                                </option>
                                <option value="Cash Balance">
                                    Cash Balance
                                </option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="transfeto">
                                Transfer To:
                            </label>
                            <select
                                className="form-select"
                                name="transfeto"
                                value={transferTo}
                                onChange={handleTransferToChange}
                                required
                            >
                                <option value="">Select Transfer To</option>
                                {/* {transferFrom === "Shopping Balance" ? ( */}
                                <option value="Cash Balance">
                                    Cash Balance
                                </option>
                                {/* ) : ( */}
                                <option value="Shopping Balance">
                                    Shopping Balance
                                </option>
                                {/* )} */}
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">\
                                Amount:
                                <span className="praymary-color">
                                    (Balance: {500 || "N/A"})
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
                                />
                            </div>
                        </div>
                        {amount && (
                            <div className="form-group paySheet">
                                <p className="mb-0">Amount: {amount || 0}</p>
                                <p className="mb-0">Charge: {charge.toFixed(2)}</p>
                                <p className="mb-0">Payable: {payable.toFixed(2)}</p>
                            </div>
                        )}
                        <button
                            className="w-100 add-to-cart-link border-0 mt-3"
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
