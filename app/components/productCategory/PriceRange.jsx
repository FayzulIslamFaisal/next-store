"use client";
import { useState, useEffect } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
const PriceRange = ( {categoryByMinPrice, categoryByMaxPrice}) => {
    const [value, setValue] = useState([categoryByMinPrice, categoryByMaxPrice]);
    const [min, max] = value;
    return (
        <>
            <div className="product-category-range-area sub-category-pb40">
                <RangeSlider
                    min={categoryByMinPrice}
                    max={categoryByMaxPrice}
                    value={value}
                    onInput={setValue}
                />
                <div className="product-category-rang-info d-flex align-items-center justify-content-between">
                    <div className="product-category-rang-value">৳ {min}</div>
                    <div className="product-category-rang-value">৳ {max}</div>
                </div>
            </div>
        </>
    );
};

export default PriceRange;
