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
            <Slider arrows={false} asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
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
            <div className="product-details-info-multiple-photo">
                <Slider
                    asNavFor={nav1}
                    ref={(slider) => (sliderRef2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    responsive={[
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 3,
                                // slidesToScroll: 3,
                            }
                        },
                    ]}
                >
                    <div className="product-multiple-photo-item">
                        <Image
                            className="img-fluid"
                            src="/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg"
                            fill={true}
                            alt="multiple product image"
                        />
                    </div>
                    <div className="product-multiple-photo-item">
                        <Image
                            className="img-fluid"
                            src="/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg"
                            fill={true}
                            alt="multiple product image"
                        />
                    </div>
                    <div className="product-multiple-photo-item">
                        <Image
                            className="img-fluid"
                            src="/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg"
                            fill={true}
                            alt="multiple product image"
                        />
                    </div>
                </Slider>
            </div>

        </div>
    );
}

export default ProductSlider;
