"use client";
import { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

const CustomerDashboardRightSide = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };
    useEffect(() => {
        if (showMenu) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showMenu]);
    return (
        <>
            <div className="col-lg-9 customer-dashboard-section">
                <div className="customer-dashboard-card">
                    <div className="customer-dashboard-title-bar">
                        <div>
                            <h1 className="customer-dashboard-title">
                                Dashboard
                            </h1>
                        </div>
                        <div className="fs-4">
                            <i className="fa-solid fa-bell"></i>
                        </div>
                    </div>
                    <div className="row g-3 mb-4 customer-dashboard-display-area">
                        <div className="col-6 col-md-3">
                            <div className="balance-area">
                                <h3>0</h3>
                                <p className="opacity-50">Balance</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="shopping-alance-area">
                                <h3>0</h3>
                                <p className="opacity-50">Shopping Balance</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="ordered-area">
                                <h3>0</h3>
                                <p className="opacity-50">Ordered</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="in-cart-area">
                                <h3>0</h3>
                                <p className="opacity-50">in cart</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-3 flex-column flex-md-row">
                    <div className="customer-dashboard-card border-0 flex-1">
                        <div className="p-3 border-bottom">
                            <h2 className="mb-0 customer-dashboard-subtitle">
                                Default Shipping Address
                            </h2>
                        </div>
                        <div className="p-4">
                            <div
                                className="mx-auto"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                <div
                                    className="add-new-address-bar"
                                    data-toggle="modal"
                                    data-target="#addNewAddressModal"
                                >
                                    <FaPlus />
                                    <div className="alpha-7">
                                        Add New Address
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Modal --> */}
                        <div
                            className="modal fade modal-lg"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1
                                            className="modal-title customer-dashboard-title"
                                            id="exampleModalLabel"
                                        >
                                            Shipping Address
                                        </h1>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="shaipping-from-area px-4">
                                            <from className="row ">
                                                <div className="col-md-6 pb-3">
                                                    <label
                                                        for="mobile"
                                                        className="form-label"
                                                    >
                                                        Mobile Number{" "}
                                                        <span className="text-danger fw-bold">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="mobile"
                                                        className="form-control"
                                                        id="mobile"
                                                    />
                                                </div>
                                                <div className="col-md-6 pb-3">
                                                    <label
                                                        for="email"
                                                        className="form-label"
                                                    >
                                                        Email(Optonal)
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        id="email"
                                                    />
                                                </div>
                                                <div className="col-md-6 pb-3">
                                                    <label
                                                        for="district"
                                                        className="form-label"
                                                    >
                                                        District{" "}
                                                        <span className="text-danger fw-bold">
                                                            *
                                                        </span>
                                                    </label>
                                                    <select
                                                        className="form-select district-list"
                                                        name="district"
                                                        id="district"
                                                    >
                                                        <option defaultValue="District">
                                                            District
                                                        </option>
                                                        <option value="Barisal">
                                                            Barisal
                                                        </option>
                                                        <option value="Chittagong">
                                                            Chittagong
                                                        </option>
                                                        <option value="Dhaka">
                                                            Dhaka
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 pb-3">
                                                    <label
                                                        for="city"
                                                        className="form-label"
                                                    >
                                                        City
                                                    </label>

                                                    <select
                                                        className="form-select district-list"
                                                        name="city"
                                                        id="city"
                                                    >
                                                        <option defaultValue="City">
                                                            City
                                                        </option>
                                                        <option value="Barisal">
                                                            Barisal
                                                        </option>
                                                        <option value="Chittagong">
                                                            Chittagong
                                                        </option>
                                                        <option value="Dhaka">
                                                            Dhaka
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12 pb-3">
                                                    <label
                                                        for="address"
                                                        className="form-label"
                                                    >
                                                        Address
                                                    </label>
                                                    <textarea
                                                        name="address"
                                                        id="address"
                                                        className="form-control textarea-resize"
                                                        rows="2"
                                                    ></textarea>
                                                </div>
                                            </from>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="add-to-cart-link bg-danger border-0"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="button"
                                            className="add-to-cart-link border-0"
                                        >
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Modal End --> */}

                        {/* <!------------- if Address -------------> */}
                        <div className="p-4 ">
                            <div className="d-flex gap-4 border p-3 rounded">
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, fugit?</p>
                                </div>
                                <div className="customer-address-action-btn">
                                    <div onClick={handleToggleMenu}>
                                        <FaEllipsisVertical />
                                    </div>
                                    {showMenu && (
                                        <div
                                            ref={menuRef}
                                            className="customer-address-action-container"
                                        >
                                            <div className="customer-address-action-item" >
                                                Edit
                                            </div>
                                            <div className="customer-address-action-item" >
                                                Delete
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="customer-dashboard-card flex-1">
                        <div className="border-bottom p-3">
                            <h2 className="mb-0 customer-dashboard-subtitle">
                                Affiliate Partner
                            </h2>
                        </div>
                        <div
                            className="d-flex align-items-center justify-content-center gap-4 text-center p-4"
                            id="affiliateApply"
                        >
                            <a
                                className="customer-dashboard-affiliate-badge"
                                href="#"
                            >
                                <img
                                    src="/images/affiliate-badge.gif"
                                    className="img-fluid"
                                />
                            </a>
                            <div className="affiliate-status-title">
                                <h4>
                                    Status:
                                    <span>Active</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerDashboardRightSide;