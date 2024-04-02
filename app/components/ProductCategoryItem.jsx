'use client';
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCategoryItem = ({ categoryItem }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    // console.log(categoryItem);
    const { imageurl, altText, path, title } = categoryItem;

    return (
        <Slider {...settings}>
            <div className="nh-categories-item">
                <div className="nh-categories-item-bg nh-hover-box-shadow">
                    <div className="nh-categories-img image-hover-effect">
                        <Image
                            src={imageurl}
                            className="img-fluid"
                            alt={altText}
                            fill={true}
                        />
                    </div>
                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                        <h4>
                            <Link href={path}>
                                {title}
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ProductCategoryItem