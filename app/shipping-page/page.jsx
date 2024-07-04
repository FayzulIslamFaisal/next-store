"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getCustomerAllShippingAddress } from "../services/getShippingCustomerAddresses";

const ShippingPage = () => {
    const [customerAddress, setCustomerAddress] = useState([]);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        district: "",
        city: "",
        address: "",
        note: "",
        setDefault: false,
    });

    const { status, data: session } = useSession();
    const [auth, setAuth] = useState(session?.user);
    console.log("=>>> get login status", status);
    console.log("=>>> get login session", session);
    console.log("auth", auth);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };
    const handleAddDeliveryAddress = async () => {
        console.log(formData);
        const response = await fetch(
            "https://v3.nagadhat.com/api/add-shipping-address",
            {
                method: "POST",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${session?.accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    full_name: formData.fullName,
                    phone: formData.phone,
                    district_id: formData.district,
                    city: formData.city,
                    address: formData.address,
                    note: formData.note,
                    set_default: formData.setDefault ? 1 : 0,
                }),
            }
        );

        if (response.ok) {
            console.log("Address added successfully");
            // Handle success (e.g., close modal, show success message)
        } else {
            console.log("Failed to add address");
            // Handle error
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCustomerAllShippingAddress(
                session?.accessToken
            );
            setCustomerAddress(data.results);
        };

        fetchData();
    }, [session]);

    console.log("customerDefaultAddress", customerAddress);

    return (
        <section className="shipping-section-area nh-new-shipping-wrapper">
            <div className="container">
                <div className="row gy-5 gy-lg-0 gx-0 gx-lg-5">
                    <div className="col-lg-8">
                        {customerAddress?.map(
                            (address, index) =>
                                address.set_default == 1 && (
                                    <div
                                        key={index}
                                        className="row nhn-shipping-deliver-detail-area"
                                    >
                                        <div className="col-md-12">
                                            <div className="nhn-shipping-deliver-detail rounded-2 flex-column d-flex gap-2">
                                                <div className="nhn-shipping-deliver-title">
                                                    <p>
                                                        Deliver to:{" "}
                                                        {address?.full_name}
                                                    </p>
                                                </div>
                                                <div className="nhn-shipping-deliver-detail-info">
                                                    <p>
                                                        <span className="text-capitalize">
                                                            Mobile
                                                        </span>{" "}
                                                        <small>
                                                            {address?.phone}
                                                        </small>{" "}
                                                        | {address?.address}
                                                        <button
                                                            type="button"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#change-nhn-shipping-address"
                                                        >
                                                            Change
                                                        </button>
                                                    </p>
                                                </div>
                                                <div
                                                    className="modal fade change-nhn-shipping-address-modal"
                                                    id="change-nhn-shipping-address"
                                                    tabIndex="-1"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <p className="modal-title">
                                                                    My delivery
                                                                    Address
                                                                </p>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                ></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="row g-2">
                                                                    <div className="col-md-6 col-sm-12">
                                                                        <div className="shipping-delivery-address-radiobox ">
                                                                            <input
                                                                                id="radio1"
                                                                                type="radio"
                                                                                name="license-radios"
                                                                                className="shipping-delivery-address-radio"
                                                                            />
                                                                            <label htmlFor="radio1">
                                                                                <span className="license_type_circle">
                                                                                    {" "}
                                                                                </span>
                                                                                <div className="shipping-delivery-radio-info d-flex flex-column gap-2">
                                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                                        <p>
                                                                                            Jonas
                                                                                            Schmedtmann
                                                                                        </p>
                                                                                        <button
                                                                                            className="text-uppercase"
                                                                                            data-bs-toggle="modal"
                                                                                            data-bs-target="#addnewdeliveryaddress"
                                                                                        >
                                                                                            Edit
                                                                                        </button>
                                                                                    </div>
                                                                                    <span>
                                                                                        01789654236
                                                                                    </span>
                                                                                    <p>
                                                                                        Dhaka,
                                                                                        Dhaka
                                                                                        -
                                                                                        North,
                                                                                        Kallyanpur,
                                                                                        House
                                                                                        272
                                                                                        3
                                                                                        Flat
                                                                                        H2
                                                                                        West
                                                                                        Agargaon,
                                                                                        kallyanpur
                                                                                        bus
                                                                                        stand
                                                                                    </p>
                                                                                    <div className="shipping-delivery-radio-info-tag d-flex align-items-center gap-2">
                                                                                        <span className="text-capitalize">
                                                                                            mobile
                                                                                        </span>
                                                                                        <span>
                                                                                            default
                                                                                            delivery
                                                                                            address
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-12">
                                                                        <div className="shipping-delivery-address-radiobox ">
                                                                            <input
                                                                                id="radio2"
                                                                                type="radio"
                                                                                name="license-radios"
                                                                                className="shipping-delivery-address-radio"
                                                                            />
                                                                            <label htmlFor="radio2">
                                                                                <span className="license_type_circle">
                                                                                    {" "}
                                                                                </span>
                                                                                <div className="shipping-delivery-radio-info d-flex flex-column gap-2">
                                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                                        <p>
                                                                                            Jonas
                                                                                            Schmedtmann
                                                                                        </p>
                                                                                        <button
                                                                                            className="text-uppercase"
                                                                                            data-bs-toggle="modal"
                                                                                            data-bs-target="#addnewdeliveryaddress"
                                                                                        >
                                                                                            Edit
                                                                                        </button>
                                                                                    </div>
                                                                                    <span>
                                                                                        01789654236
                                                                                    </span>
                                                                                    <p>
                                                                                        Dhaka,
                                                                                        Dhaka
                                                                                        -
                                                                                        North,
                                                                                        Kallyanpur,
                                                                                        House
                                                                                        272
                                                                                        3
                                                                                        Flat
                                                                                        H2
                                                                                        West
                                                                                        Agargaon,
                                                                                        kallyanpur
                                                                                        bus
                                                                                        stand
                                                                                    </p>
                                                                                    <div className="shipping-delivery-radio-info-tag d-flex align-items-center gap-2">
                                                                                        <span className="text-capitalize">
                                                                                            mobile
                                                                                        </span>
                                                                                        <span>
                                                                                            default
                                                                                            delivery
                                                                                            address
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer justify-content-between">
                                                                <div className="">
                                                                    <button
                                                                        type="button"
                                                                        className="btn d-flex align-items-center justify-content-center gap-2"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#addnewdeliveryaddress"
                                                                    >
                                                                        <div className="new-nh-add-address-btn">
                                                                            <Image
                                                                                fill={
                                                                                    true
                                                                                }
                                                                                src="/images/nh-shipping-plus-img.png"
                                                                                alt="shipping-plus-img"
                                                                            />
                                                                        </div>
                                                                        <span className="text-capitalize">
                                                                            add
                                                                            new
                                                                            delivery
                                                                            address
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    className="btn add-to-cart-link"
                                                                >
                                                                    Confirm
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="nhn-shipping-deliver-pic-point rounded-3">
                                                    <p>
                                                        Collect your parcel from
                                                        the nearest Nagadhat
                                                        Pick-up Point with a
                                                        reduced shipping fee 20
                                                        suggested collection
                                                        point(s) nearby Check{" "}
                                                        <button
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#shipping-pick-point-modal"
                                                        >
                                                            Pick-up Points
                                                        </button>
                                                    </p>
                                                </div>

                                                <div
                                                    className="modal fade shipping-pick-point-modal change-nhn-shipping-address-modal "
                                                    id="shipping-pick-point-modal"
                                                    tabIndex="-1"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <p className="modal-title">
                                                                    Pick-up
                                                                    Points
                                                                </p>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                ></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="row g-2">
                                                                    <div className="col-md-6 col-sm-12">
                                                                        <div className="shipping-delivery-address-radiobox ">
                                                                            <input
                                                                                id="radio3"
                                                                                type="radio"
                                                                                name="license-radios"
                                                                                className="shipping-delivery-address-radio"
                                                                            />
                                                                            <label htmlFor="radio3">
                                                                                <span className="license_type_circle">
                                                                                    {" "}
                                                                                </span>
                                                                                <div className="shipping-delivery-radio-info d-flex flex-column gap-2">
                                                                                    <div className="d-flex justify-content-between flex-column">
                                                                                        <p>
                                                                                            Nagadhat
                                                                                            E-courier
                                                                                            kallyanpur
                                                                                            Collection
                                                                                            Point-
                                                                                        </p>
                                                                                        <p>
                                                                                            09:30:00-17:00:00
                                                                                        </p>
                                                                                    </div>
                                                                                    <p>
                                                                                        Nagadhat
                                                                                        E-courier
                                                                                        kallyanpur
                                                                                        Collection
                                                                                        Point,
                                                                                        144,{" "}
                                                                                        <br />{" "}
                                                                                        Muktobangla
                                                                                        Shopping
                                                                                        Complex,
                                                                                        kallyanpur,
                                                                                        Dhaka,
                                                                                        kallyanpur,Dhaka
                                                                                        -
                                                                                        North,
                                                                                        Dhaka{" "}
                                                                                    </p>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-12">
                                                                        <div className="shipping-delivery-address-radiobox ">
                                                                            <input
                                                                                id="radio4"
                                                                                type="radio"
                                                                                name="license-radios"
                                                                                className="shipping-delivery-address-radio"
                                                                            />
                                                                            <label htmlFor="radio4">
                                                                                <span className="license_type_circle">
                                                                                    {" "}
                                                                                </span>
                                                                                <div className="shipping-delivery-radio-info d-flex flex-column gap-2">
                                                                                    <div className="d-flex justify-content-between flex-column">
                                                                                        <p>
                                                                                            Nagadhat
                                                                                            E-courier
                                                                                            kallyanpur
                                                                                            Collection
                                                                                            Point-
                                                                                        </p>
                                                                                        <p>
                                                                                            09:30:00-17:00:00
                                                                                        </p>
                                                                                    </div>
                                                                                    <p>
                                                                                        Nagadhat
                                                                                        E-courier
                                                                                        kallyanpur
                                                                                        Collection
                                                                                        Point,
                                                                                        144,{" "}
                                                                                        <br />{" "}
                                                                                        Muktobangla
                                                                                        Shopping
                                                                                        Complex,
                                                                                        kallyanpur,
                                                                                        Dhaka,
                                                                                        kallyanpur,Dhaka
                                                                                        -
                                                                                        North,
                                                                                        Dhaka{" "}
                                                                                    </p>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-12">
                                                                        <div className="shipping-delivery-address-radiobox ">
                                                                            <input
                                                                                id="radio5"
                                                                                type="radio"
                                                                                name="license-radios"
                                                                                className="shipping-delivery-address-radio"
                                                                            />
                                                                            <label htmlFor="radio5">
                                                                                <span className="license_type_circle">
                                                                                    {" "}
                                                                                </span>
                                                                                <div className="shipping-delivery-radio-info d-flex flex-column gap-2">
                                                                                    <div className="d-flex justify-content-between flex-column">
                                                                                        <p>
                                                                                            Nagadhat
                                                                                            E-courier
                                                                                            kallyanpur
                                                                                            Collection
                                                                                            Point-
                                                                                        </p>
                                                                                        <p>
                                                                                            1810099616{" "}
                                                                                        </p>
                                                                                        <p>
                                                                                            (+880)
                                                                                            1810099616
                                                                                        </p>
                                                                                        <p>
                                                                                            09:30:00-20:00:00
                                                                                        </p>
                                                                                    </div>
                                                                                    <p>
                                                                                        Nagadhat
                                                                                        E-courier
                                                                                        kallyanpur
                                                                                        Collection
                                                                                        Point,
                                                                                        144,{" "}
                                                                                        <br />{" "}
                                                                                        Muktobangla
                                                                                        Shopping
                                                                                        Complex,
                                                                                        kallyanpur,
                                                                                        Dhaka,
                                                                                        kallyanpur,Dhaka
                                                                                        -
                                                                                        North,
                                                                                        Dhaka{" "}
                                                                                    </p>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer justify-content-center">
                                                                <button
                                                                    type="button"
                                                                    className="btn add-to-cart-link w-100"
                                                                >
                                                                    Confirm
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="nhn-shipping-deliver-edit-mail">
                                                    <p>
                                                        Email to
                                                        jonasschmedtmann@gmail.com{" "}
                                                        <button
                                                            type="button"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#edit-mail-shipping-modal"
                                                        >
                                                            Edit
                                                        </button>
                                                    </p>
                                                </div>

                                                <div
                                                    className="modal fade nhn-shipping-deliver-edit-mail-modal"
                                                    id="edit-mail-shipping-modal"
                                                    tabIndex="-1"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <p className="modal-title">
                                                                    Email
                                                                </p>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                ></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <form action="#">
                                                                    <div className="shipping-deliver-edit-mail-input">
                                                                        <label
                                                                            htmlFor="edit-email"
                                                                            className="form-label"
                                                                        >
                                                                            Email
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="edit-email"
                                                                            defaultValue="jonasschmedtmann@gmail.com"
                                                                            className="form-control"
                                                                            id="edit-email"
                                                                        />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="modal-footer justify-content-center">
                                                                <button
                                                                    type="button"
                                                                    className="btn add-to-cart-link w-100"
                                                                >
                                                                    Confirm
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                        )}

                        {customerAddress?.length == 0 && (
                            <div className="row new-nh-shipping-row">
                                <div className="col-12">
                                    <div className="new-nh-shipping-area d-flex justify-content-center rounded-2">
                                        <button
                                            type="button"
                                            className="btn d-flex align-items-center justify-content-center gap-2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#addnewdeliveryaddress"
                                        >
                                            <div className="new-nh-add-address-btn">
                                                <Image
                                                    fill={true}
                                                    src="/images/nh-shipping-plus-img.png"
                                                    alt="shipping-plus-img"
                                                />
                                            </div>
                                            <span className="text-capitalize">
                                                add new delivery address
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div
                            className="modal fade new-nh-delivery-address-modal"
                            id="addnewdeliveryaddress"
                            tabIndex="-1"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="text-capitalize">
                                            add new delivery address
                                        </p>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="shaipping-from-area">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6 pb-3">
                                                        <label
                                                            htmlFor="full-name"
                                                            className="form-label"
                                                        >
                                                            Full Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="fullName"
                                                            className="form-control"
                                                            id="full-name"
                                                            value={
                                                                formData.fullName
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
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
                                                            name="phone"
                                                            className="form-control"
                                                            id="mobile"
                                                            value={
                                                                formData.phone
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
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
                                                            value={
                                                                formData.district
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        >
                                                            <option value="">
                                                                Select District
                                                            </option>
                                                            <option value="1">
                                                                Barisal
                                                            </option>
                                                            <option value="2">
                                                                Chittagong
                                                            </option>
                                                            <option value="3">
                                                                Dhaka
                                                            </option>
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
                                                            value={
                                                                formData.city
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        >
                                                            <option value="">
                                                                Select City
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
                                                            value={
                                                                formData.address
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
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
                                                            value={
                                                                formData.note
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        ></textarea>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input shipping-checkbox"
                                                                type="checkbox"
                                                                id="address-book"
                                                                name="setDefault"
                                                                checked={
                                                                    formData.setDefault
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                            <label
                                                                className="form-check-label text-capitalize"
                                                                htmlFor="address-book"
                                                            >
                                                                Default delivery
                                                                address
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn add-to-cart-link"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            onClick={handleAddDeliveryAddress}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row new-nh-shipping-product-row">
                            <div className="col-12">
                                <div className="product-cart-details-continer table-responsive rounded-2">
                                    <table className="table align-middle">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="product-cart-product-img">
                                                        <Image
                                                            fill={true}
                                                            className="img-fluid"
                                                            src="/images/primaSatgebabyFood.jpg"
                                                            alt="black-friday"
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h2 className="product-cart-text">
                                                        LED Monitor With High
                                                        Quality In The World
                                                    </h2>
                                                    <strong className="product-cart-price">
                                                        <span>
                                                            Mediker, Scent:
                                                            fresh
                                                        </span>
                                                    </strong>
                                                </td>
                                                <td>
                                                    <p className="text-capitalize new-nh-product-qty">
                                                        qty: 1
                                                    </p>
                                                </td>
                                                <td>
                                                    <div className="d-flex flex-column gap-1 align-items-center justify-content-between new-nh-product-price">
                                                        <p>৳ 500</p>
                                                        <del className="rounded-1">
                                                            ৳ 320
                                                        </del>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="product-cart-product-img">
                                                        <Image
                                                            fill={true}
                                                            className="img-fluid"
                                                            src="/images/primaSatgebabyFood.jpg"
                                                            alt="black-friday"
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h2 className="product-cart-text">
                                                        LED Monitor With High
                                                        Quality In The World
                                                    </h2>
                                                    <strong className="product-cart-price">
                                                        <span>
                                                            Mediker, Scent:
                                                            fresh
                                                        </span>
                                                    </strong>
                                                </td>
                                                <td>
                                                    <p className="text-capitalize new-nh-product-qty">
                                                        qty: 1
                                                    </p>
                                                </td>
                                                <td>
                                                    <div className="d-flex flex-column gap-1 align-items-center justify-content-between new-nh-product-price">
                                                        <p>৳ 500</p>
                                                        <del className="rounded-1">
                                                            ৳ 320
                                                        </del>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row order-section">
                            <div className="col-12">
                                <div className="order-info-area">
                                    <div className="shipping-section-subtitle">
                                        <h3>Shopping Summary</h3>
                                    </div>
                                    <div className="d-flex gap-3 flex-column border-bottom pb-3">
                                        <div className="d-flex gap-3 justify-content-between shopping-price-area custom-shopping-price">
                                            <div className="d-flex gap-3">
                                                <strong>1x</strong>
                                                <p>
                                                    LED Monitor With High
                                                    Quality In The World
                                                </p>
                                            </div>
                                            <div className="shopping-price-culmn gap-1 flex-shrink-0 d-flex flex-column align-items-center justify-content-center">
                                                <strong>৳ 35,000</strong>
                                                <del className="rounded-1">
                                                    ৳ 36,000
                                                </del>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-3 justify-content-between shopping-price-area custom-shopping-price">
                                            <div className="d-flex gap-3">
                                                <strong>1x</strong>
                                                <p>Magic Pen for iPad</p>
                                            </div>
                                            <div className="shopping-price-culmn gap-1 flex-shrink-0 d-flex flex-column align-items-center justify-content-center">
                                                <strong>৳ 2800</strong>
                                                <del className="rounded-1">
                                                    ৳ 3000
                                                </del>
                                            </div>
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

export default ShippingPage;
