import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
    const [popupSearch, setPopupSearch] = useState(false);
    const toggleSearchField = () => {
        setPopupSearch(!popupSearch);
    };

    return (
        <div className="row mobile-nav-row-area">
            <div className="col-md-12 ">
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
                        </div>
                    </div>
                    <div
                        className={`mobile-popup-search-area ${
                            popupSearch ? "active" : ""
                        }`}
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
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
