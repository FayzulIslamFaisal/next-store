import { FcCancel } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";

const BuybackPolicyData = ({ saleOnDetails }) => {
    console.log("saleOnDetails", { saleOnDetails });

    return (
        <>
            <div className="row pb-4 px-4">
                <div className="col-md-6">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered border-secondary">
                            <tbody>
                                <tr>
                                    <td>Invoice</td>
                                    <td>
                                        {saleOnDetails?.order_invoice || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Referance No.</td>
                                    <td>
                                        {saleOnDetails?.package_invoice ||
                                            "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Duration:</td>
                                    <td>{saleOnDetails?.duration || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td>Completed:</td>
                                    <td>
                                        {saleOnDetails?.completed_months ||
                                            "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Remaining:</td>
                                    <td>
                                        {saleOnDetails?.remaining_months ||
                                            "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Date of activation:</td>
                                    <td>
                                        {saleOnDetails?.start_date || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Date of completion:</td>
                                    <td>{saleOnDetails?.end_date || "N/A"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered border-secondary">
                            <tbody>
                                <tr>
                                    <td>Status</td>
                                    <td className="text-success">
                                        {saleOnDetails?.status === 0
                                            ? "Active"
                                            : "Completed"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Order Value:</td>
                                    <td>
                                        ৳ {saleOnDetails?.order_value || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>MRP Value:</td>
                                    <td>
                                        ৳ {saleOnDetails?.mrp_value || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Instalment:</td>
                                    <td>
                                        {saleOnDetails?.is_instalment === 1 ? (
                                            <>
                                                <FaCheckCircle className="text-success" />{" "}
                                                Yes
                                            </>
                                        ) : (
                                            <>
                                                <FcCancel className="text-danger" />
                                                No
                                            </>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Monthly Return:</td>
                                    <td>
                                        ৳{" "}
                                        {saleOnDetails?.monthly_bonus || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Total Returned:</td>
                                    <td>
                                        ৳ {saleOnDetails?.total_given || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-success">
                                        Next bonus on:
                                    </td>
                                    <td className="text-success">
                                        {saleOnDetails?.next_bonus_date ||
                                            "N/A"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuybackPolicyData;
