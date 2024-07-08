"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
const PriceRange = ({
    categoryByMinPrice,
    categoryByMaxPrice,
    searchParams,
}) => {
    const router = useRouter();
    const [value, setValue] = useState([
        searchParams?.min_price || categoryByMinPrice,
        searchParams?.max_price || categoryByMaxPrice,
    ]);

    const handleInputChange = (value) => {
        setValue(value);
        const [min, max] = value;
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);

        params.set("min_price", min);
        params.set("max_price", max);

        url.search = params.toString();
        router.push(url.toString(), undefined, { shallow: true });
    };
    return (
        <>
            <div className="product-category-range-area sub-category-pb40">
                <RangeSlider
                    min={parseInt(categoryByMinPrice)}
                    max={parseInt(categoryByMaxPrice)}
                    value={value}
                    onInput={handleInputChange}
                />
                <div className="product-category-rang-info d-flex align-items-center justify-content-between">
                    <div className="product-category-rang-value">
                        ৳ {value[0]}
                    </div>
                    <div className="product-category-rang-value">
                        ৳ {value[1]}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceRange;
