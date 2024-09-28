import FinanceTopTitle from "@/app/components/customerDashboard/finance/FinanceTopTitle";

const FinanceWithdraw = () => {
    return (
        <div className="customer-dashboard-order-history-area">
            <FinanceTopTitle title="Withdraw Request Varifiction" />
            <div className="p-4">
                <div class="">
                    <h3 class=" mb-3">Summery!</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Withdraw Method :</th>
                                        <td>Nagadhat Agent</td>
                                    </tr>
                                    <tr>
                                        <th>Withdraw By :</th>
                                        <td>Mahahmuda Trading</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-md-6">
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Amount :</td>
                                        <td>500</td>
                                    </tr>
                                    <tr>
                                        <td>Charge :</td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td>Payable :</td>
                                        <td>450</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr class="py-2" />
                    {/* <p class="text-danger">* Enter your tansaction pin to proceed.</p> */}
                    <label for="" class="form-label">Enter your tansaction PIN to proceed. *</label>
                    <form class="form">
                        <div class="form-group pb-3 d-flex gap-3 align-items-center">
                            {/* <label for="" class="form-label">PIN</label> */}
                            <input type="number" required="" class="form-control" name="otp" placeholder="PIN"  />
                            <button type="submit" class="ms-auto add-to-cart-link border-0">Continue</button>
                        </div>
                        
                        {/* <div class="input-group affiliate-products-search w-100">
                            <input class="form-control" placeholder="PIN" type="search" value="" name="search" />
                            <button class="input-group-text" id="search" >
                                Continue
                            </button>
                        </div> */}
                    </form>
                </div >
            </div >
        </div >
    );
};

export default FinanceWithdraw;
