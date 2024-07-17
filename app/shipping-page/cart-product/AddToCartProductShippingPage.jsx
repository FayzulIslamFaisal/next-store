"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getCustomerAllShippingAddress } from "../../services/getShippingCustomerAddresses";
import { fetchCartProducts } from "../../services/getShowAddToCartProduct";
import { NagadhatPublicUrl } from "../../utils";
import { placeOrder } from "../../services/postPlaceOrder";
import Link from "next/link";
import { postShippingAddress } from "../../services/postShippingAddress";
import { updateShippingAddress } from "../../services/updateShippingAddress";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import { pickUpPontes } from "../../services/pickupPoint";
import { getDistrictForShipping } from "../../services/getDistrictForShipping";
import { useDispatch, useSelector } from "react-redux";
import { setAddToCart } from "../../store/cartSlice";
const AddToCartProductShippingPage = () => {
    const { status, data: session } = useSession();
    const [customerAddress, setCustomerAddress] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        district: "",
        city: "",
        address: "",
        note: "",
        setDefault: false,
    });
    const [editedAddressId, setEditAddressId] = useState(null);
    const [cartProduct, setCartProduct] = useState([]);
    const [auth, setAuth] = useState(session?.user);
    const [validationErrors, setValidationErrors] = useState({});
    const [userEmail, setUserEmail] = useState("");
    const [tempEmail, setTempEmail] = useState("");
    const [mailError, setMailError] = useState("");
    const [pickUpPoint, setPickUpPoint] = useState([]);
    const [pickUpId, setPickUpPointId] = useState(null);
    const [pickUpIdForOrder, setPickUpIdForOrder] = useState(null);
    const [shippingPrice, setShippingPrice] = useState("");
    const [districtsData, setDistrictsData] = useState([]);
    let price;
    let totalPrice = 0;
    let discountPrice;
    let totalDiscountPrice = 0;
    console.log("=>>> get login status", status);
    console.log("=>>> get login session", session);
    console.log("auth", auth);
    const validate = () => {
        const errors = {};
        if (!formData.fullName) errors.fullName = "Full Name is required";
        if (!formData.phone) errors.phone = "Phone number is required";
        if (!formData.district) errors.district = "District is required";
        if (!formData.city) errors.city = "City is required";
        if (!formData.address) errors.address = "Address is required";
        return errors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
        setValidationErrors({
            ...validationErrors,
            [name]: "",
        });
    };

    const handleAddDeliveryAddress = async () => {
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            setIsOpen(false);
            return;
        }
        const addAddressInfo = {
            full_name: formData.fullName,
            phone: formData.phone,
            district_id: formData.district,
            city: formData.city,
            address: formData.address,
            note: formData.note,
            set_default: formData.setDefault ? 1 : 0,
        };
        await postShippingAddress(addAddressInfo, session?.accessToken);
        const data = await getCustomerAllShippingAddress(session?.accessToken);
        setCustomerAddress(data.results);
        const modalElement = document.getElementById("addnewdeliveryaddress");
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
        setFormData({
            fullName: "",
            phone: "",
            district: "",
            city: "",
            address: "",
            note: "",
            setDefault: false,
        });
    };
    const afterClickingEidButton = (id) => {
        setEditAddressId(id);
        const findDefaultAddress = customerAddress?.find(
            (address, index) => address.id == id
        );
        setFormData({
            fullName: findDefaultAddress?.full_name,
            phone: findDefaultAddress?.phone,
            district: findDefaultAddress?.district?.id,
            city: findDefaultAddress?.city?.id,
            address: findDefaultAddress?.address,
            note: findDefaultAddress?.note,
            setDefault: true,
        });
    };

    const handleUpdateDeliveryAddress = async () => {
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            setIsOpen(false);
            return;
        }
        const addAddressInfo = {
            address_id: editedAddressId,
            full_name: formData.fullName,
            phone: formData.phone,
            district_id: formData.district,
            city: formData.city,
            address: formData.address,
            note: formData.note,
            set_default: formData.setDefault ? 1 : 0,
        };

        await updateShippingAddress(addAddressInfo, session?.accessToken);
        const data = await getCustomerAllShippingAddress(session?.accessToken);
        setCustomerAddress(data.results);
        const modalElement = document.getElementById("updatedeliveryaddress");
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
        setIsOpen(true);
        setFormData({
            fullName: "",
            phone: "",
            district: "",
            city: "",
            address: "",
            note: "",
            setDefault: false,
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            if (session) {
                try {
                    const data = await getCustomerAllShippingAddress(
                        session?.accessToken
                    );
                    setCustomerAddress(data.results);
                    const cartProduct = await fetchCartProducts(
                        session?.accessToken
                    );
                    setCartProduct(cartProduct?.data);
                    setShippingPrice(cartProduct?.shipping_charge);
                    const pickUpPoint = await pickUpPontes(3);
                    console.log(pickUpPoint);
                    setPickUpPoint(pickUpPoint);

                    const totalDistrict = await getDistrictForShipping();
                    console.log(
                        totalDistrict?.results?.districts,
                        "totalDistrict================="
                    );

                    setDistrictsData(totalDistrict?.results?.districts);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };
        fetchData();
    }, [session]);

    const handlePlaceOrder = async () => {
        console.log(userEmail);
        const cartItems = cartProduct?.map((item) => ({
            product_id: item.product_id,
            product_quantity: item.quantity,
            product_unit_price: item.price,
            product_variation_id: item.product_variation_id,
            product_shipping_charge: "", // Replace with actual shipping charge if applicable
            product_discount_type: item.discount_type,
            product_discount_amount: item.discountPrice,
            vendor_id: "", // Replace with actual vendor ID if applicable
            thumbnail: item.product_thumbnail,
        }));
        const payload = {
            outlet_id: 3,
            location_id: 47,
            shipping_address_id: 1, // Replace with actual shipping address ID if applicable
            delivery_note: "",
            payment_type: "cash_on_delivery",
            shipping_email: userEmail,
            place_order_with: "add to cart",
            outlet_pickup_point_id: pickUpIdForOrder,
            cart_items: cartItems,
        };
        await placeOrder(payload, session?.accessToken);
        const cartProductsItem = await fetchCartProducts(session?.accessToken);
        setCartProduct(cartProductsItem?.data);
        dispatch(
            setAddToCart({
                hasSession: true,
                length: cartProductsItem?.data?.length,
            })
        );
    };

    const handleSetDefaultAddress = (id) => {
        const findDefaultAddress = customerAddress?.find(
            (address, index) => address.id == id
        );
        setFormData({
            fullName: findDefaultAddress?.full_name,
            phone: findDefaultAddress?.phone,
            district: findDefaultAddress?.district?.id,
            city: findDefaultAddress?.city?.id,
            address: findDefaultAddress?.address,
            note: findDefaultAddress?.note,
            setDefault: true,
        });
        console.log("formData", formData);
    };

    const handleChangeDefaultAddress = async (address_id) => {
        console.log("hello world");
        const addAddressInfo = {
            address_id: address_id,
            full_name: formData.fullName,
            phone: formData.phone,
            district_id: formData.district,
            city: formData.city,
            address: formData.address,
            note: formData.note,
            set_default: formData.setDefault ? 1 : 0,
        };

        await updateShippingAddress(addAddressInfo, session?.accessToken);
        const data = await getCustomerAllShippingAddress(session?.accessToken);
        setCustomerAddress(data.results);
        const cartProduct = await fetchCartProducts(session?.accessToken);
        setCartProduct(cartProduct?.data);
        setShippingPrice(cartProduct?.shipping_charge);

        const modalElement = document.getElementById(
            "change-nhn-shipping-address"
        );
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
    };

    const handlePickUpPoint = () => {
        setPickUpIdForOrder(pickUpId);
        const modalElement = document.getElementById(
            "shipping-pick-point-modal"
        );
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedEmail = localStorage.getItem("userEmail");
            if (savedEmail) {
                setUserEmail(savedEmail);
            } else if (session?.user?.email) {
                setUserEmail(session.user.email);
            }
        }
    }, [session]);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setTempEmail(email);

        if (!validateEmail(email)) {
            setMailError("Invalid email address.");
        } else {
            setMailError("");
        }
    };

    const handleSaveEmail = () => {
        if (!mailError && tempEmail) {
            setUserEmail(tempEmail);
            localStorage.setItem("userEmail", tempEmail);
            // alert("Email updated successfully!");
            const modalElement = document.getElementById(
                "edit-mail-shipping-modal"
            );
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();
        }
    };

    return (
        <PrivateRoute>
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
                                                                        My
                                                                        delivery
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
                                                                        {customerAddress?.map(
                                                                            (
                                                                                allAddress,
                                                                                index
                                                                            ) => (
                                                                                <div className="col-md-6 col-sm-12">
                                                                                    <div className="shipping-delivery-address-radiobox ">
                                                                                        <input
                                                                                            id={`radio${index}`}
                                                                                            type="radio"
                                                                                            name="license-radios"
                                                                                            className="shipping-delivery-address-radio"
                                                                                            defaultChecked={
                                                                                                allAddress.set_default ===
                                                                                                1
                                                                                            }
                                                                                            onChange={(
                                                                                                e
                                                                                            ) => {
                                                                                                handleSetDefaultAddress(
                                                                                                    allAddress?.id
                                                                                                );
                                                                                            }}
                                                                                        />
                                                                                        <label
                                                                                            htmlFor={`radio${index}`}
                                                                                        >
                                                                                            <span className="license_type_circle">
                                                                                                {" "}
                                                                                            </span>
                                                                                            <div className="shipping-delivery-radio-info d-flex flex-column gap-2">
                                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                                    <p>
                                                                                                        {
                                                                                                            allAddress?.full_name
                                                                                                        }
                                                                                                    </p>
                                                                                                    <button
                                                                                                        className="text-uppercase"
                                                                                                        data-bs-toggle="modal"
                                                                                                        data-bs-target="#updatedeliveryaddress"
                                                                                                        onClick={(
                                                                                                            e
                                                                                                        ) => {
                                                                                                            afterClickingEidButton(
                                                                                                                allAddress?.id
                                                                                                            );
                                                                                                        }}
                                                                                                    >
                                                                                                        Edit
                                                                                                    </button>
                                                                                                </div>
                                                                                                <span>
                                                                                                    {
                                                                                                        allAddress?.phone
                                                                                                    }
                                                                                                </span>
                                                                                                <p>
                                                                                                    {
                                                                                                        allAddress?.address
                                                                                                    }
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
                                                                            )
                                                                        )}
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
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            handleChangeDefaultAddress(
                                                                                address?.id
                                                                            );
                                                                        }}
                                                                    >
                                                                        Confirm
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="nhn-shipping-deliver-pic-point rounded-3">
                                                        <p>
                                                            Collect your parcel
                                                            from the nearest
                                                            Nagadhat Pick-up
                                                            Point with a reduced
                                                            shipping fee 20
                                                            suggested collection
                                                            point(s) nearby
                                                            Check{" "}
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
                                                                        {pickUpPoint?.map(
                                                                            (
                                                                                item,
                                                                                id
                                                                            ) => (
                                                                                <div
                                                                                    className="col-md-6 col-sm-12"
                                                                                    onClick={(
                                                                                        e
                                                                                    ) => {
                                                                                        setPickUpPointId(
                                                                                            item?.id
                                                                                        );
                                                                                    }}
                                                                                >
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
                                                                                                        {
                                                                                                            item?.name
                                                                                                        }
                                                                                                    </p>
                                                                                                    <p>
                                                                                                        {
                                                                                                            item?.open
                                                                                                        }

                                                                                                        -{" "}
                                                                                                        {
                                                                                                            item?.close
                                                                                                        }
                                                                                                    </p>
                                                                                                </div>
                                                                                                <p>
                                                                                                    {
                                                                                                        item?.address
                                                                                                    }
                                                                                                </p>
                                                                                            </div>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="modal-footer justify-content-center">
                                                                    <button
                                                                        type="button"
                                                                        className="btn add-to-cart-link w-100"
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            handlePickUpPoint();
                                                                        }}
                                                                    >
                                                                        Confirm
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="nhn-shipping-deliver-edit-mail">
                                                        <p>
                                                            Email to:{" "}
                                                            {userEmail}
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
                                                                                value={
                                                                                    tempEmail
                                                                                }
                                                                                className="form-control"
                                                                                id="edit-email"
                                                                                onChange={
                                                                                    handleEmailChange
                                                                                }
                                                                            />
                                                                            {mailError && (
                                                                                <p
                                                                                    style={{
                                                                                        color: "red",
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        mailError
                                                                                    }
                                                                                </p>
                                                                            )}
                                                                        </div>

                                                                        <div className="modal-footer justify-content-center">
                                                                            <button
                                                                                type="button"
                                                                                className="btn add-to-cart-link w-100"
                                                                                onClick={
                                                                                    handleSaveEmail
                                                                                }
                                                                            >
                                                                                Confirm
                                                                            </button>
                                                                        </div>
                                                                    </form>
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
                                id="updatedeliveryaddress"
                                tabIndex="-1"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="text-capitalize">
                                                Edit delivery address
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
                                                            {validationErrors.fullName && (
                                                                <span className="text-danger">
                                                                    {
                                                                        validationErrors.fullName
                                                                    }
                                                                </span>
                                                            )}
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
                                                            {validationErrors.phone && (
                                                                <span className="text-danger">
                                                                    {
                                                                        validationErrors.phone
                                                                    }
                                                                </span>
                                                            )}
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
                                                                    Select
                                                                    District
                                                                </option>
                                                                {districtsData?.map(
                                                                    (
                                                                        district,
                                                                        index
                                                                    ) => (
                                                                        <option
                                                                            key={
                                                                                index
                                                                            }
                                                                            value={
                                                                                district?.id
                                                                            }
                                                                        >
                                                                            {
                                                                                district?.name
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>
                                                            {validationErrors.district && (
                                                                <span className="text-danger">
                                                                    {
                                                                        validationErrors.district
                                                                    }
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="col-md-6 pb-3">
                                                            <label
                                                                htmlFor="city"
                                                                className="form-label"
                                                            >
                                                                City
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="city"
                                                                id="city"
                                                                value={
                                                                    formData.city
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />

                                                            {validationErrors.city && (
                                                                <span className="text-danger">
                                                                    {
                                                                        validationErrors.city
                                                                    }
                                                                </span>
                                                            )}
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
                                                            {validationErrors.address && (
                                                                <span className="text-danger">
                                                                    {
                                                                        validationErrors.address
                                                                    }
                                                                </span>
                                                            )}
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
                                                                    Default
                                                                    delivery
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
                                                data-bs-dismiss={
                                                    isOpen ? "modal" : " "
                                                }
                                                onClick={
                                                    handleUpdateDeliveryAddress
                                                }
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* {add shipping address modal} */}
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
                                                            {validationErrors.fullName && (
                                                                <span className="text-danger">
                                                                    {
                                                                        validationErrors.fullName
                                                                    }
                                                                </span>
                                                            )}
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
                                                            {validationErrors.phone && (
                                                                <span className="text-danger">
                                                                    {
                                                                        validationErrors.phone
                                                                    }
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="col-md-6 pb-3">
                                                            <label
                                                                htmlFor="district2"
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
                                                                id="district2"
                                                                value={
                                                                    formData.district
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            >
                                                                <option value="">
                                                                    Select
                                                                    District
                                                                </option>
                                                                {districtsData?.map(
                                                                    (
                                                                        district,
                                                                        index
                                                                    ) => (
                                                                        <option
                                                                            key={
                                                                                index
                                                                            }
                                                                            value={
                                                                                district?.id
                                                                            }
                                                                        >
                                                                            {
                                                                                district?.name
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>
                                                            {validationErrors.district && (
                                                                <span className="text-danger">
                                                                    {
                                                                        validationErrors.district
                                                                    }
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="col-md-6 pb-3">
                                                            <label
                                                                htmlFor="city"
                                                                className="form-label"
                                                            >
                                                                City
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="city"
                                                                id="city"
                                                                value={
                                                                    formData.city
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />

                                                            {validationErrors.city && (
                                                                <span className="text-danger">
                                                                    {
                                                                        validationErrors.city
                                                                    }
                                                                </span>
                                                            )}
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
                                                            {validationErrors.address && (
                                                                <span className="text-danger">
                                                                    {
                                                                        validationErrors.address
                                                                    }
                                                                </span>
                                                            )}
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
                                                                    Default
                                                                    delivery
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
                                                data-bs-dismiss={
                                                    isOpen ? "modal" : " "
                                                }
                                                onClick={
                                                    handleAddDeliveryAddress
                                                }
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* shows add to card product */}
                            <div className="row new-nh-shipping-product-row">
                                {cartProduct?.length > 0 && (
                                    <div className="col-12">
                                        <div className="product-cart-details-continer table-responsive rounded-2">
                                            <table className="table align-middle">
                                                <tbody>
                                                    {cartProduct?.map(
                                                        (item, index) => {
                                                            price =
                                                                item.price *
                                                                item.quantity;
                                                            discountPrice =
                                                                item.discountPrice *
                                                                item.quantity;
                                                            totalPrice += price;
                                                            totalDiscountPrice +=
                                                                discountPrice;

                                                            return (
                                                                <tr key={index}>
                                                                    <td>
                                                                        <div className="product-cart-product-img">
                                                                            <Image
                                                                                fill={
                                                                                    true
                                                                                }
                                                                                className="img-fluid"
                                                                                src={`${NagadhatPublicUrl}/${item?.product_thumbnail}`}
                                                                                alt="black-friday"
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="product-cart-text">
                                                                            {
                                                                                item?.product_name
                                                                            }
                                                                        </h2>
                                                                        <strong className="ml-3">
                                                                            {item?.selectedVariants &&
                                                                                item.selectedVariants
                                                                                    .slice(
                                                                                        0,
                                                                                        2
                                                                                    )
                                                                                    .map(
                                                                                        (
                                                                                            variant,
                                                                                            inx
                                                                                        ) => {
                                                                                            const [
                                                                                                key,
                                                                                                value,
                                                                                            ] =
                                                                                                Object.entries(
                                                                                                    variant
                                                                                                )[0];
                                                                                            const keyDisplay =
                                                                                                key.split(
                                                                                                    "_"
                                                                                                )[1];

                                                                                            return (
                                                                                                <React.Fragment
                                                                                                    key={
                                                                                                        inx
                                                                                                    }
                                                                                                >
                                                                                                    <span>
                                                                                                        {
                                                                                                            keyDisplay
                                                                                                        }
                                                                                                    </span>
                                                                                                    <span className="product-details-variant-item ms-3 me-2">
                                                                                                        <label>
                                                                                                            {
                                                                                                                value
                                                                                                            }
                                                                                                        </label>
                                                                                                    </span>
                                                                                                </React.Fragment>
                                                                                            );
                                                                                        }
                                                                                    )}
                                                                        </strong>
                                                                    </td>
                                                                    <td>
                                                                        <p className="text-capitalize new-nh-product-qty">
                                                                            qty:{" "}
                                                                            {
                                                                                item?.quantity
                                                                            }
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <div className="d-flex flex-column gap-1 align-items-center justify-content-between new-nh-product-price">
                                                                            <p>
                                                                                ৳{" "}
                                                                                {item?.price *
                                                                                    item?.quantity}
                                                                            </p>
                                                                            <del className="rounded-1">
                                                                                ৳
                                                                                {item?.discountPrice *
                                                                                    item?.quantity}
                                                                            </del>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
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
                                                <p>Subtotal</p>
                                                <strong>৳{totalPrice}</strong>
                                            </div>
                                            <div className="d-flex gap-3 justify-content-between shopping-price-area custom-shopping-price">
                                                <p>
                                                    Shipping{" "}
                                                    {/* <strong> (Free)</strong> */}
                                                </p>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <strong>
                                                        ৳{shippingPrice}
                                                    </strong>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-3 justify-content-between shopping-price-area custom-shopping-price">
                                                <p>discount</p>
                                                <strong>
                                                    ৳{totalDiscountPrice}
                                                </strong>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-2 flex-column border-bottom pb-3">
                                            <div className="d-flex gap-3 justify-content-between align-items-center shopping-price-area custom-shopping-price">
                                                <strong>Total</strong>
                                                <p className="total-order-price">
                                                    ৳{" "}
                                                    {totalPrice +
                                                        parseInt(shippingPrice)}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="place-order-btn">
                                            <Link
                                                href={"/dashboard"}
                                                onClick={handlePlaceOrder}
                                                className="add-to-cart-link border border-0 w-100"
                                            >
                                                PLACE ORDER
                                            </Link>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Dolores, tenetur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PrivateRoute>
    );
};

export default AddToCartProductShippingPage;
