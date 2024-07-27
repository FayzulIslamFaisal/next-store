const OrderViewTimeLine = () => {
    return (
        <>
            <div className="row order-view-product-detail d-flex justify-content-center mt-70 mb-70">
                <div className="col-md-6">
                    <div className="main-card mb-3 card">
                        <div className="card-body">
                            <h5 className="card-title order-timeline-title">
                                Order Timeline
                            </h5>
                            <div className="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                <div className="vertical-timeline-item vertical-timeline-element">
                                    <div>
                                        <span className="vertical-timeline-element-icon bounce-in">
                                            <i className="fas fa-arrow-circle-right"></i>
                                        </span>
                                        <div className="vertical-timeline-element-content bounce-in">
                                            <h4 className="timeline-title text-danger">
                                                Canceled
                                            </h4>
                                            <p>
                                                Your order has been canceled.{" "}
                                                <br />
                                                For any query, call 01906198502.
                                            </p>
                                            <span className="vertical-timeline-element-date">
                                                5:56 PM
                                            </span>
                                            <span className="vertical-timeline-element-date-time">
                                                11-Mar, 2024
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="vertical-timeline-item vertical-timeline-element">
                                    <div>
                                        <span className="vertical-timeline-element-icon bounce-in">
                                            <i className="fas fa-arrow-circle-right"></i>
                                        </span>
                                        <div className="vertical-timeline-element-content bounce-in">
                                            <h4 className="timeline-title text-info">
                                                Order Placed
                                            </h4>
                                            <p>
                                                Please pay total amount within
                                                74 hours to confirm your order.
                                            </p>
                                            <span className="vertical-timeline-element-date">
                                                1:23 PM
                                            </span>
                                            <span className="vertical-timeline-element-date-time">
                                                11-Mar, 2024
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderViewTimeLine;
