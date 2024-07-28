import Link from "next/link";
import { FaStopwatch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import { FaTruckRampBox } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaStoreSlash } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const OrderViewSummary = () => {
    return (
        <>
            <div className="row order-view-summary-area">
                <div className="col-md-12">
                    <div className="order-view-summary-bg rounded-2">
                        <div className="order-view-summary-title">
                            <h1 className="fw-bold text-capitalize">
                                Order Summary
                            </h1>
                        </div>
                        <div className="row order-view-summary-detail">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="order-view-summary-info">
                                    <p>
                                        <strong> Order Code:</strong>
                                    </p>
                                    <p>
                                        <strong> Customer:</strong>
                                    </p>
                                    <p>
                                        <strong> Email:</strong>
                                    </p>
                                    <p>
                                        <strong> Shipping Address:</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="order-view-summary-info">
                                    <p>LPO62184697</p>
                                    <p>faisal</p>
                                    <p>Email not found</p>
                                    <p>Dhaka ,Bangladesh Postal Code</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="order-view-summary-info">
                                    <p>
                                        <strong>Order Date:</strong>
                                    </p>
                                    <p>
                                        <strong>Order Status:</strong>
                                    </p>
                                    <p>
                                        <strong>Total order amount:</strong>
                                    </p>
                                    <p>
                                        <strong>Delivery Note:</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="order-view-summary-info">
                                    <p>11 Mar, 2024 - 07:23 AM</p>
                                    <p>Canceled</p>
                                    <p>৳ 1200</p>
                                    <p>--</p>
                                </div>
                            </div>
                        </div>
                        <div className="row order-view-summary-status-area">
                            <div className="col-md-12">
                                <div className="order-view-summary-status">
                                    <div className="step active" id="pending">
                                        <span className="icon">
                                            <FaStopwatch />
                                        </span>
                                        <span className="text">Pending</span>
                                    </div>
                                    <div className="step active" id="confirmed">
                                        <span className="icon">
                                            <FaCheck />
                                        </span>
                                        <span className="text">Confirmed</span>
                                    </div>
                                    <div
                                        className="step active"
                                        id="processing"
                                    >
                                        <span className="icon">
                                            <FaCogs />
                                        </span>
                                        <span className="text">Processing</span>
                                    </div>
                                    <div
                                        className="step active"
                                        id="readyToShip"
                                    >
                                        <span className="icon">
                                            <FaTruckRampBox />
                                        </span>
                                        <span className="text">
                                            Ready to Ship
                                        </span>
                                    </div>
                                    <div className="step active" id="shipped">
                                        <span className="icon">
                                            <FaTruck />
                                        </span>
                                        <span className="text">Shipped</span>
                                    </div>
                                    <div className="step active" id="delivered">
                                        <span className="icon">
                                            <FaBox />
                                        </span>
                                        <span className="text">Delivered</span>
                                    </div>
                                    <div className="step active" id="canceled">
                                        <span className="icon">
                                            <FaStoreSlash />
                                        </span>
                                        <span className="text">Canceled</span>
                                    </div>
                                    <div className="step active " id="refunded">
                                        <span className="icon">
                                            <FaWallet />
                                        </span>
                                        <span className="text">Refunded</span>
                                    </div>
                                    <div className="step active " id="buyback">
                                        <span className="icon">
                                            <FaHandHolding />
                                        </span>
                                        <span className="text">
                                            Sell On Nagadhat
                                        </span>
                                    </div>
                                    <div
                                        className="step active d-none"
                                        id="repurchase"
                                    >
                                        <span className="icon">
                                            <FaUndo />
                                        </span>
                                        <span className="text">Repurchase</span>
                                    </div>
                                    <div
                                        className="step active d-none"
                                        id="upgraded"
                                    >
                                        <span className="icon">
                                            <FaArrowUp />
                                        </span>
                                        <span className="text">Upgraded</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row back-to-order-view">
                            <div className="col-md-12">
                                <div className="back-to-order-view-btn">
                                    <Link
                                        href="/orderhistory"
                                        className="btn btn-warning"
                                        data-abc="true"
                                    >
                                        <i className="fa fa-chevron-left"></i>
                                        Back to orders
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderViewSummary;
