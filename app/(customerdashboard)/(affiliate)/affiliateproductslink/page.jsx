import { FaTableCells } from "react-icons/fa6";
import { FaList } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
const AffiliateProductslinkPage = () => {
    return (
        <>
            <div className="col-lg-9">
                <div className="customer-setting">
                    <div className="customer-setting-header">
                        <div className="customer-dashboard-order-history-title border-0 p-0 ">
                            <h1 className="customer-dashboard-title">
                                Affiliate Products
                            </h1>
                        </div>
                    </div>
                    <div className="customer-setting-header tab-header border-0">
                        <ul
                            className="nav nav-pills d-flex tab-continer"
                            id="myTab"
                            role="tablist"
                        >
                            <li className="nav-item">
                                <button
                                    className="nav-link active rounded-0"
                                    id="retails-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#retails"
                                    type="button"
                                    role="tab"
                                >
                                    Retails
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link rounded-0 border-start-0 border-end-0"
                                    id="container-booking-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#container-booking"
                                    type="button"
                                    role="tab"
                                >
                                    Container Booking
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link rounded-0"
                                    id="resale-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#resale"
                                    type="button"
                                    role="tab"
                                >
                                    FPNH (Resale)
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link rounded-0"
                                    id="resale-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#properties"
                                    type="button"
                                    role="tab"
                                >
                                    Properties
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content container-booking-body">
                        {/* <!-- retails Content --> */}
                        <div
                            className="tab-pane fade show active container-booking-body-tab"
                            id="retails"
                            role="tabpanel"
                        >
                            <div className="justify-content-end d-flex align-content-end flex-sm-nowrap flex-wrap gap-2 gap-md-3 pb-4">
                                <div className="input-group affiliate-products-search">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                    />
                                    <button
                                        className="input-group-text"
                                        id="search"
                                    >
                                        <FaMagnifyingGlass />
                                    </button>
                                </div>
                                <div>
                                    <label
                                        htmlFor="show"
                                        className="form-label"
                                        hidden
                                    >
                                        Show
                                    </label>
                                    <select
                                        className="form-select district-list"
                                        name="show"
                                        id="show"
                                    >
                                        <option
                                            className="selected"
                                            defaultValue="all"
                                        >
                                            Select Category
                                        </option>
                                        <option defaultValue="organic">
                                            Organic
                                        </option>
                                        <option defaultValue="mens-fashion">
                                            Men's Fashion
                                        </option>
                                        <option defaultValue="women-fashion">
                                            Women's Fashion
                                        </option>
                                        <option defaultValue="panjabi">
                                            Panjabi
                                        </option>
                                        <option defaultValue="electronics">
                                            Electronics
                                        </option>
                                        <option defaultValue="safety-products">
                                            Safety Products
                                        </option>
                                        <option defaultValue="groceries">
                                            Groceries
                                        </option>
                                        <option defaultValue="cosmetics">
                                            Cosmetics
                                        </option>
                                        <option defaultValue="home-appliances">
                                            Home Appliances
                                        </option>
                                        <option defaultValue="stationery">
                                            Stationery
                                        </option>
                                        <option defaultValue="covid-19">
                                            Covid 19
                                        </option>
                                    </select>
                                </div>
                                <div className="btn-group grid-list-toggol-btn-group">
                                    <Link
                                        href="/affiliateproductslink"
                                        className="btn active-btn grid-list-toggol-btn"
                                        aria-current="page"
                                    >
                                        <FaTableCells />
                                    </Link>
                                    <Link
                                        href="/affiliateproductslinklist"
                                        className="btn  grid-list-toggol-btn"
                                    >
                                        <FaList />
                                    </Link>
                                </div>
                            </div>
                            <div className="row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xxl-4 g-3">
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item col">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img5.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item col">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img6.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
                                        </div>
                                    </div>
                                </div>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item col">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img5.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item col">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img6.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
                                        </div>
                                    </div>
                                </div>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item col">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img5.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item col">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img6.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <p className="affiliate-commission">
                                                Commission: ৳ 10
                                                <span>(5%)</span>
                                            </p>
                                            <button className="copy-link-btn">
                                                Copy Link
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- container-booking Content --> */}
                        <div
                            className="tab-pane fade"
                            id="container-booking"
                            role="tabpanel"
                        >
                            <div className=" d-flex justify-content-between container-booking-section-headr flex-column flex-md-row gap-3 align-items-center">
                                <div className="container-booking-banner">
                                    <img
                                        src="/images/Contener.png"
                                        alt="hello"
                                    />
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
                                                <td className="text-end">
                                                    01 Crore
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Item</td>
                                                <td className="px-5">:</td>
                                                <td className="text-end">
                                                    ....
                                                </td>
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
                                <p className="">
                                    Close Date : 1 September 2024
                                </p>
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
                                        <span className="sr-only">
                                            70% Complete
                                        </span>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                </a>
                                            </h4>
                                            <div className="add-to-cart-btn">
                                                <a
                                                    className="add-to-cart-link"
                                                    href="#"
                                                >
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                </a>
                                            </h4>
                                            <div className="add-to-cart-btn">
                                                <a
                                                    className="add-to-cart-link"
                                                    href="#"
                                                >
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                </a>
                                            </h4>
                                            <div className="add-to-cart-btn">
                                                <a
                                                    className="add-to-cart-link"
                                                    href="#"
                                                >
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                </a>
                                            </h4>
                                            <div className="add-to-cart-btn">
                                                <a
                                                    className="add-to-cart-link"
                                                    href="#"
                                                >
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
                                                    <td>
                                                        Maggi Masala 620gm
                                                        (8Pcs)
                                                    </td>
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
                        </div>
                        {/* <!-- retails Content --> */}
                        <div
                            className="tab-pane fade container-booking-body-tab"
                            id="resale"
                            role="tabpanel"
                        >
                            <div className="justify-content-end d-flex align-items-end flex-sm-nowrap flex-wrap gap-2 gap-md-3 pb-4">
                                <div>
                                    <label
                                        htmlFor="sort-ascending"
                                        className="form-label"
                                    >
                                        Sort By Duration
                                    </label>
                                    <select
                                        className="form-select district-list"
                                        name="sort-ascending"
                                        id="sort-ascending"
                                    >
                                        <option
                                            className="selected"
                                            defaultValue="all"
                                        >
                                            Select
                                        </option>
                                        <option defaultValue="ascending">
                                            Ascending
                                        </option>
                                        <option defaultValue="descending">
                                            Descending
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="sort-pric"
                                        className="form-label"
                                    >
                                        Sort by pric
                                    </label>
                                    <select
                                        className="form-select district-list"
                                        name="sort-pric"
                                        id="sort-pric"
                                    >
                                        <option
                                            className="selected"
                                            defaultValue="all"
                                        >
                                            Select
                                        </option>
                                        <option defaultValue="high-to-low">
                                            High to low
                                        </option>
                                        <option defaultValue="low-to-high">
                                            Low to high
                                        </option>
                                    </select>
                                </div>
                                <div className="btn-group grid-list-toggol-btn-group">
                                    <Link
                                        href="/affiliateproductslink"
                                        className="btn active-btn grid-list-toggol-btn"
                                        aria-current="page"
                                    >
                                        <FaTableCells />
                                    </Link>
                                    <Link
                                        href="/affiliateproductslinklist"
                                        className="btn  grid-list-toggol-btn"
                                    >
                                        <FaList />
                                    </Link>
                                </div>
                            </div>
                            <div className="row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xxl-4 g-3">
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item col">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img5.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item col">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img6.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item col">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img5.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item col">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img6.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
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
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item col">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img5.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item col">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img6.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <div className="category-product-price d-flex align-items-center justify-content-between ">
                                                <strong>৳ 390</strong>
                                                <strong className="product-discount-price">
                                                    ৳<del>400.00</del>
                                                </strong>
                                            </div>
                                            <div className="add-to-cart-holder">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        className="add-to-cart-link undefined category-product-add-btn"
                                                        href="#"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            opacity: 1,
                                                        }}
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                            </div>
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

export default AffiliateProductslinkPage;
