"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
export const AffiliateTabTitle = () => {
    const searchParams = useSearchParams();
    const tab = searchParams.get("tab") || "retails-tab"; 

    useEffect(() => {
        const tabElement = document.getElementById(tab);
        if (tabElement) {
            tabElement.click();
        }
    }, [tab]);

    const handleTabClick = (tabId) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set("tab", tabId);
        window.history.replaceState(
            {},
            "",
            `${window.location.pathname}?${newSearchParams.toString()}`
        );
    };

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
                            className={`nav-link ${
                                tab === "retails-tab" ? "active" : ""
                            } rounded-0`}
                            id="retails-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#retails"
                            type="button"
                            role="tab"
                            onClick={() => handleTabClick("retails-tab")}
                        >
                            Retails
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${
                                tab === "container-booking-tab" ? "active" : ""
                            } rounded-0 border-start-0 border-end-0`}
                            id="container-booking-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#container-booking"
                            type="button"
                            role="tab"
                            onClick={() =>
                                handleTabClick("container-booking-tab")
                            }
                        >
                            Container Booking
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${
                                tab === "resale-tab" ? "active" : ""
                            } rounded-0`}
                            id="resale-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#resale"
                            type="button"
                            role="tab"
                            onClick={() => handleTabClick("resale-tab")}
                        >
                            FPNH (Resale)
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${
                                tab === "properties-tab" ? "active" : ""
                            } rounded-0`}
                            id="properties-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#properties"
                            type="button"
                            role="tab"
                            onClick={() => handleTabClick("properties-tab")}
                        >
                            Properties
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};
