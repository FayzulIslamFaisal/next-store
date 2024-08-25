import React from "react";
import RetailListViewProductInfo from "./RetailListViewProductInfo";
import AffiliateToggleButton from "./AffiliateToggleButton";

const RetailListViewProduct = () => {
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
                            <option className="selected" value="all">
                                Select Category
                            </option>
                            <option value="organic">Organic</option>
                            <option value="mens-fashion">Men's Fashion</option>
                            <option value="women-fashion">
                                Women's Fashion
                            </option>
                            <option value="panjabi">Panjabi</option>
                            <option value="electronics">Electronics</option>
                            <option value="safety-products">
                                Safety Products
                            </option>
                            <option value="groceries">Groceries</option>
                            <option value="cosmetics">Cosmetics</option>
                            <option value="home-appliances">
                                Home Appliances
                            </option>
                            <option value="stationery">Stationery</option>
                            <option value="covid-19">Covid 19</option>
                        </select>
                    </div>
                    <AffiliateToggleButton />
                </div>
                <RetailListViewProductInfo />
            </div>
        </>
    );
};

export default RetailListViewProduct;
