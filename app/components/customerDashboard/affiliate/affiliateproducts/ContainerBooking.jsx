import { FaMinus, FaPlus } from "react-icons/fa6";

const ContainerBooking = () => {
    return (
        <>
            <div
                className="tab-pane fade"
                id="container-booking"
                role="tabpanel"
            >
                <div className=" d-flex justify-content-between container-booking-section-headr flex-column flex-md-row gap-3 align-items-center">
                    <div className="container-booking-banner">
                        <img src="/images/Contener.png" alt="hello" />
                    </div>
                    <div className="container-booking-section-headr-left">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Container Number</td>
                                    <td className="px-5">:</td>
                                    <td className="text-end">01</td>
                                </tr>
                                <tr>
                                    <td>Container Valu</td>
                                    <td className="px-5">:</td>
                                    <td className="text-end">01 Crore</td>
                                </tr>
                                <tr>
                                    <td>Item</td>
                                    <td className="px-5">:</td>
                                    <td className="text-end">....</td>
                                </tr>
                                <tr>
                                    <td>Quantity</td>
                                    <td className="px-5">:</td>
                                    <td className="text-end">01</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className=" d-flex justify-content-between container-booking-date-section flex-column flex-md-row gap-2">
                    <p className="">Open Date : 1 August 2024</p>
                    <p className="">Close Date : 1 September 2024</p>
                </div>
                <div className="px-4 pt-4">
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "70%" }}
                        >
                            <span className="sr-only">70% Complete</span>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-auto row-cols-sm-2 row-cols-md-4 p-4 row-cols-xxl-4 g-3">
                    <div className="flash-sale-content-item col">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="flash-sale-content-img image-hover-effect">
                                <img
                                    src="/images/flash-img1.jpg"
                                    className="img-fluid"
                                    alt="flash sale image"
                                />
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <a href="#">Maggi Masala 620gm (8Pcs)</a>
                                </h4>
                                <div className="add-to-cart-btn">
                                    <a className="add-to-cart-link" href="#">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item col">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="flash-sale-content-img image-hover-effect">
                                <img
                                    src="/images/flash-img2.jpg"
                                    className="img-fluid"
                                    alt="flash sale image"
                                />
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <a href="#">Maggi Masala 620gm (8Pcs)</a>
                                </h4>
                                <div className="add-to-cart-btn">
                                    <a className="add-to-cart-link" href="#">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item col">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="flash-sale-content-img image-hover-effect">
                                <img
                                    src="/images/flash-img3.jpg"
                                    className="img-fluid"
                                    alt="flash sale image"
                                />
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <a href="#">Maggi Masala 620gm (8Pcs)</a>
                                </h4>
                                <div className="add-to-cart-btn">
                                    <a className="add-to-cart-link" href="#">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item col">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="flash-sale-content-img image-hover-effect">
                                <img
                                    src="/images/flash-img4.jpg"
                                    className="img-fluid"
                                    alt="flash sale image"
                                />
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <a href="#">Maggi Masala 620gm (8Pcs)</a>
                                </h4>
                                <div className="add-to-cart-btn">
                                    <a className="add-to-cart-link" href="#">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gy-3 p-4">
                    <div className="col-md-9 overflow-x-auto">
                        <div
                            className="container-booking-oder-table "
                            style={{ minWidth: "400px" }}
                        >
                            <h3>Oder Details</h3>
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Prodect</th>
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
                                                    <FaMinus/>
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
                                                    <FaPlus/>
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
            </div>
        </>
    );
};

export default ContainerBooking;
