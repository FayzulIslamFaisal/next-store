
"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSliderItems from './MainSliderItems'

const MainSlider = ({ sliderOptionData }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    }
    return (
        <div className="hero-slider-holder hero-slider-main-item">
            <Slider {...settings}>
                {
                    sliderOptionData.map((item, index) => (<MainSliderItems key={index} sliderItem={item} />))
                }
            </Slider>
        </div>
    )
}

export default MainSlider