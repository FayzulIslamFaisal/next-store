import FinanceTopTitle from "./FinanceTopTitle";
import WithdrawChart from "./WithdrawChart";

const WithdrawWrapper = () => {

    return (
        <>
            <div className="customer-dashboard-order-history-area h-100">
                <FinanceTopTitle title="Withdraw" />
                <div className="p-4">
                    <div className="w-100 withdraw-top-section" >
                        <div className="d-flex gap-5 justify-content-between align-items-center">
                            <div className="">
                                <h3>50000</h3>
                                <p>Withdrawn Balance</p>
                            </div>
                            <WithdrawChart />
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="row">
                            <div className="col-4 p-0" type="button" data-bs-toggle="modal" data-bs-target="#agentModel">
                                <img src="https://staging.nagadhat.com.bd/public/images/withdraw/agent.png" className="img-fluid" />
                            </div>
                            <div className="col-4 p-0" type="button" data-bs-toggle="modal" data-bs-target="#mobileBankingModal">
                                <img src="https://staging.nagadhat.com.bd/public/images/withdraw/mobile-banking.png" className="img-fluid" />
                            </div>
                            <div className="col-4 p-0" type="button" data-bs-toggle="modal" data-bs-target="#bankModal">
                                <img src="https://staging.nagadhat.com.bd/public/images/withdraw/bank.png" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    {/* modal 1*/}
                    <div className="modal fade" id="agentModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Withdraw With Agent</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {/* <!-- Modal Body--> */}
                                    <div className="modal-body">
                                        <div className="container">
                                            <div className="text-center">
                                                <img className="img-fluid" style={{ width: "50%" }} src="https://staging.nagadhat.com.bd/public/images/withdraw/agent.png" alt="Pay with agent" />
                                            </div>
                                            <div className="form-group pt-4 pb-3">
                                                <label className="form-label" for="AgentName">Withdraw by</label>
                                                <select className="custom-select form-control" name="agent_id" required="">
                                                    <option value="">Select Agent</option>
                                                    <option value="2">
                                                        Agent Frank
                                                        - 017629798710
                                                    </option>
                                                    <option value="13901">
                                                        MAK Babu
                                                        - 01322514241
                                                    </option>
                                                    <option value="25275">
                                                        PS International
                                                        - 01610578765
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="d-none" id="payment_getway_selector">
                                                <div className="d-flex justify-content-center">
                                                    <span className="text-center p-1">
                                                        <input className="btn" type="radio" name="slug_tier_1" value="Cash" />
                                                        Cash
                                                    </span>
                                                    <span className="text-center p-1">
                                                        <input className="btn" type="radio" name="slug_tier_1" value="Mobile Banking" />
                                                        Mobile Banking
                                                    </span>
                                                    <span className="text-center p-1">
                                                        <input className="btn" type="radio" name="slug_tier_1" value="Bank" />
                                                        Bank
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group d-none" id="mobile_banking_billing_method_selector">
                                                <label className="form-label" for="withdrawto">Billing Method</label>
                                                <select className="custom-select form-control" name="mobile_banking_billing_method">
                                                    <option value=""> Select Billing Method </option>
                                                    <option value="Bkash">Bkash - 01819879787 </option>
                                                    <option value="Nagad">Nagad - 01819879787 </option>
                                                    <option value="Rocket">Rocket - 018198797874 </option>
                                                </select>
                                            </div>
                                            <div className="form-group d-none" id="bank_billing_method_selector">
                                                <label className="form-label" for="withdrawto">Billing Method</label>
                                                <select className="custom-select form-control" name="bank_billing_method">
                                                    <option value="">
                                                        Select Billing Method
                                                    </option>
                                                    <option value="Bank">
                                                        Ific Bank ltd -  0190338922811
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label">Amount
                                                    <strong>
                                                        Balance: 5611.28
                                                    </strong>
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend"> <span className="input-group-text">৳</span>
                                                    </div>
                                                    <input type="number" className="form-control withdraw_amount" name="amount" required="" value="" placeholder="Enter Amount" />
                                                </div>
                                            </div>
                                            <div className="form-group paySheet d-none">
                                                <p className="mb-0">Amount:<input type="text" className="border-none setAmount form-control-sm" value="0" readonly="" />
                                                </p>
                                                <p className="mb-0">Charge:<input type="text" name="charge" className="border-none setCharge form-control-sm" value="0" readonly="" />
                                                </p>
                                                <p className="mb-0">Payable:<input type="text" name="payable" className="border-none setPayable form-control-sm" value="0" readonly="" />
                                                </p>
                                            </div>
                                            <button className="btn bg-brand-color btn-block text-white" type="submit">
                                                Continue
                                            </button>
                                            <p className="text-muted mt-4 mb-0 p-0">10% service charge
                                                applicable.</p>
                                            <p className="text-muted m-0 p-0">Minimum withdrawal Amount
                                                500.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal 2 */}
                    <div className="modal fade" id="mobileBankingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                            {/* <!-- Modal content--> */}
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="">Withdraw With Mobile
                                        Banking</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                {/* <!-- Modal Body--> */}
                                <div class="modal-body">
                                    <div class="container">
                                        <div class="text-center">
                                            <img class="img-fluid" style={{ width: "50%" }} src="https://staging.nagadhat.com.bd/public/images/withdraw/mobile-banking.png" alt="Withdraw with mobile banking" />
                                        </div>
                                        <div class="form-group pb-3 pt-4">
                                            <label className="form-label" for="withdrawto">Withdraw to</label>
                                            <select class="custom-select form-control" name="billing_method" required="">
                                                <option value="">
                                                    Select Payment Gateway
                                                </option>
                                                <option value="Bkash">Bkash
                                                    -
                                                    01819879787
                                                </option>
                                                <option value="Nagad">Nagad
                                                    -
                                                    01819879787
                                                </option>
                                                <option value="Rocket">
                                                    Rocket
                                                    -
                                                    018198797874
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label className="form-label form-label">Amount
                                                <strong >
                                                    (Balance: 5611.28)
                                                </strong>
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-prepend"> <span class="input-group-text">৳</span>
                                                </div>
                                                <input type="number" class="form-control form-label withdraw_amount" name="amount" required="" value="" placeholder="Enter Amount" />
                                            </div>
                                        </div>
                                        <div class="form-group paySheet d-none">
                                            <p class="mb-0">Amount:
                                                <input type="text" class="border-none setAmount form-control-sm" value="0" readonly="" />
                                            </p>
                                            <p class="mb-0">Charge:
                                                <input type="text" name="charge" class="border-none setCharge form-control-sm" value="0" readonly="" />
                                            </p>
                                            <p class="mb-0">Payable:
                                                <input type="text" name="payable" class="border-none setPayable form-control-sm" value="0" readonly="" />
                                            </p>
                                        </div>
                                        <button class="btn bg-brand-color btn-block text-white" type="submit">
                                            Continue
                                        </button>
                                        <p class="text-muted mt-4 mb-0 p-0">10% service charge applicable.</p>
                                        <p class="text-muted m-0 p-0">Minimum withdrawal Amount 500.00</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal 3 */}
                    <div className="modal fade" id="bankModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                            {/* <!-- Modal content--> */}
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="">Withdraw With Mobile
                                        Banking</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                {/* <!-- Modal Body--> */}
                                <div class="modal-body">
                                    <div class="container">
                                        <div class="text-center">
                                            <img class="img-fluid" style={{ width: "50%" }} src="https://staging.nagadhat.com.bd/public/images/withdraw/mobile-banking.png" alt="Withdraw with mobile banking" />
                                        </div>
                                        <div class="form-group pb-3 pt-4">
                                            <label className="form-label" for="withdrawto">Withdraw to</label>
                                            <select class="custom-select form-control" name="billing_method" required="">
                                                <option value="">
                                                    Select Payment Gateway
                                                </option>
                                                <option value="Bkash">Bkash
                                                    -
                                                    01819879787
                                                </option>
                                                <option value="Nagad">Nagad
                                                    -
                                                    01819879787
                                                </option>
                                                <option value="Rocket">
                                                    Rocket
                                                    -
                                                    018198797874
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label className="form-label form-label">Amount
                                                <strong >
                                                    (Balance: 5611.28)
                                                </strong>
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-prepend"> <span class="input-group-text">৳</span>
                                                </div>
                                                <input type="number" class="form-control form-label withdraw_amount" name="amount" required="" value="" placeholder="Enter Amount" />
                                            </div>
                                        </div>
                                        <div class="form-group paySheet d-none">
                                            <p class="mb-0">Amount:
                                                <input type="text" class="border-none setAmount form-control-sm" value="0" readonly="" />
                                            </p>
                                            <p class="mb-0">Charge:
                                                <input type="text" name="charge" class="border-none setCharge form-control-sm" value="0" readonly="" />
                                            </p>
                                            <p class="mb-0">Payable:
                                                <input type="text" name="payable" class="border-none setPayable form-control-sm" value="0" readonly="" />
                                            </p>
                                        </div>
                                        <button class="btn bg-brand-color btn-block text-white" type="submit">
                                            Continue
                                        </button>
                                        <p class="text-muted mt-4 mb-0 p-0">10% service charge applicable.</p>
                                        <p class="text-muted m-0 p-0">Minimum withdrawal Amount 500.00</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default WithdrawWrapper;
