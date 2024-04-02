"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCategoryItem from "./ProductCategoryItem";

const ProductCategories = ({ categoryProductData }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        rows: 2,
        // nextArrow: <p>Next slide</p>,
        // prevArrow: <p>Prev slide</p>,
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
