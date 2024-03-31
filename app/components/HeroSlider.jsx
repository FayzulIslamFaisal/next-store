"use client";
import Slider from "react-slick";
import Image from "next/image";

function HeroSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <section className="hero-slider-area">
            <div className="container hero-slider-container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="category-menu-holder">
                            <ul className="category-menu-area">
                                <li className="menu-link">
                                    <a
                                        href="#"
                                        className="link-item d-flex align-items-center justify-content-between "
                                    >
                                        <p className="d-flex align-items-center">
                                            {" "}
                                            <span>
                                                <img
                                                    src="/images/fashion-icon.svg"
                                                    alt="fashion-icon"
                                                />
                                            </span>{" "}
                                            Fashion
                                        </p>{" "}
                                        <small>
                                            <img
                                                src="/images/menu-arrow.svg"
                                                alt="arrow icon"
                                            />
                                        </small>
                                    </a>
                                    <ul className="sub-category-menu">
                                        <li>
                                            <a href="#">Men's Fashion</a>
                                        </li>
                                        <li>
                                            <a href="#">Women's Fashion</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-link">
                                    <a
                                        href="#"
                                        className="link-item d-flex align-items-center justify-content-between "
                                    >
                                        <p className="d-flex align-items-center">
                                            {" "}
                                            <span>
                                                <img
                                                    src="/images/digital-products.svg"
                                                    alt="digital-products"
                                                />
                                            </span>
                                            Digital Products{" "}
                                        </p>{" "}
                                        <small>
                                            <img
                                                src="/images/menu-arrow.svg"
                                                alt="arrow icon"
                                            />
                                        </small>
                                    </a>
                                </li>
                                <li className="menu-link">
                                    <a
                                        href="#"
                                        className="link-item d-flex align-items-center justify-content-between "
                                    >
                                        <p className="d-flex align-items-center">
                                            {" "}
                                            <span>
                                                <img
                                                    src="/images/toiletries-icon.svg"
                                                    alt="toiletries-icon"
                                                />
                                            </span>
                                            Toiletries{" "}
                                        </p>{" "}
                                        <small>
                                            <img
                                                src="/images/menu-arrow.svg"
                                                alt="arrow icon"
                                            />
                                        </small>
                                    </a>
                                </li>
                                <li className="menu-link">
                                    <a
                                        href="#"
                                        className="link-item d-flex align-items-center justify-content-between "
                                    >
                                        <p className="d-flex align-items-center">
                                            {" "}
                                            <span>
                                                <img
                                                    src="/images/Cleaning-Supplies.svg"
                                                    alt="Cleaning-Supplies"
                                                />
                                            </span>{" "}
                                            Cleaning Supplies{" "}
                                        </p>{" "}
                                        <small>
                                            <img
                                                src="/images/menu-arrow.svg"
                                                alt="arrow icon"
                                            />
                                        </small>
                                    </a>
                                </li>
                                <li className="menu-link">
                                    <a
                                        href="#"
                                        className="link-item d-flex align-items-center justify-content-between "
                                    >
                                        <p className="d-flex align-items-center">
                                            {" "}
                                            <span>
                                                <img
                                                    src="/images/Food-icon.svg"
                                                    alt="Food-icon"
                                                />
                                            </span>{" "}
                                            Food{" "}
                                        </p>{" "}
                                        <small>
                                            <img
                                                src="/images/menu-arrow.svg"
                                                alt="arrow icon"
                                            />
                                        </small>
                                    </a>
                                </li>
                                <li className="menu-link">
                                    <a
                                        href="#"
                                        className="link-item d-flex align-items-center justify-content-between "
                                    >
                                        <p className="d-flex align-items-center">
                                            {" "}
                                            <span>
                                                <img
                                                    src="/images/Diapers.svg"
                                                    alt="Diapers"
                                                />
                                            </span>{" "}
                                            Diapers{" "}
                                        </p>{" "}
                                        <small>
                                            <img
                                                src="/images/menu-arrow.svg"
                                                alt="arrow icon"
                                            />
                                        </small>
                                    </a>
                                </li>
                                <li className="menu-link">
                                    <a
                                        href="#"
                                        className="link-item d-flex align-items-center justify-content-between "
                                    >
                                        <p className="d-flex align-items-center">
                                            {" "}
                                            <span>
                                                <img
                                                    src="/images/BabyCare.svg"
                                                    alt="BabyCare"
                                                />
                                            </span>{" "}
                                            Baby Care{" "}
                                        </p>{" "}
                                        <small>
                                            <img
                                                src="/images/menu-arrow.svg"
                                                alt="arrow icon"
                                            />
                                        </small>
                                    </a>
                                </li>
                                <li className="menu-link">
                                    <a
                                        href="#"
                                        className="link-item d-flex align-items-center justify-content-between "
                                    >
                                        <p className="d-flex align-items-center">
                                            {" "}
                                            <span>
                                                <img
                                                    src="/images/Stationery.svg"
                                                    alt="Stationery"
                                                />
                                            </span>{" "}
                                            Stationery{" "}
                                        </p>{" "}
                                        <small>
                                            <img
                                                src="/images/menu-arrow.svg"
                                                alt="arrow icon"
                                            />
                                        </small>
                                    </a>
                                </li>
                                <li className="menu-link">
                                    <a
                                        href="#"
                                        className="link-item d-flex align-items-center justify-content-between "
                                    >
                                        <p className="d-flex align-items-center">
                                            {" "}
                                            <span>
                                                <img
                                                    src="/images/HomeAppliances.svg"
                                                    alt="HomeAppliances"
                                                />
                                            </span>{" "}
                                            Home Appliances{" "}
                                        </p>{" "}
                                        <small>
                                            <img
                                                src="/images/menu-arrow.svg"
                                                alt="arrow icon"
                                            />
                                        </small>
                                    </a>
                                </li>
                                <li className="menu-link">
                                    <a
                                        href="#"
                                        className="link-item d-flex align-items-center justify-content-between "
                                    >
                                        <p className="d-flex align-items-center">
                                            {" "}
                                            <span>
                                                <img
                                                    src="/images/Cosmetics.svg"
                                                    alt="Cosmetics"
                                                />
                                            </span>{" "}
                                            Cosmetics{" "}
                                        </p>{" "}
                                        <small>
                                            <img
                                                src="/images/menu-arrow.svg"
                                                alt="arrow icon"
                                            />
                                        </small>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="hero-slider-holder">
                            <Slider {...settings}>
                                <div className="hero-slider-item">
                                    <div className="hero-slider-image">
                                        <img
                                            src="/images/slider.svg"
                                            className=" img-fluid"
                                            alt="hero slider image"
                                        />
                                    </div>
                                    <div className="hero-slider-content">
                                        <h1>
                                            Women one <br />
                                            Accessories
                                        </h1>
                                        <h2>upto 50% sale</h2>
                                        <div className="hero-slider-btn-area">
                                            <a
                                                href="#"
                                                className="hero-slider-btn d-flex align-items-center"
                                            >
                                                <span>Shop Now</span>{" "}
                                                <img
                                                    src="/images/shop-arrow.svg"
                                                    alt="arrow icon"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-slider-item">
                                    <div className="hero-slider-image">
                                        <img
                                            src="/images/slider.svg"
                                            className=" img-fluid"
                                            alt="hero slider image"
                                        />
                                    </div>
                                    <div className="hero-slider-content">
                                        <h1>
                                            Women one <br />
                                            Accessories
                                        </h1>
                                        <h2>upto 50% sale</h2>
                                        <div className="hero-slider-btn-area">
                                            <a
                                                href="#"
                                                className="hero-slider-btn d-flex align-items-center"
                                            >
                                                <span>Shop Now</span>{" "}
                                                <img
                                                    src="/images/shop-arrow.svg"
                                                    alt="arrow icon"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-slider-item">
                                    <div className="hero-slider-image">
                                        <img
                                            src="/images/slider.svg"
                                            className=" img-fluid"
                                            alt="hero slider image"
                                        />
                                    </div>
                                    <div className="hero-slider-content">
                                        <h1>
                                            Women one <br />
                                            Accessories
                                        </h1>
                                        <h2>upto 50% sale</h2>
                                        <div className="hero-slider-btn-area">
                                            <a
                                                href="#"
                                                className="hero-slider-btn d-flex align-items-center"
                                            >
                                                <span>Shop Now</span>{" "}
                                                <img
                                                    src="/images/shop-arrow.svg"
                                                    alt="arrow icon"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSlider;
