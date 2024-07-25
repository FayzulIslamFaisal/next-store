"use client";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import { toast } from "react-toastify";
import { getCustomerAllShippingAddress } from "@/app/services/getShippingCustomerAddresses";
import { updateShippingAddress } from "@/app/services/updateShippingAddress";
import ShippingAddressModal from "./ShippingAddressModal";

const CustomerDashboardRightSide = () => {
    const [menuStates, setMenuStates] = useState({});
    const menuRefs = useRef([]);
    const [defaultAddress, setDefaultAddress] = useState(null);
    const [customerAddress, setCustomerAddress] = useState([]);
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading....</p>;
    }

    const handleToggleMenu = (index) => {
        setMenuStates(prevStates => ({
            ...prevStates,
            [index]: !prevStates[index],
        }));
    };

    const handleClickOutside = (event) => {
        menuRefs.current.forEach((menuRef, index) => {
            if (menuRef && !menuRef.contains(event.target)) {
                setMenuStates(prevStates => ({
                    ...prevStates,
                    [index]: false,
                }));
            }
        });
    };

    useEffect(() => {
        if (Object.values(menuStates).some(state => state)) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuStates]);

    useEffect(() => {
        const handleGetShippingAddress = async () => {
            try {
                const data = await getCustomerAllShippingAddress(session?.accessToken);
                setCustomerAddress(data.results);
                const defaultAddr = data.results.find(address => address.set_default === 1);
                setDefaultAddress(defaultAddr);
            } catch (error) {
                console.error("Failed to fetch shipping addresses:", error);
            }
        };
        if (session) handleGetShippingAddress();
    }, [session]);

    const handleSetDefaultAddress = async (id) => {
        const addAddressInfo = {
            address_id: id,
            set_default: 1,
        };
        try {
            const response = await updateShippingAddress(addAddressInfo, session?.accessToken);
            if (response) {
                toast(response.message);
                // Optionally refresh addresses or update state here
            }
        } catch (error) {
            console.error("Failed to update shipping address:", error);
            toast(error.message);
        }
    };

    return (
        <div className="col-lg-9 customer-dashboard-section">
            <div className="customer-dashboard-card">
                <div className="customer-dashboard-title-bar">
                    <div>
                        <h1 className="customer-dashboard-title">Dashboard</h1>
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
                            <p className="opacity-50">In Cart</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex gap-3 flex-column flex-md-row">
                <div className="customer-dashboard-card border-0 flex-1">
                    <div className="p-3 border-bottom">
                        <h2 className="mb-0 customer-dashboard-subtitle">Default Shipping Address</h2>
                    </div>
                    {customerAddress?.map((allAddress, index) => (
                        <div className="col-12" key={index}>
                            <div className="shipping-delivery-address-radiobox">
                                <input
                                    id={`radio${index}`}
                                    type="radio"
                                    name="license-radios"
                                    className="shipping-delivery-address-radio opacity-0"
                                    defaultChecked={allAddress.set_default === 1}
                                    onChange={() => handleSetDefaultAddress(allAddress?.id)}
                                />
                                <label htmlFor={`radio${index}`}>
                                    <span className="license_type_circle">{" "}</span>
                                    <div className="shipping-delivery-radio-info d-flex flex-column gap-2">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <p>{allAddress?.full_name}</p>
                                            <div className="customer-address-action-btn">
                                                <div className="p-1 z-3" onClick={() => handleToggleMenu(index)}>
                                                    <FaEllipsisVertical />
                                                </div>
                                                {menuStates[index] && (
                                                    <div ref={el => (menuRefs.current[index] = el)} className="customer-address-action-container">
                                                        <div
                                                            className="customer-address-action-item"
                                                            type="button"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            Edit
                                                        </div>
                                                        <div className="customer-address-action-item">Delete</div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <span>{allAddress?.phone}</span>
                                        <p>{allAddress?.address}</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    ))}
                    {defaultAddress ? (
                        <div className="p-4">
                            <div className="d-flex justify-content-between gap-4 border p-3 rounded">
                                <div>
                                    <p>{defaultAddress?.address}</p>
                                </div>
                                <div className="customer-address-action-btn">
                                    <div onClick={() => handleToggleMenu("default")}>
                                        <FaEllipsisVertical />
                                    </div>
                                    {menuStates["default"] && (
                                        <div ref={el => (menuRefs.current["default"] = el)} className="customer-address-action-container">
                                            <div
                                                className="customer-address-action-item"
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Edit
                                            </div>
                                            <div className="customer-address-action-item">Delete</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-4">
                            <div
                                className="mx-auto"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                <div className="add-new-address-bar">
                                    <FaPlus />
                                    <div className="alpha-7">Add New Address</div>
                                </div>
                            </div>
                        </div>
                    )}
                    <ShippingAddressModal defaultAddress={defaultAddress} session={session} />
                </div>
                <div className="customer-dashboard-card flex-1">
                    <div className="border-bottom p-3">
                        <h2 className="mb-0 customer-dashboard-subtitle">Affiliate Partner</h2>
                    </div>
                    <div
                        className="d-flex align-items-center justify-content-center gap-4 text-center p-4"
                        id="affiliateApply"
                    >
                        <a className="customer-dashboard-affiliate-badge" href="#">
                            <img src="/images/affiliate-badge.gif" className="img-fluid" />
                        </a>
                        <div className="affiliate-status-title">
                            <h4>
                                Status: <span>Active</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDashboardRightSide;
