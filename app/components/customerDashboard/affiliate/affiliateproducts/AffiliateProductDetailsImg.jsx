"use client"

import Image from "next/image";
import Slider from "react-slick";
import React, { useState, useEffect, useRef } from "react";

function AffiliateProductDetailsImg() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <>
            <div >
                <Slider {...settings}>
                    <div className="product-details-info-photo">
                        <div className="product-details-info-img">
                            <Image layout="fill" src="/images/flash-img1.jpg" />
                        </div>
                    </div>
                    <div className="product-details-info-photo">
                        <div className="product-details-info-img">
                            <Image layout="fill" src="/images/flash-img2.jpg" />
                        </div>
                    </div>
                    <div className="product-details-info-photo">
                        <div className="product-details-info-img">
                            <Image layout="fill" src="/images/flash-img3.jpg" />
                        </div>
                    </div>
                    <div className="product-details-info-photo">
                        <div className="product-details-info-img">
                            <Image layout="fill" src="/images/flash-img4.jpg" />
                        </div>
                    </div>
                </Slider>
            </div>
            
        </>

    );
}

export default AffiliateProductDetailsImg;
