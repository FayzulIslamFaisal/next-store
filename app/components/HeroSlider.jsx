import Link from "next/link";
import MainSlider from "./MainSlider";
import Image from "next/image";
import { getHomeSlider } from "../services/getHomeSlider";

async function HeroSlider() {
    const data = await getHomeSlider();
    const { sliders: sliderOptionData } = data.results;

    return (
        <div className="hero-slider-main-section">
            <div className="container">
                <section className="hero-slider-area">
                    <div className=" hero-slider-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-slider-main-box ">
                                    <div className="category-menu-holder hero-slider-main-item">
                                        <ul className="category-menu-area">
                                            <li className="menu-link">
                                                <Link
                                                    href="#"
                                                    className="link-item d-flex align-items-center justify-content-between "
                                                >
                                                    <p className="d-flex align-items-center">
                                                        <span>
                                                            <Image
                                                                width={23}
                                                                height={20}
                                                                src="/images/fashion-icon.svg"
                                                                alt="fashion-icon"
                                                            />
                                                        </span>
                                                        Fashion
                                                    </p>
                                                    <small>
                                                        <Image
                                                            width={32}
                                                            height={32}
                                                            src="/images/menu-arrow.svg"
                                                            alt="arrow icon"
                                                        />
                                                    </small>
                                                </Link>
                                                <ul className="sub-category-menu">
                                                    <li>
                                                        <Link href="#">
                                                            Men's Fashion
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            Women's Fashion
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-link">
                                                <Link
                                                    href="#"
                                                    className="link-item d-flex align-items-center justify-content-between "
                                                >
                                                    <p className="d-flex align-items-center">
                                                        <span>
                                                            <Image
                                                                width={23}
                                                                height={20}
                                                                src="/images/digital-products.svg"
                                                                alt="digital-products"
                                                            />
                                                        </span>
                                                        Digital Products
                                                    </p>
                                                    <small>
                                                        <Image
                                                            width={32}
                                                            height={32}
                                                            src="/images/menu-arrow.svg"
                                                            alt="arrow icon"
                                                        />
                                                    </small>
                                                </Link>
                                            </li>
                                            <li className="menu-link">
                                                <Link
                                                    href="#"
                                                    className="link-item d-flex align-items-center justify-content-between "
                                                >
                                                    <p className="d-flex align-items-center">
                                                        <span>
                                                            <Image
                                                                width={23}
                                                                height={20}
                                                                src="/images/toiletries-icon.svg"
                                                                alt="toiletries-icon"
                                                            />
                                                        </span>
                                                        Toiletries
                                                    </p>
                                                    <small>
                                                        <Image
                                                            width={32}
                                                            height={32}
                                                            src="/images/menu-arrow.svg"
                                                            alt="arrow icon"
                                                        />
                                                    </small>
                                                </Link>
                                            </li>
                                            <li className="menu-link">
                                                <Link
                                                    href="#"
                                                    className="link-item d-flex align-items-center justify-content-between "
                                                >
                                                    <p className="d-flex align-items-center">
                                                        <span>
                                                            <Image
                                                                width={23}
                                                                height={20}
                                                                src="/images/Cleaning-Supplies.svg"
                                                                alt="Cleaning-Supplies"
                                                            />
                                                        </span>
                                                        Cleaning Supplies
                                                    </p>
                                                    <small>
                                                        <Image
                                                            width={32}
                                                            height={32}
                                                            src="/images/menu-arrow.svg"
                                                            alt="arrow icon"
                                                        />
                                                    </small>
                                                </Link>
                                            </li>
                                            <li className="menu-link">
                                                <Link
                                                    href="#"
                                                    className="link-item d-flex align-items-center justify-content-between "
                                                >
                                                    <p className="d-flex align-items-center">
                                                        <span>
                                                            <Image
                                                                width={23}
                                                                height={20}
                                                                src="/images/Food-icon.svg"
                                                                alt="Food-icon"
                                                            />
                                                        </span>
                                                        Food
                                                    </p>
                                                    <small>
                                                        <Image
                                                            width={32}
                                                            height={32}
                                                            src="/images/menu-arrow.svg"
                                                            alt="arrow icon"
                                                        />
                                                    </small>
                                                </Link>
                                            </li>
                                            <li className="menu-link">
                                                <Link
                                                    href="#"
                                                    className="link-item d-flex align-items-center justify-content-between "
                                                >
                                                    <p className="d-flex align-items-center">
                                                        <span>
                                                            <Image
                                                                width={23}
                                                                height={20}
                                                                src="/images/Diapers.svg"
                                                                alt="Diapers"
                                                            />
                                                        </span>
                                                        Diapers
                                                    </p>
                                                    <small>
                                                        <Image
                                                            width={32}
                                                            height={32}
                                                            src="/images/menu-arrow.svg"
                                                            alt="arrow icon"
                                                        />
                                                    </small>
                                                </Link>
                                            </li>
                                            <li className="menu-link">
                                                <Link
                                                    href="#"
                                                    className="link-item d-flex align-items-center justify-content-between "
                                                >
                                                    <p className="d-flex align-items-center">
                                                        <span>
                                                            <Image
                                                                width={23}
                                                                height={20}
                                                                src="/images/BabyCare.svg"
                                                                alt="BabyCare"
                                                            />
                                                        </span>
                                                        Baby Care
                                                    </p>
                                                    <small>
                                                        <Image
                                                            width={32}
                                                            height={32}
                                                            src="/images/menu-arrow.svg"
                                                            alt="arrow icon"
                                                        />
                                                    </small>
                                                </Link>
                                            </li>
                                            <li className="menu-link">
                                                <Link
                                                    href="#"
                                                    className="link-item d-flex align-items-center justify-content-between "
                                                >
                                                    <p className="d-flex align-items-center">
                                                        <span>
                                                            <Image
                                                                width={23}
                                                                height={20}
                                                                src="/images/Stationery.svg"
                                                                alt="Stationery"
                                                            />
                                                        </span>
                                                        Stationery
                                                    </p>
                                                    <small>
                                                        <Image
                                                            width={32}
                                                            height={32}
                                                            src="/images/menu-arrow.svg"
                                                            alt="arrow icon"
                                                        />
                                                    </small>
                                                </Link>
                                            </li>
                                            <li className="menu-link">
                                                <Link
                                                    href="#"
                                                    className="link-item d-flex align-items-center justify-content-between "
                                                >
                                                    <p className="d-flex align-items-center">
                                                        <span>
                                                            <Image
                                                                width={23}
                                                                height={20}
                                                                src="/images/HomeAppliances.svg"
                                                                alt="HomeAppliances"
                                                            />
                                                        </span>
                                                        Home Appliances
                                                    </p>
                                                    <small>
                                                        <Image
                                                            width={32}
                                                            height={32}
                                                            src="/images/menu-arrow.svg"
                                                            alt="arrow icon"
                                                        />
                                                    </small>
                                                </Link>
                                            </li>
                                            <li className="menu-link">
                                                <Link
                                                    href="#"
                                                    className="link-item d-flex align-items-center justify-content-between "
                                                >
                                                    <p className="d-flex align-items-center">
                                                        <span>
                                                            <Image
                                                                width={23}
                                                                height={20}
                                                                src="/images/Cosmetics.svg"
                                                                alt="Cosmetics"
                                                            />
                                                        </span>
                                                        Cosmetics
                                                    </p>
                                                    <small>
                                                        <Image
                                                            width={32}
                                                            height={32}
                                                            src="/images/menu-arrow.svg"
                                                            alt="arrow icon"
                                                        />
                                                    </small>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <MainSlider
                                        sliderOptionData={sliderOptionData}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default HeroSlider;
