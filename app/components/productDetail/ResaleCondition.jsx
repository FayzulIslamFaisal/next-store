import React from "react";

const ResaleCondition = ({ productInfo }) => {
    return (
        <div className="d-flex flex-column gap-3">
            <div>
                <h3 className="fs-5 fw-bold">Minimum Quantity</h3>
                <p>{productInfo?.min_quantity}</p>
            </div>
            <div>
                <h3 className="fs-5 fw-bold">Duration</h3>
                <p>After 6 Months</p>
            </div>
        </div>
    );
};

export default ResaleCondition;
