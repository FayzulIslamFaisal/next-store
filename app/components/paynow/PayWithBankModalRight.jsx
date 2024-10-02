import React from "react";

const PayWithBankModalRight = () => {
    return (
        <>
            <div className="col-md-8 ">
                <div className="bg-body-secondary px-3 pt-4 pb-4">
                    <form>
                        <div className="mb-3 d-flex gap-2">
                            <div className="col">
                                <label
                                    htmlFor="Order_Id"
                                    className="form-label"
                                >
                                    Order Id
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Order_Id"
                                />
                            </div>
                            <div className="col">
                                <label
                                    htmlFor="payment_amount"
                                    className="form-label"
                                >
                                    Payment Amount
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="payment_amount"
                                />
                            </div>
                        </div>
                        <div className="mb-3 d-flex gap-2">
                            <div className="col">
                                <label
                                    htmlFor="select_bank"
                                    className="form-label"
                                >
                                    Select Bank
                                </label>
                                <select
                                    className="form-select"
                                    id="select_bank"
                                >
                                    <option value="2">Brac Bank</option>
                                    <option value="1">IFIC Bank</option>
                                </select>
                            </div>
                            <div className="col">
                                <label
                                    htmlFor="depositor_name"
                                    className="form-label"
                                >
                                    Depositor's Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="depositor_name"
                                />
                            </div>
                        </div>
                        <div className="mb-3 d-flex gap-2">
                            <div className="col">
                                <label htmlFor="phone" className="form-label">
                                    Depositor's Phone
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                />
                            </div>
                            <div className="col">
                                <label
                                    htmlFor="deposit_code"
                                    className="form-label"
                                >
                                    Deposit Code (DC)
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="deposit_code"
                                />
                            </div>
                        </div>

                        <div className="mb-3 d-flex gap-2">
                            <div className="col">
                                <label
                                    htmlFor="payment_note"
                                    className="form-label"
                                >
                                    Payment Note (Optional)
                                </label>
                                <textarea
                                    className="form-control"
                                    id="payment_note"
                                    rows="3"
                                ></textarea>
                            </div>
                        </div>
                        <div className="mb-3 d-flex gap-2">
                            <div className="col">
                                <label
                                    htmlFor="payment_slip"
                                    className="form-label"
                                >
                                    Upload Payment Slip
                                </label>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="payment_slip"
                                    multiple
                                />
                            </div>
                        </div>
                        <div className="">
                            <button className="add-to-cart-link border-0 text-capitalize">
                                Submit Payment Details
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PayWithBankModalRight;
