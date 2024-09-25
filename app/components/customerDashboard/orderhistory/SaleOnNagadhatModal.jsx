"use client";
import Image from "next/image";
import QRCode from "react-qr-code";
import SaleOnNagadhatInvoice from "./SaleOnNagadhatInvoice";
import SaleOnNagadhatWallet from "./SaleOnNagadhatWallet";
import SaleOnNagadhatHeader from "./SaleOnNagadhatHeader";
import SaleOnNagadhatTop from "./SaleOnNagadhatTop";
import SaleOnNagadhatBottom from "./SaleOnNagadhatBottom";
import { useState } from "react";

const SaleOnNagadhatModal = () => {
    const [checkTermsCondition, setCheckTermsCondition] = useState(false);

    const handleTermsCondition = () => {
        setCheckTermsCondition(!checkTermsCondition);
    };
    return (
        <>
            <div
                className="modal fade"
                id="sale-on-nagadhat-modal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <SaleOnNagadhatHeader />
                        <div className="modal-body">
                            <SaleOnNagadhatTop />
                            <SaleOnNagadhatInvoice />
                            <SaleOnNagadhatWallet />
                            <SaleOnNagadhatBottom />

                            <div className=" d-flex gap-4 justify-content-between">
                                <div className="">
                                    <div
                                        className="mb-3 d-flex align-items-center gap-2"
                                        onClick={handleTermsCondition}
                                    >
                                        <input
                                            type="checkbox"
                                            className="form-check-input bg-success "
                                            id="terms-condition"
                                            style={{
                                                width: "25px",
                                                height: "25px",
                                            }}
                                        />
                                        <label
                                            className="form-check-label fs-5 fw-bold "
                                            htmlFor="terms-condition"
                                        >
                                            I accept the terms and conditions.
                                        </label>
                                    </div>
                                    <h4 className=" fs-4">প্রথম পক্ষ</h4>
                                    <div className="pt-2 pb-4">
                                        <QRCode
                                            size={256}
                                            style={{
                                                height: "auto",
                                                maxWidth: "100px",
                                                width: "100%",
                                            }}
                                            value={`hello world`}
                                        />
                                    </div>
                                    <p>
                                        <strong className="fs-5">
                                            Saiful Islam Akundo
                                        </strong>
                                    </p>
                                </div>
                                <div className="">
                                    <div className="pb-2">
                                        <Image
                                            src={`/images/signature.png`}
                                            width={120}
                                            height={50}
                                            alt="image"
                                            sizes="100vw"
                                        />
                                    </div>
                                    <p className=" fs-6">
                                        দ্বিতীয় পক্ষ <br /> মোঃ ইস্রাফিল মোল্লা
                                        <br />
                                        ব্যবস্থাপনা পরিচালক,
                                        <br /> নগদহাট বাংলাদেশ লিমিটেড।
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-success"
                                style={{
                                    opacity: checkTermsCondition ? 1 : 0.5,
                                }}
                                // disabled={!checkTermsCondition}
                            >
                                I agreed to a sale on Nagadhat.
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SaleOnNagadhatModal;
