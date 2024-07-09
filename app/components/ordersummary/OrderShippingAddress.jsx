const OrderShippingAddress = () => {
    return (
        <>
            <div className="billing-address">
                <div className="billing-address-title">
                    <h3>Shipping Address</h3>
                </div>
                <div className="billing-address-item-continar">
                    <div className="billing-address-item">
                        <strong>Name:</strong>
                        <p>Jane Smith</p>
                    </div>
                    <div className="billing-address-item">
                        <strong>Address:</strong>
                        <p>
                            Khaja Super Market, 2nd to 7th Floor, Kallyanpur Bus
                            Stop, Mirpur Road, Dhaka-1207.
                        </p>
                    </div>
                    <div className="billing-address-item">
                        <strong>Phone:</strong>
                        <p>01906198502</p>
                    </div>
                    <div className="billing-address-item">
                        <strong>Email:</strong>
                        <p>jane.smith@email.com</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderShippingAddress;
