const OrderShippingAddress = ({ orderSummary }) => {
    return (
        <>
            <div className="billing-address">
                <div className="billing-address-title">
                    <h3>Shipping Address</h3>
                </div>
                <div className="billing-address-item-continar">
                    <div className="billing-address-item">
                        <strong>Name:</strong>
                        {orderSummary?.customer_name && (
                            <p>{orderSummary?.customer_name}</p>
                        )}
                    </div>
                    <div className="billing-address-item">
                        <strong>Address:</strong>
                        {orderSummary?.shipping_address && (
                            <p>{orderSummary?.shipping_address}</p>
                        )}
                    </div>
                    <div className="billing-address-item">
                        <strong>Phone:</strong>
                        {orderSummary?.customer_phone && (
                            <p>{orderSummary?.customer_phone}</p>
                        )}
                    </div>
                    <div className="billing-address-item">
                        <strong>Email:</strong>
                        {orderSummary?.customer_email && (
                            <p>{orderSummary?.customer_email}</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderShippingAddress;
