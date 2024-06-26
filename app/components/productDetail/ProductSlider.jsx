"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import MultipleProductSlider from "./MultipleProductSlider";
import { NagadhatPublicUrl } from "@/app/utils";

function ProductSlider({ sliderItems, productGallery }) {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    return (
        <div className="slider-container">
            <Slider arrows={false} asNavFor={nav2} ref={sliderRef1}>
                {productGallery?.map((sliderItem) => (
                    <div
                        className="product-details-info-photo"
                        key={sliderItem.id}
                    >
                        <div className="product-details-info-img">
                            <Image
                                src={`${NagadhatPublicUrl}/${sliderItem.path}`}
                                layout="fill"
                                alt="product gallery banner image"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="product-details-info-multiple-photo">
                <Slider
                    asNavFor={nav1}
                    ref={sliderRef2}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    responsive={[
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 3,
                            },
                        },
                    ]}
                >
                    {productGallery?.map((mImageItem) => (
                        <MultipleProductSlider
                            key={mImageItem.id}
                            multipleImage={mImageItem}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ProductSlider;
