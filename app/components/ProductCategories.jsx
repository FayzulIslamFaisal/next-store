"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCategoryItem from "./ProductCategoryItem";

const ProductCategories = ({ categoryProductData, isHome = true }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isHome ? 8 : 6,
        slidesToScroll: isHome ? 8 : 6,
        rows: isHome ? 2 : 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: isHome ? 6 : 3,
                    slidesToScroll: isHome ? 6 : 3,
                    arrows: true,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                },
            },
        ],
    };

    return (
        <div className="row nh-categories-row">
            <div className="col-md-12">
                <div className="nh-categories-holder-s">
                    <Slider {...settings}>
                        {categoryProductData?.map((itme) => (
                            <ProductCategoryItem
                                key={itme.id}
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
