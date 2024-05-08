import Image from "next/image";
import React from "react";
import ShopNowButton from "./ShopNowButton";

const MainSliderItems = ({ sliderItem }) => {
    let imageurl = sliderItem.banner_image
        ? `${process.env.NEXT_PUBLIC_ROOT_URL}/${
              sliderItem.banner_image.split("public/")[1]
          }`
        : "";

    const {
        title: altText,
        title: title,
        short_title: subtitle,
        btn_text: btnText,
        btn_text: btnAltText,
        btn_link: path,
    } = sliderItem;
    return (
        <div className="hero-slider-item">
            <div className="hero-slider-photo">
                <Image
                    src={imageurl}
                    className="img-fluid"
                    alt={altText}
                    width={0}
                    height={510}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <div className="hero-slider-content">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <ShopNowButton
                    path={path}
                    btnText={btnText}
                    btnAltText={btnAltText}
                />
            </div>
        </div>
    );
};

export default MainSliderItems;
