import { FaCartPlus } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaMap } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

const PayNowTopIcon = () => {
    return (
        <>
            <div className="row pay-now-pagination-area">
                <div className="col-md-12">
                    <div className="pay-now-pagination d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="pay-now-pagination-item d-flex flex-column gap-2 pay-now-success">
                            <div className="pay-now-pagination-top d-flex align-items-center justify-content-between">
                                <p>
                                    <FaCartPlus />
                                </p>
                                <FaChevronRight />
                            </div>
                            <div className="pay-now-pagination-bottom text-capitalize">
                                1. my cart
                            </div>
                        </div>
                        <div className="pay-now-pagination-item d-flex flex-column gap-2 pay-now-success">
                            <div className="pay-now-pagination-top d-flex align-items-center justify-content-between">
                                <p>
                                    <FaMap />
                                </p>
                                <FaChevronRight />
                            </div>
                            <div className="pay-now-pagination-bottom text-capitalize">
                                2. Shipping Info
                            </div>
                        </div>
                        <div className="pay-now-pagination-item d-flex flex-column gap-2 pay-now-success">
                            <div className="pay-now-pagination-top d-flex align-items-center justify-content-between">
                                <p>
                                    <FaTruck />
                                </p>
                                <FaChevronRight />
                            </div>
                            <div className="pay-now-pagination-bottom text-capitalize">
                                3.Delivery Info
                            </div>
                        </div>
                        <div className="pay-now-pagination-item d-flex flex-column gap-2 pay-now-success">
                            <div className="pay-now-pagination-top d-flex align-items-center justify-content-between">
                                <p>
                                    <FaMoneyCheck />
                                </p>
                                <FaChevronRight />
                            </div>
                            <div className="pay-now-pagination-bottom text-capitalize">
                                4. Payment
                            </div>
                        </div>
                        <div className="pay-now-pagination-item d-flex flex-column gap-2 pay-now-warning">
                            <div className="pay-now-pagination-top d-flex align-items-center justify-content-between">
                                <p>
                                    <FaRegCheckCircle />
                                </p>
                            </div>
                            <div className="pay-now-pagination-bottom text-capitalize">
                                5. Confirmation
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayNowTopIcon;
