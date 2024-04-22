"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

function ProductSlider({ sliderItems }) {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    console.table("sliderItems", sliderItems);
    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    return (
        <div className="slider-container">
            <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
                <div className="product-details-info-photo">
                    <div className="product-details-info-img">
                        {sliderItems.map((sliderItem) => (
                            <Image
                                key={sliderItem.id}
                                src={sliderItem.imageUrl}
                                fill={true}
                                alt={sliderItem.altText}
                                className="img-fluid"
                            />
                        ))}
                    </div>
                </div>
                <div className="product-details-info-photo">
                    <div className="product-details-info-img">
                        {sliderItems.map((sliderItem) => (
                            <Image
                                key={sliderItem.id}
                                src={sliderItem.imageUrl}
                                fill={true}
                                alt={sliderItem.altText}
                                className="img-fluid"
                            />
                        ))}
                    </div>
                </div>
                <div className="product-details-info-photo">
                    <div className="product-details-info-img">
                        <Image
                            src="/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg"
                            fill={true}
                            alt="product image"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </Slider>
            <Slider
                asNavFor={nav1}
                ref={(slider) => (sliderRef2 = slider)}
                slidesToShow={4}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                <div className="product-details-info-multiple-photo">
                    <div className="product-multiple-photo-item">
                        <Image
                            className="img-fluid"
                            src="/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg"
                            fill={true}
                            alt="multiple product image"
                        />
                    </div>
                </div>
                <div className="product-details-info-multiple-photo">
                    <div className="product-multiple-photo-item">
                        <Image
                            className="img-fluid"
                            src="/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg"
                            fill={true}
                            alt="multiple product image"
                        />
                    </div>
                </div>
                <div className="product-details-info-multiple-photo">
                    <div className="product-multiple-photo-item">
                        <Image
                            className="img-fluid"
                            src="/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg"
                            fill={true}
                            alt="multiple product image"
                        />
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default ProductSlider;
