import Link from "next/link";

const OrderViewTopBtn = ({ orderSummary }) => {
    return (
        <>
            <div className="row order-view-top-btn-area">
                <div className="col-md-12">
                    <div className="order-view-top-btn d-flex align-items-center justify-content-end gap-2">
                        <button
                            type="button"
                            className="border-0 btn order-invoce-btn"
                        >
                            <Link
                                href={`/orderinvoice?orderId=${orderSummary?.order_id}`}
                                style={{ color: "#fff" }}
                            >
                                Invoice
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderViewTopBtn;
