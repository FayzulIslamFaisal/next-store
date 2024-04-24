"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import MultipleProductSlider from "./MultipleProductSlider";

function ProductSlider({ sliderItems }) {
    const multipleImageItems = [
        {
            id: 1,
            imageUrl: "/images/m-Img-1.svg",
            altText: "m-Img-1",
        },
        {
            id: 2,
            imageUrl: "/images/m-Img-2.svg",
            altText: "m-Img-1",
        },
        {
            id: 3,
            imageUrl: "/images/m-Img-3.svg",
            altText: "m-Img-1",
        },
        {
            id: 4,
            imageUrl: "/images/m-Img-2.svg",
            altText: "m-Img-1",
        },
    ]
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    // console.table("sliderItems", sliderItems);
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
                            }
                        },
                    ]}
                >
                    {
                        multipleImageItems.map((mImageItem) => {
                            return (
                                <MultipleProductSlider key={mImageItem.id} multipleImage={mImageItem} />
                            )
                        })
                    }
                </Slider>
            </div>

        </div>
    );
}

export default ProductSlider;
