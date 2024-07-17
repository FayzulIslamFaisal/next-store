"use client";
import { getCustomerAllShippingAddress } from "@/app/services/getShippingCustomerAddresses";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import ShippingAddressModal from "./ShippingAddressModal";

const CustomerDashboardRightSide = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);
    const [defaultAddress, setDefaultAddress] = useState(null);
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading....</p>;
    }
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

    useEffect(() => {
        const handleGetShippingAddress = async () => {
            try {
                const data = await getCustomerAllShippingAddress(session?.accessToken);
                if (data.results) {
                    const defaultAddress = data.results.find(address => address.set_default == 1);
                    setDefaultAddress(defaultAddress);
                }
            } catch (error) {
                console.error("Failed to fetch shipping addresses:", error);
            }
        };
        handleGetShippingAddress();
    }, [session]);
    

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

                        {/* <!------------- if Address -------------> */}

                        {defaultAddress ? (
                            <div className="p-4 ">
                                <div className="d-flex justify-content-between gap-4 border p-3 rounded">
                                    <div>
                                        <p>{defaultAddress?.address}</p>
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
                                                <div
                                                    className="customer-address-action-item" type="button"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal" >
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
                        ) : (
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
                        )}
                        <ShippingAddressModal defaultAddress={defaultAddress} session={session} />
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