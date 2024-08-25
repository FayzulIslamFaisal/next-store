"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";
import AffiliateToggleButton from "./AffiliateToggleButton";
import AffiliateRetailsProductInfo from "./AffiliateRetailsProductInfo";
import { useState } from "react";
import RetailListViewProductInfo from "./RetailListViewProductInfo";

const AffiliateRetailsProduct = () => {
    const [isGridView, setIsGridView] = useState(true);
    const handleToggle = (view) => {
        setIsGridView(view === "grid");
    };
    return (
        <>
            <div
                className="tab-pane fade show active container-booking-body-tab"
                id="retails"
                role="tabpanel"
            >
                <div className="justify-content-end d-flex align-content-end flex-sm-nowrap flex-wrap gap-2 gap-md-3 pb-4">
                    <div className="input-group affiliate-products-search">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                        />
                        <button className="input-group-text" id="search">
                            <FaMagnifyingGlass />
                        </button>
                    </div>
                    <div>
                        <label htmlFor="show" className="form-label" hidden>
                            Show
                        </label>
                        <select
                            className="form-select district-list"
                            name="show"
                            id="show"
                        >
                            <option className="selected" defaultValue="all">
                                Select Category
                            </option>
                            <option defaultValue="organic">Organic</option>
                            <option defaultValue="mens-fashion">
                                Men's Fashion
                            </option>
                            <option defaultValue="women-fashion">
                                Women's Fashion
                            </option>
                            <option defaultValue="panjabi">Panjabi</option>
                            <option defaultValue="electronics">
                                Electronics
                            </option>
                            <option defaultValue="safety-products">
                                Safety Products
                            </option>
                            <option defaultValue="groceries">Groceries</option>
                            <option defaultValue="cosmetics">Cosmetics</option>
                            <option defaultValue="home-appliances">
                                Home Appliances
                            </option>
                            <option defaultValue="stationery">
                                Stationery
                            </option>
                            <option defaultValue="covid-19">Covid 19</option>
                        </select>
                    </div>
                    <AffiliateToggleButton
                        handleToggle={handleToggle}
                        isGridView={isGridView}
                    />
                </div>
                {/* <AffiliateRetailsProductInfo /> */}
                {isGridView ? (
                    <AffiliateRetailsProductInfo />
                ) : (
                    <RetailListViewProductInfo />
                )}
            </div>
        </>
    );
};

export default AffiliateRetailsProduct;
