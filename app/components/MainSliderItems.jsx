import Image from 'next/image'
import React from 'react'
import ShopNowButton from './ShopNowButton';

const MainSliderItems = ({ sliderItem }) => {
    // console.log(sliderItem);
    const { imageurl, altText, title, subtitle, btnText, btnImage, btnAltText, path } = sliderItem;
    return (
        <div className="hero-slider-item" >
            <div className="hero-slider-photo">
                <Image src={imageurl} className="img-fluid" alt={altText} width={0} height={510} style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="hero-slider-content">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <ShopNowButton path={path} btnText={btnText} btnImage={btnImage} btnAltText={btnAltText} />
            </div>
        </div>
    )
}

export default MainSliderItems