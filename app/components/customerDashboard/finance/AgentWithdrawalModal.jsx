import agent from "@/public/images/agent.png";
import Image from "next/image";

const AgentWithdrawalModal = () => {
    return (
        <div
            className="modal fade"
            id="agentModel"
            tabIndex="-1"
            aria-labelledby="agentModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="agentModalLabel">
                            Withdraw With Agent
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
                                    src={agent}
                                    alt="Pay with agent"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    className="form-label"
                                    htmlFor="AgentName"
                                >
                                    Withdraw by
                                </label>
                                <select
                                    className="custom-select form-control"
                                    name="agent_id"
                                    required
                                >
                                    <option value="">Select Agent</option>
                                    <option value="2">
                                        Agent Frank - 017629798710
                                    </option>
                                    <option value="13901">
                                        MAK Babu - 01322514241
                                    </option>
                                    <option value="25275">
                                        PS International - 01610578765
                                    </option>
                                </select>
                            </div>
                            <div id="payment_getway_selector">
                                <div className="d-flex gap-2 align-items-center justify-content-center">
                                    <label className="text-center p-1 d-flex gap-2 align-items-center">
                                        <input
                                            type="radio"
                                            defaultChecked
                                            name="slug_tier_1"
                                            value="Cash"
                                        />
                                        Cash
                                    </label>
                                    <label className="text-center p-1 d-flex gap-2 align-items-center">
                                        <input
                                            type="radio"
                                            name="slug_tier_1"
                                            value="Mobile Banking"
                                        />
                                        Mobile Banking
                                    </label>
                                    <label className="text-center p-1 d-flex gap-2 align-items-center">
                                        <input
                                            type="radio"
                                            name="slug_tier_1"
                                            value="Bank"
                                        />
                                        Bank
                                    </label>
                                </div>
                            </div>
                            <div
                                className="form-group"
                                id="mobile_banking_billing_method_selector"
                            >
                                <label
                                    className="form-label"
                                    htmlFor="withdrawto"
                                >
                                    Billing Method
                                </label>
                                <select
                                    className="custom-select form-control"
                                    name="mobile_banking_billing_method"
                                >
                                    <option value="">
                                        Select Billing Method
                                    </option>
                                    <option value="Bkash">
                                        Bkash - 01819879787
                                    </option>
                                    <option value="Nagad">
                                        Nagad - 01819879787
                                    </option>
                                    <option value="Rocket">
                                        Rocket - 018198797874
                                    </option>
                                </select>
                            </div>
                            <div
                                className="form-group"
                                id="bank_billing_method_selector"
                            >
                                <label
                                    className="form-label"
                                    htmlFor="withdrawto"
                                >
                                    Billing Method
                                </label>
                                <select
                                    className="custom-select form-control"
                                    name="bank_billing_method"
                                >
                                    <option value="">
                                        Select Billing Method
                                    </option>
                                    <option value="Bank">
                                        Ific Bank ltd - 0190338922811
                                    </option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Amount <strong>Balance: 5611.28</strong>
                                </label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            ৳
                                        </span>
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
                            <div className="form-group paySheet">
                                <p className="mb-0">Amount: 600</p>
                                <p className="mb-0">Charge: 100</p>
                                <p className="mb-0">Payable: 500</p>
                            </div>
                            <button
                                className="w-100 add-to-cart-link border-0"
                                type="submit"
                            >
                                Continue
                            </button>
                            <div>
                                <p className="text-muted">
                                    10% service charge applicable.
                                </p>
                                <p className="text-muted">
                                    Minimum withdrawal Amount 500.00 ৳
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentWithdrawalModal;
