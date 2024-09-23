import mobileBanking from "@/public/images/mobile-banking.png";
import Image from "next/image";

const MobileBankingModal = ({ mobileBankingInfo }) => {
    return (
        <div
            className="modal fade"
            id="mobileBankingModal"
            tabIndex="-1"
            aria-labelledby="mobileBankingModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5
                            className="modal-title"
                            id="mobileBankingModalLabel"
                        >
                            Withdraw With Mobile Banking
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="container d-flex flex-column gap-3">
                            <div className="text-center">
                                <Image
                                    height={200}
                                    width={300}
                                    className="img-fluid"
                                    style={{ width: "50%" }}
                                    src={mobileBanking}
                                    alt="Withdraw with mobile banking"
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
                                    name="billing_method"
                                    required
                                >
                                    <option value="">
                                        Select Payment Gateway
                                    </option>
                                    {mobileBankingInfo?.data?.map(
                                        (item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item?.name}
                                                >
                                                    {item?.name}
                                                </option>
                                            );
                                        }
                                    )}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Amount{" "}
                                    <strong className="praymary-color">
                                        (Balance:{" "}
                                        {mobileBankingInfo?.total_withdrawable})
                                    </strong>
                                </label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        {" "}
                                        <span className="input-group-text">
                                            ৳
                                        </span>{" "}
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

export default MobileBankingModal;
