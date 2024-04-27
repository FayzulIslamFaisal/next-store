"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCategoryItem from "./ProductCategoryItem";

const ProductCategories = ({ categoryProductData, countRows = 2, sliderShowCount = 8, slidesScrollCount = 8, isHome = true }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: sliderShowCount,
        slidesToScroll: slidesScrollCount,
        rows: countRows,
        arrows: false,
        // nextArrow: <p>Next slide</p>,
        // prevArrow: <p>Prev slide</p>,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    arrows: true,
                    // nextArrow: <p>Next slide</p>,
                    // prevArrow: <p>Prev slide</p>,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                }
            },

        ]
    };

    return (
        <div className="row nh-categories-row">
            <div className="col-md-12">
                <div className="nh-categories-holder-s">
                    <Slider {...settings}>
                        {categoryProductData.map((itme, index) => (
                            <ProductCategoryItem
                                key={index}
                                categoryItem={itme}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ProductCategories;
