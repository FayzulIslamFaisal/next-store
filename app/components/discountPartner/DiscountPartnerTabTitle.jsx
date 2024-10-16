"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const DiscountPartnerTabTitle = ({handleTabClick}) => {
    const searchParams = useSearchParams();
    const tab = searchParams.get("tab") || "basic-info";

    useEffect(() => {
        const tabElement = document.getElementById(tab);
        if (tabElement && !tabElement.classList.contains("active")) {
            tabElement.classList.add("active");
        }
    }, [tab]);

    return (
        <>
            <div className="customer-setting-header tab-header border-0">
                <ul
                    className="nav nav-pills d-flex tab-continer"
                    id="myTab"
                    role="tablist"
                >
                    <li className="nav-item">
                        <button
                            className={`nav-link ${tab === "basic-info" ? "active" : ""} rounded-0`}
                            id="basic-info"
                            data-bs-toggle="tab"
                            // data-bs-target="#discount-partner"
                            type="button"
                            // role="tab"
                            onClick={() => handleTabClick("basic-info")}
                        >
                            Basic Info
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${tab === "contact-info" ? "active" : ""} rounded-0 border-start-0 border-end-0`}
                            id="contact-info"
                            data-bs-toggle="tab"
                            // data-bs-target="#contact-info"
                            type="button"
                            // role="tab"
                            onClick={() => handleTabClick("contact-info")}
                        >
                            Contact Info
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${tab === "business-info" ? "active" : ""} rounded-0`}
                            id="business-info"
                            data-bs-toggle="tab"
                            // data-bs-target="#business-info"
                            type="button"
                            // role="tab"
                            onClick={() => handleTabClick("business-info")}
                        >
                            Business Info
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};
