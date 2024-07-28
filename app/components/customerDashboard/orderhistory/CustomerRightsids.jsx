import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaDownload, FaRegFaceFrown, FaXmark } from "react-icons/fa6";

const CustomerRightsids = ({ customerOrders }) => {
    return (
        <div className="col-lg-9">
            <div className="customer-dashboard-order-history-area">
                <div className="customer-dashboard-order-history-title">
                    <h1 className="customer-dashboard-title">Order History</h1>
                </div>
                {customerOrders?.length > 0 ? (
                    <div className="customer-dashboard-order-history table-responsive-md">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Invoice ID</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Order Status</th>
                                    <th scope="col">Payment Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customerOrders &&
                                    customerOrders.length > 0 &&
                                    customerOrders.map((orderItem) => {
                                        const {
                                            invoice_id,
                                            order_date,
                                            order_status,
                                            price_amount,
                                            payment_status,
                                        } = orderItem;
                                        return (
                                            <tr key={invoice_id}>
                                                <td>{invoice_id}</td>
                                                <td>{order_date}</td>
                                                <td>{price_amount}</td>
                                                <td>{order_status}</td>
                                                {payment_status === "Paid" ? (
                                                    <td className="paid">
                                                        {payment_status}
                                                    </td>
                                                ) : (
                                                    <td>
                                                        {payment_status}{" "}
                                                        <Link
                                                            href="#"
                                                            className="customer-dashboard-order-history-pay"
                                                        >
                                                            Pay Now
                                                        </Link>
                                                    </td>
                                                )}
                                                <td>
                                                    <div className="customer-dashboard-order-history-actions">
                                                        <button>
                                                            <Link
                                                                href="/orderview"
                                                                style={{
                                                                    color: "white",
                                                                }}
                                                            >
                                                                <FaEye />
                                                            </Link>
                                                        </button>
                                                        <button>
                                                            <Link
                                                                href="/orderinvoice"
                                                                style={{
                                                                    color: "white",
                                                                }}
                                                            >
                                                                <FaDownload />
                                                            </Link>
                                                        </button>
                                                        <button>
                                                            <FaXmark />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="d-flex justify-content-center align-items-center flex-column gap-3 p-4">
                        <FaRegFaceFrown className="fs-2" />
                        <p className="fs-5">Nothing Found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomerRightsids;
