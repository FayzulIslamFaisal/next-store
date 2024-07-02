"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
const CheckoutPage = () => {
    const { status, data: session } = useSession();
    const [auth, setAuth] = useState(session?.user);
    console.log("=>>> get login status", status);
    console.log("=>>> get login session", session);

    return (
        <section className="shipping-section-area">
            <div className="container">
                <div className="row gy-5 gy-lg-0 gx-0 gx-lg-5">
                    <div className="col-lg-8">
                        <div className="row shipping-top-area">
                            <div className="col-12">
                                <div className="shipping-top-holder flex-column flex-sm-row align-items-sm-center gap-2 ">
                                    <h1 className="shipping-section-title">
                                        Shipping Details
                                    </h1>
                                    <p>Choose from address book</p>
                                </div>
                            </div>
                        </div>
                        <div className="shaipping-from-area">
                            <from className="row ">
                                <div className="col-md-6 pb-3">
                                    <label
                                        htmlFor="fast-name"
                                        className="form-label"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fast-name"
                                        className="form-control"
                                        id="fast-name"
                                        value={auth?.name?.split(" ")[0]}
                                        disabled
                                    />
                                </div>
                                <div className="col-md-6 pb-3">
                                    <label
                                        htmlFor="lest-name"
                                        className="form-label"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lest-name"
                                        id="lest-name"
                                        value={auth?.name?.split(" ")[1]}
                                        disabled
                                    />
                                </div>
                                <div className="col-md-6 pb-3">
                                    <label
                                        htmlFor="mobile"
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
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email Address
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
                                        htmlFor="district"
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
                                        <option value="Barisal">Barisal</option>
                                        <option value="Chittagong">
                                            Chittagong
                                        </option>
                                        <option value="Dhaka">Dhaka</option>
                                    </select>
                                </div>
                                <div className="col-md-6 pb-3">
                                    <label
                                        htmlFor="city"
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
                                        <option value="Barisal">Barisal</option>
                                        <option value="Chittagong">
                                            Chittagong
                                        </option>
                                        <option value="Dhaka">Dhaka</option>
                                    </select>
                                </div>
                                <div className="col-md-12 pb-3">
                                    <label
                                        htmlFor="address"
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
                                <div className="col-md-12 pb-3">
                                    <label
                                        htmlFor="note"
                                        className="form-label"
                                    >
                                        Note
                                    </label>
                                    <textarea
                                        className="form-control textarea-resize"
                                        name="note"
                                        id="note"
                                        rows="2"
                                    ></textarea>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input shipping-checkbox"
                                            type="checkbox"
                                            id="address-book"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="address-book"
                                        >
                                            Add to address book
                                        </label>
                                    </div>
                                </div>
                            </from>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row order-section">
                            <div className="col-12">
                                <div className="order-info-area">
                                    <div className="shipping-section-subtitle">
                                        <h3>Shopping Summary</h3>
                                    </div>
                                    <div className="d-flex gap-2 flex-column border-bottom pb-3">
                                        <div className="d-flex gap-3 justify-content-between shopping-price-area custom-shopping-price">
                                            <div className="d-flex gap-3 ">
                                                <strong>1x</strong>
                                                <p>
                                                    LED Monitor With High
                                                    Quality In The World
                                                </p>
                                            </div>
                                            <strong>৳35,000</strong>
                                        </div>
                                        <div className="d-flex gap-3 justify-content-between shopping-price-area custom-shopping-price">
                                            <div className="d-flex gap-3">
                                                <strong>1x</strong>
                                                <p>Magic Pen for iPad</p>
                                            </div>
                                            <strong>৳35,000</strong>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2 flex-column border-bottom pb-3">
                                        <div className="d-flex gap-3 justify-content-between shopping-price-area custom-shopping-price">
                                            <p>Subtotal</p>
                                            <strong>৳1,952.66</strong>
                                        </div>
                                        <div className="d-flex gap-3 justify-content-between shopping-price-area custom-shopping-price">
                                            <p>
                                                Shipping{" "}
                                                <strong> (Free)</strong>
                                            </p>
                                            <div className="d-flex gap-2 align-items-center">
                                                <strong>৳0</strong>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-3 justify-content-between shopping-price-area custom-shopping-price">
                                            <p>discount</p>
                                            <strong>৳66.00</strong>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2 flex-column border-bottom pb-3">
                                        <div className="d-flex gap-3 justify-content-between align-items-center shopping-price-area custom-shopping-price">
                                            <strong>Total</strong>
                                            <p className="total-order-price">
                                                ৳1,952.66
                                            </p>
                                        </div>
                                    </div>
                                    <div className="shipping-section-subtitle">
                                        <h3>Payment</h3>
                                    </div>
                                    <div>
                                        <div className="form-check pb-2">
                                            <input
                                                className="form-check-input shipping-checkbox"
                                                type="checkbox"
                                                id="bank-transfer"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="bank-transfer"
                                            >
                                                Card Payment
                                            </label>
                                        </div>
                                        <div className="form-check pb-2">
                                            <input
                                                className="form-check-input shipping-checkbox"
                                                type="checkbox"
                                                id="paypol"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="paypol"
                                            >
                                                Bkash
                                            </label>
                                        </div>
                                        <div className="form-check pb-2">
                                            <input
                                                className="form-check-input shipping-checkbox"
                                                type="checkbox"
                                                id="cash-on-delivery"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="cash-on-delivery"
                                            >
                                                Cash On Delivery
                                            </label>
                                        </div>
                                    </div>
                                    <div className="place-order-btn">
                                        <button className="add-to-cart-link border border-0 w-100">
                                            PLACE ORDER
                                        </button>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Dolores, tenetur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;
