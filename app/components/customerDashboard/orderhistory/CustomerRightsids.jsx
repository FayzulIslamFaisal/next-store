"use client";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaDownload, FaRegFaceFrown, FaXmark } from "react-icons/fa6";
import Pagination from "../../productCategory/Pagination";
import { postOrderCancel } from "@/app/services/userdashboard/postOrderCancel";
import { toast } from "react-toastify"; // Import Toastify

const CustomerRightsids = ({
    customerOrders,
    lastPage,
    currentPage,
    session,
    setOrderCancel,
    orderCancel,
}) => {
    const handleOrderCanceled = async (orderID) => {
        try {
            const token = session?.accessToken;
            if (!token) {
                toast.error("Authorization token is missing.");
                return;
            }
            const response = await postOrderCancel(orderID, token);
            if (response.code === 200 && !response?.error) {
                setOrderCancel(!orderCancel);
                toast.success(response?.message?.message);
            } else {
                console.error("Error response:", response);
                toast.error(
                    response?.message?.message || "Something went wrong"
                );
            }
        } catch (error) {
            console.error("Error occurred while canceling the order:", error);
            toast.error("An error occurred while canceling the order.");
        }
    };

    return (
        <>
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
                                    <th scope="col">Grand Total</th>
                                    <th scope="col">Order Status</th>
                                    <th scope="col">Payment Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customerOrders &&
                                    customerOrders.length > 0 &&
                                    customerOrders.map((orderItem, index) => {
                                        const {
                                            order_id,
                                            invoice_id,
                                            order_date,
                                            order_status,
                                            grand_total,
                                            payment_status,
                                        } = orderItem;
                                        return (
                                            <tr key={index}>
                                                <td>{invoice_id}</td>
                                                <td>{order_date}</td>
                                                <td>{grand_total}</td>
                                                <td>{order_status}</td>

                                                <td className="paid">
                                                    {order_status !==
                                                        "Canceled" &&
                                                        payment_status ===
                                                            "Unpaid" && (
                                                            <>
                                                                {payment_status}
                                                                <Link
                                                                    href={`/paynow?orderId=${order_id}`}
                                                                    className="customer-dashboard-order-history-pay"
                                                                >
                                                                    Pay Now
                                                                </Link>
                                                            </>
                                                        )}
                                                </td>

                                                <td>
                                                    <div className="customer-dashboard-order-history-actions">
                                                        <button title="Order View">
                                                            <Link
                                                                href={`/orderview?orderid=${order_id}`}
                                                                style={{
                                                                    color: "white",
                                                                }}
                                                            >
                                                                <FaEye />
                                                            </Link>
                                                        </button>
                                                        <button title="Order invoice">
                                                            <Link
                                                                href={`/orderinvoice?orderId=${order_id}`}
                                                                style={{
                                                                    color: "white",
                                                                }}
                                                            >
                                                                <FaDownload />
                                                            </Link>
                                                        </button>
                                                        {order_status ===
                                                        "Canceled" ? (
                                                            ""
                                                        ) : (
                                                            <button
                                                                title="Order Cancel"
                                                                onClick={() =>
                                                                    handleOrderCanceled(
                                                                        order_id
                                                                    )
                                                                }
                                                            >
                                                                <FaXmark />
                                                            </button>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                        <Pagination
                            currentPage={currentPage}
                            lastPage={lastPage}
                        />
                    </div>
                ) : (
                    <div className="d-flex justify-content-center align-items-center flex-column gap-3 p-4">
                        <FaRegFaceFrown className="fs-2" />
                        <p className="fs-5">Nothing Found </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default CustomerRightsids;
