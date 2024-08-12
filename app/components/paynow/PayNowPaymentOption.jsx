import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";

const PayNowPaymentOption = () => {
    return (
        <>
            <div className="col-lg-8 col-md-12">
                <div className="pay-now-payment-option-bg bg-white">
                    <div className="pay-now-payment-option-title">
                        <h1>Select a payment Option</h1>
                    </div>
                    <div className="pay-now-payment-option-img">
                        <div className="pay-now-payment-option-img-box rounded-3">
                            <div className="pay-now-payment-option-img-item">
                                <Image
                                    fill
                                    src="/images/Bkash.png"
                                    className="img-fluid"
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="pay-now-payment-option-img-box rounded-3">
                            <div className="pay-now-payment-option-img-item">
                                <Image
                                    fill
                                    src="/images/bank-deposit.png"
                                    className="img-fluid"
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="pay-now-payment-option-img-box rounded-3">
                            <div className="pay-now-payment-option-img-item">
                                <Image
                                    fill
                                    src="/images/cash-on.png"
                                    className="img-fluid"
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="pay-now-payment-option-img-box rounded-3">
                            <div className="pay-now-payment-option-img-item">
                                <Image
                                    fill
                                    src="/images/sslcommerz.png"
                                    className="img-fluid"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pay-now-terms-condition-area">
                    <div className="pay-now-terms-condition">
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                            >
                                I agree to the terms and conditions, return
                                policy, and privacy policy
                            </label>
                        </div>
                    </div>
                    <div className="pay-now-return-shop d-flex align-items-center justify-content-between">
                        <div className="pay-now-return-shop-item">
                            <Link href="/orderhistory">
                                <FaChevronLeft />
                                Return to Shop
                            </Link>
                        </div>
                        <button className="btn btn-danger">
                            Complete order
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayNowPaymentOption;
