import FinanceTopTitle from "@/app/components/customerDashboard/finance/FinanceTopTitle";

const FinanceWithdraw = ({ params }) => {

    const { id } = params;
    console.log(id);
    
    return (
        <div className="customer-dashboard-order-history-area">
            <FinanceTopTitle title="Withdraw Request Varifiction" />
            <div className="p-4">
                <div>
                    <h3 className="mb-3">Summery!</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <table className="table table-bordered">
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
                        <div className="col-md-6">
                            <table className="table table-bordered">
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
                    <hr className="py-2" />
                    {/* <p className="text-danger">* Enter your tansaction pin to proceed.</p> */}
                    <label for="" className="form-label">Enter your tansaction PIN to proceed. <span className="text-danger fs-5">*</span></label>
                    <form className="form">
                        <div className="form-group pb-3 d-flex gap-3 align-items-center">
                            {/* <label for="" className="form-label">PIN</label> */}
                            <input type="number" required="" className="form-control" name="otp" placeholder="PIN"  />
                            <button type="submit" className="ms-auto add-to-cart-link border-0">Continue</button>
                        </div>
                        
                        {/* <div className="input-group affiliate-products-search w-100">
                            <input className="form-control" placeholder="PIN" type="search" value="" name="search" />
                            <button className="input-group-text" id="search" >
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
