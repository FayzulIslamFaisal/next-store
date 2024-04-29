"use client"
import { useState, useEffect } from 'react';

const PriceRange = () => {
    const [sliderOne, setSliderOne] = useState(0);
    const [sliderTwo, setSliderTwo] = useState(1000);
    const [sliderMaxValue, setSliderMaxValue] = useState(1000);
    const [minGap, setMinGap] = useState(0);

    useEffect(() => {
        slideOne();
        slideTwo();
    }, []);

    function slideOne() {
        if (parseInt(sliderTwo) - parseInt(sliderOne) <= minGap) {
            setSliderOne(parseInt(sliderTwo) - minGap);
        }
        fillColor();
    }

    function slideTwo() {
        if (parseInt(sliderTwo) - parseInt(sliderOne) <= minGap) {
            setSliderTwo(parseInt(sliderOne) + minGap);
        }
        fillColor();
    }

    function fillColor() {
        const percent1 = (sliderOne / sliderMaxValue) * 100;
        const percent2 = (sliderTwo / sliderMaxValue) * 100;
        // Update slider track style
        const sliderTrack = document.querySelector(".slider-track");
        if (sliderTrack) {
            sliderTrack.style.background = `linear-gradient(to right, var(--color-FC7024) ${percent1}% , var(--color-FC7024) ${percent1}% , var(--color-FC7024) ${percent2}%, var(--color-FC7024) ${percent2}%)`;
        }
    }
    return (
        <div className="product-category-range-area sub-category-pb40">
            <div className="product-category-range">
                <div className="slider-track"></div>
                <input type="range" min="0" max="1000" value={sliderOne} id="slider-1" onChange={slideOne} />
                <input type="range" min="0" max="1000" value={sliderTwo} id="slider-2" onChange={slideTwo} />
            </div>
            <div className="product-category-rang-info d-flex align-items-center justify-content-between">
                <div className="product-category-rang-value" id="range1">৳ {sliderOne}</div>
                <div className="product-category-rang-value" id="range2">৳ {sliderTwo}</div>
            </div>
        </div>
    )
}

export default PriceRange