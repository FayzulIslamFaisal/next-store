import React from "react";

const PayWithBankModalLeft = () => {
    return (
        <>
            <div className="col-md-4 ">
                <div className="bg-body-secondary round-3">
                    <div className="modal-header">
                        <h6 className="modal-title fs-5">
                            Please Transfer your payment to this account
                        </h6>
                    </div>
                    <ul className="modal-header flex-column justify-content-center align-items-start">
                        <li className="pb-1 fs-6">
                            <strong>Bank Name: </strong>Brac Bank
                        </li>
                        <li className="pb-1 fs-6">
                            <strong>Account Name: </strong>
                            Nagadhat Bangladesh limited
                        </li>
                        <li className="pb-1 fs-6">
                            <strong>Account Number: </strong>
                            1507204822484001
                        </li>
                        <li className="pb-1 fs-6">
                            <strong>Routing Number: </strong>
                            060260435
                        </li>
                        <li className="fs-6">
                            <strong>Branch: </strong>Banani Branch
                        </li>
                    </ul>
                    <ul className="modal-header flex-column justify-content-center align-items-start">
                        <li className="pb-1 fs-6">
                            <strong>Bank Name: </strong>IFIC
                        </li>
                        <li className="pb-1 fs-6">
                            <strong>Account Name: </strong>
                            Nagadhat Bangladesh limited
                        </li>
                        <li className="pb-1 fs-6">
                            <strong>Account Number: </strong>
                            0190338981001
                        </li>
                        <li className="pb-1 fs-6">
                            <strong>Routing Number: </strong>
                            120260120
                        </li>
                        <li className="fs-6">
                            <strong>Branch: </strong>Gabtoli Bagbari
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PayWithBankModalLeft;
