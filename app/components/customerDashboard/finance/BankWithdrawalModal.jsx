import bank from "@/public/images/bank.png";
import Image from "next/image";

const BankWithdrawalModal = () => {
    return (
        <div className="modal fade" id="bankModal" tabIndex="-1" aria-labelledby="bankModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="bankModalLabel">Withdraw With Bank</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container d-flex gap-3 flex-column">
                            <div className="text-center">
                                <Image height={200} width={300} className="img-fluid" style={{ width: "50%" }} src={bank} alt="Withdraw to bank" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="withdrawto">Withdraw to</label>
                                <select className="custom-select form-control" name="bank_billing_method" required>
                                    <option value="">Select Payment Gateway</option>
                                    <option value="Bank">IFIC Bank Ltd - 0190338922811</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Amount <strong className="praymary-color">(Balance: 5611.28)</strong></label>
                                <div className="input-group">
                                    <div className="input-group-prepend"> <span className="input-group-text">৳</span> </div>
                                    <input type="number" className="form-control withdraw_amount" name="amount" required placeholder="Enter Amount" />
                                </div>
                            </div>
                            <div className="form-group paySheet">
                                <p className="mb-0">Amount: 600</p>
                                <p className="mb-0">Charge: 100</p>
                                <p className="mb-0">Payable: 500</p>
                            </div>
                            <button className="w-100 add-to-cart-link border-0" type="submit">Continue</button>
                            <div>
                                <p className="text-muted">10% service charge applicable.</p>
                                <p className="text-muted">Minimum withdrawal Amount 500.00 ৳</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankWithdrawalModal
