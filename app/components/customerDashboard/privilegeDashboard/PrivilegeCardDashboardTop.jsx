import Image from "next/image";

const PrivilegeCardDashboardTop = () => {
    return (
        <>
            <div className="customer-dashboard-order-history-area">
                <div className="customer-dashboard-order-history-title">
                    <div className=" flipper-container-wrapp">
                        <div className="flipper-container">
                            <div className="flip">
                                <div className="front face ">
                                    <Image
                                        src={`/images/1665226202_1.png`}
                                        alt="image"
                                        style={{ objectFit: "cover" }}
                                        fill
                                    />
                                </div>
                                <div className="back face">
                                    <Image
                                        src={`/images/priv-membership-back.png`}
                                        alt="image"
                                        style={{ objectFit: "cover" }}
                                        fill
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="px-3 py-3 ">
                            <strong className="fs-5 pb-3">৳ 1000</strong>
                            <h6 className="fs-6">Membership Card</h6>
                            <div className="pt-2 d-flex align-items-center gap-2 ">
                                <button className="add-to-cart-link border-0 rounded-3 text-capitalize ">
                                    Details
                                </button>
                                <button className="add-to-cart-link border-0 rounded-3 text-capitalize ">
                                    Active
                                </button>
                                <button className="add-to-cart-link border-0 rounded-3 text-capitalize ">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivilegeCardDashboardTop;
