"use client";
import Slider from "react-slick";
import Image from "next/image";
import MainSlider from "./MainSlider";

function HeroSlider() {
    const sliderOptionData = [
        {
            imageurl: "/images/slider.svg",
            altText: "slider image 1",
            title: " Women one Accessories",
            subtitle: "upto 50% sale",
            btnText: "Shop Now",
            btnImage: '/images/shop-arrow.svg',
            path: "#",
            btnAltText: "arrow image 1"
        },
        {
            imageurl: "/images/slider.svg",
            altText: "slider image 2",
            title: " Women one Accessories",
            subtitle: "upto 50% sale",
            btnText: "Shop Now",
            btnImage: '/images/shop-arrow.svg',
            path: "#",
            btnAltText: "arrow image 2"
        },
        {
            imageurl: "/images/slider.svg",
            altText: "slider image 3",
            title: " Women one Accessories",
            subtitle: "upto 50% sale",
            btnText: "Shop Now",
            btnImage: '/images/shop-arrow.svg',
            path: "#",
            btnAltText: "arrow image 3"
        },
    ]

    return (
        <section className="hero-slider-area">
            <div className=" hero-slider-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hero-slider-main-box ">
                            <div className="category-menu-holder hero-slider-main-item">
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
                            <MainSlider sliderOptionData={sliderOptionData} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSlider;
