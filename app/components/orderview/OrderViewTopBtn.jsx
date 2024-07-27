import Link from "next/link";

const OrderViewTopBtn = () => {
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
                                href="/orderinvoice"
                                style={{ color: "#fff" }}
                            >
                                Invoice
                            </Link>
                        </button>
                        <button
                            type="button"
                            className="border-0 btn btn-danger"
                        >
                            Canseled
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderViewTopBtn;
