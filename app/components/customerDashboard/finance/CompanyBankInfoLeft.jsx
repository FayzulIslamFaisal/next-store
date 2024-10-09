import { BsBank2 } from "react-icons/bs";
import { FaSignature } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaSortNumericUp } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";

const CompanyBankInfoLeft = () => {
    return (
        <>
            <div className="col-md-6">
                <div className="">
                    <p className=" pb-2 d-flex align-items-center gap-2 fs-6">
                        <BsBank2 className="fs-5" />{" "}
                        <strong className="pt-1"> Bank Name:</strong>{" "}
                        <span className="pt-1">IFIC</span>
                    </p>
                    <p className=" pb-2 d-flex align-items-center gap-2 fs-6">
                        <FaSignature className="fs-5" />{" "}
                        <strong className="pt-1"> Account Name:</strong>{" "}
                        <span className="pt-1">
                            Nagadhat Bangladesh limited
                        </span>
                    </p>
                    <p className=" pb-2 d-flex align-items-center gap-2 fs-6">
                        <FaMoneyCheckDollar className="fs-5" />{" "}
                        <strong className="pt-1"> Account Number:</strong>{" "}
                        <span className="pt-1">0190338981001</span>
                    </p>
                    <p className=" pb-2 d-flex align-items-center gap-2 fs-6">
                        <FaSortNumericUp className="fs-5" />{" "}
                        <strong className="pt-1"> Routing Number:</strong>{" "}
                        <span className="pt-1">120260120</span>
                    </p>
                    <p className=" pb-2 d-flex align-items-center gap-2 fs-6">
                        <FaDonate className="fs-5" />{" "}
                        <strong className="pt-1"> Branch:</strong>{" "}
                        <span className="pt-1">Gabtoli Bagbari</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default CompanyBankInfoLeft;
