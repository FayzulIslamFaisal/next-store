const ContainerOrderDetails = () => {
    return (
        <>
            <div className="row gy-3 p-4">
                <div className="col-md-9 overflow-x-auto">
                    <div
                        className="container-booking-oder-table "
                        style={{ minWidth: "400px" }}
                    >
                        <h3>Order Details</h3>
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Details</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img
                                            style={{
                                                height: "60px",
                                            }}
                                            src="/images/flash-img3.jpg"
                                            alt="hello"
                                        />
                                    </td>
                                    <td>Maggi Masala 620gm (8Pcs)</td>
                                    <td>
                                        <div
                                            className="btn-group quantity-area container-booking-quantity-area"
                                            role="group"
                                            aria-label="Basic example"
                                        >
                                            <button
                                                type="button"
                                                className="quantity-increase"
                                            >
                                                <i className="fa-solid fa-minus"></i>
                                            </button>
                                            <input
                                                className="quantity-fild"
                                                min="1"
                                                max="5"
                                                step="1"
                                                autoComplete="off"
                                                height="100%"
                                                readOnly=""
                                                type="text"
                                                defaultValue="1"
                                            />
                                            <button
                                                className="quantity-decrease"
                                                type="button"
                                            >
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <strong>1000</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="container-booking-oder-table">
                        <h3>Oder Amount</h3>
                        <table className="table table-borderless container-booking-oder-amount-table">
                            <tbody>
                                <tr>
                                    <td>Sub Total</td>
                                    <td>4000</td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>
                                        <strong>3800</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="overflow-hidden">
                            <a className="add-to-cart-link rounded-bottom">
                                Booking Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContainerOrderDetails;
