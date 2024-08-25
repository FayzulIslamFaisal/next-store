"use client";
import { useState } from "react";
import AffiliateToggleButton from "./AffiliateToggleButton";
import ResaleListViewProductInfo from "./ResaleListViewProductInfo";
import ResaleProductsInfo from "./ResaleProductsInfo";

const ResaleProducts = () => {
    const [isGridView, setIsGridView] = useState(true);
    const handleToggle = (view) => {
        setIsGridView(view === "grid");
    };
    return (
        <>
            <div
                className="tab-pane fade container-booking-body-tab"
                id="resale"
                role="tabpanel"
            >
                <div className="justify-content-end d-flex align-items-end flex-sm-nowrap flex-wrap gap-2 gap-md-3 pb-4">
                    <div>
                        <label htmlFor="sort-ascending" className="form-label">
                            Sort By Duration
                        </label>
                        <select
                            className="form-select district-list"
                            name="sort-ascending"
                            id="sort-ascending"
                        >
                            <option className="selected" defaultValue="all">
                                Select
                            </option>
                            <option defaultValue="ascending">Ascending</option>
                            <option defaultValue="descending">
                                Descending
                            </option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sort-pric" className="form-label">
                            Sort by pric
                        </label>
                        <select
                            className="form-select district-list"
                            name="sort-pric"
                            id="sort-pric"
                        >
                            <option className="selected" defaultValue="all">
                                Select
                            </option>
                            <option defaultValue="high-to-low">
                                High to low
                            </option>
                            <option defaultValue="low-to-high">
                                Low to high
                            </option>
                        </select>
                    </div>
                    <AffiliateToggleButton
                        handleToggle={handleToggle}
                        isGridView={isGridView}
                    />
                </div>
                {isGridView ? (
                    <ResaleProductsInfo />
                ) : (
                    <ResaleListViewProductInfo />
                )}
            </div>
        </>
    );
};

export default ResaleProducts;
