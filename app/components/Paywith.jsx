import Image from "next/image";
import React from "react";

function Paywith({
    title = "Pay with",
    imaUrl = "/images/payment-methods.jpg",
}) {
    return (
        <div className="col-md-12">
            <div className="payment-methods d-flex align-items-center">
                <p>{title}</p>
                <div className="payment-method-img">
                    <Image
                        fill
                        src={imaUrl}
                        className="img-fluid"
                        alt="payment-methods"
                    />
                </div>
            </div>
        </div>
    );
}

export default Paywith;
