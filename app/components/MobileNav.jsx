"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import CustomerLeftSideNavbar from "./customerDashboard/CustomerLeftSideNavbar";
import { useSession } from "next-auth/react";

const MobileNav = () => {
    const [popupSearch, setPopupSearch] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const searchAreaRef = useRef(null);
    const { data: session, status } = useSession();

    const toggleSearchField = () => {
        setPopupSearch(!popupSearch);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const searchPopupClickOutsideHide = (event) => {
            if (
                searchAreaRef.current &&
                !searchAreaRef.current.contains(event.target)
            ) {
                setPopupSearch(false);
            }
        };

        if (typeof window !== "undefined") {
            document.body.addEventListener(
                "click",
                searchPopupClickOutsideHide
            );
            return () => {
                document.body.removeEventListener(
                    "click",
                    searchPopupClickOutsideHide
                );
            };
        }
    }, []);

    if (status === "loading") {
        return <p>Loading....</p>;
    }

    return (
        <div className="row mobile-nav-row-area">
            <div className="col-md-12">
                <div className="mobile-nav-col-area">
                    <div className="mobile-nav-holder d-flex align-items-center justify-content-between">
                        <div className="mobile-nav-item">
                            <div className="mobile-logo">
                                <Link href="/">
                                    <Image
                                        src="/images/logo.svg"
                                        alt="logo"
                                        fill={true}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="mobile-nav-item mobile-nav-item-search d-flex align-items-center">
                            <div
                                className="mobile-nav-location-img"
                                data-bs-toggle="modal"
                                data-bs-target="#district-Modal"
                            >
                                <Image
                                    src="/images/location-footer.svg"
                                    alt="location img"
                                    width={22}
                                    height={21}
                                />
                            </div>
                            <div
                                className="mobile-nav-search-img"
                                onClick={toggleSearchField}
                            >
                                <Image
                                    src="/images/search-icon.svg"
                                    alt="search img"
                                    width={22}
                                    height={21}
                                />
                            </div>
                            {
                                session &&
                                <div
                                    className="fs-2 text-white dashboard-side-navbar-togol"
                                    onClick={toggleSidebar}
                                >
                                    <FaBars />
                                </div>
                            }
                        </div>
                    </div>
                    <div
                        className={`mobile-popup-search-area ${popupSearch ? "active" : ""
                            }`}
                        ref={searchAreaRef}
                    >
                        <form action="#">
                            <div className="mobile-popup-search-item">
                                <input
                                    type="text"
                                    placeholder="Search in Nagadhat..."
                                    className="form-control"
                                />
                                <div className="mobile-popup-search-back-arrow">
                                    <div
                                        className="mobile-popup-search-back"
                                        onClick={toggleSearchField}
                                    >
                                        <Image
                                            src="/images/left-arrow-back.png"
                                            alt="left arrow"
                                            fill={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <aside
                        className={`customer-dashboard-side-navbar-mobile d-xl-none shadow left-100 ${isSidebarOpen ? "start-0" : "left-100"
                            } `}
                    >
                        <div
                            className="fs-2 dashboard-side-navbar-togol-mobile"
                            onClick={toggleSidebar}
                        >
                            <FaXmark />
                        </div>
                        <CustomerLeftSideNavbar authSessionData={session} />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
