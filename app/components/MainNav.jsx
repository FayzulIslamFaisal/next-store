import Image from "next/image";
import Link from "next/link";

function MainNav() {
    return (
        <>
            <div className="row main-header-section d-none">
                <div className="col-12">
                    <div className="main-header-area d-flex align-items-center">
                        <div className="logo">
                            <Link href="/">
                                <img src={`/images/logo.svg`} alt="logo" />
                            </Link>
                        </div>
                        <div className="header-search-area d-flex align-items-center w-100">
                            <div className="header-search-location">
                                <button
                                    type="button"
                                    className="text-capitalize d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#district-Modal"
                                >
                                    <img
                                        src={`/images/store-location.svg`}
                                        alt="store-location"
                                    />
                                    Dhaka City, Dhaka
                                </button>
                            </div>
                            <div className="header-search-field">
                                <form action="#">
                                    <div className="input-group align-items-center ">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="serach"
                                            placeholder="Search in Nagad Hat..."
                                        />
                                        <button
                                            className="search-icon-btn d-flex align-items-center justify-content-center "
                                            type="button"
                                        >
                                            <img
                                                src={`/images/search-icon.svg`}
                                                alt="search-icon"
                                            />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="header-auth-area d-flex justify-content-end">
                            <ul className=" d-flex align-items-center ">
                                <li>
                                    <a
                                        href="#"
                                        className=" text-white text-capitalize d-flex align-items-center"
                                    >
                                        <img
                                            src={`/images/login-icon.svg`}
                                            alt="login-icon"
                                        />
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className=" text-white text-capitalize d-flex align-items-center"
                                    >
                                        <img
                                            src="/images/register-icon.svg"
                                            alt="register-icon"
                                        />
                                        Register
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className=" text-white text-capitalize d-flex align-items-center"
                                    >
                                        <span className="bg-white d-flex align-items-center">
                                            <img
                                                src="/images/cart-icon.svg"
                                                alt="cart-icon"
                                            />
                                        </span>
                                        Cart
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row observerable-header-section">
                <div className="col-12">
                    {/* <div className="main-header-mobile1199 d-flex align-items-center flex-column">
                        <div className="main-header-mobile1199-item d-flex align-items-center justify-content-between">
                            <div className="logo">
                                <a href="home.html">
                                    <img src={`/images/logo.svg`} alt="logo" />
                                </a>
                            </div>
                            <div className="header-auth-area d-flex justify-content-end">
                                <ul className=" d-flex align-items-center ">
                                    <li>
                                        <a
                                            href="#"
                                            className=" text-white text-capitalize d-flex align-items-center"
                                        >
                                            <img
                                                src={`/images/login-icon.svg`}
                                                alt="login-icon"
                                            />
                                            Login
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className=" text-white text-capitalize d-flex align-items-center"
                                        >
                                            <img
                                                src="/images/register-icon.svg"
                                                alt="register-icon"
                                            />
                                            Register
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className=" text-white text-capitalize d-flex align-items-center"
                                        >
                                            <span className="bg-white d-flex align-items-center">
                                                <img
                                                    src="/images/cart-icon.svg"
                                                    alt="cart-icon"
                                                />
                                            </span>
                                            Cart
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-search-area observerable-header-search-area main-header-mobile1199-item">
                            <div className="header-search-inner-area d-flex align-items-center">
                                <div
                                    className="observerable-categories-item"
                                    onMouseEnter="obserableHoverMenu()"
                                    onMouseLeave="obserableHoverLeav()"
                                >
                                    <a
                                        href="#"
                                        className="d-flex align-items-center text-white text-capitalize"
                                    >
                                        <span>Categories</span>
                                        <img
                                            className="categories-arrow-img"
                                            src="/images/Categories-arrow.svg"
                                            alt="arrow"
                                        />
                                    </a>
                                </div>
                                <div className="header-search-holder d-flex align-items-centers">
                                    <div className="header-search-location">
                                        <button
                                            type="button"
                                            className="text-capitalize d-flex align-items-center"
                                            data-bs-toggle="modal"
                                            data-bs-target="#district-Modal"
                                        >
                                            <img
                                                src={`/images/store-location.svg`}
                                                alt="store-location"
                                            />
                                            Dhaka City, Dhaka
                                        </button>
                                    </div>
                                    <div className="header-search-field">
                                        <form action="#">
                                            <div className="input-group align-items-center ">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="serach"
                                                    placeholder="Search in Nagad Hat..."
                                                />
                                                <button
                                                    className="search-icon-btn d-flex align-items-center justify-content-center "
                                                    type="button"
                                                >
                                                    <img
                                                        src={`/images/search-icon.svg`}
                                                        alt="search-icon"
                                                    />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="main-header-area d-flex align-items-center">
                        <div className="logo">
                            <Link href="/">
                                <img src={`/images/logo.svg`} alt="logo" />
                            </Link>
                        </div>
                        <div className="header-search-area observerable-header-search-area">
                            <div className="header-search-inner-area d-flex align-items-center">
                                <div
                                    className="observerable-categories-item"
                                    onMouseEnter="obserableHoverMenu()"
                                    onMouseLeave="obserableHoverLeav()"
                                >
                                    <a
                                        href="#"
                                        className="d-flex align-items-center text-white text-capitalize"
                                    >
                                        <span>Categories</span>
                                        <img
                                            className="categories-arrow-img"
                                            src="/images/Categories-arrow.svg"
                                            alt="arrow"
                                        />
                                    </a>
                                </div>
                                <div className="header-search-holder d-flex align-items-centers">
                                    <div className="header-search-location">
                                        <button
                                            type="button"
                                            className="text-capitalize d-flex align-items-center"
                                            data-bs-toggle="modal"
                                            data-bs-target="#district-Modal"
                                        >
                                            <img
                                                src={`/images/store-location.svg`}
                                                alt="store-location"
                                            />
                                            Dhaka City, Dhaka
                                        </button>
                                    </div>
                                    <div className="header-search-field">
                                        <form action="#">
                                            <div className="input-group align-items-center ">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="serach"
                                                    placeholder="Search in Nagad Hat..."
                                                />
                                                <button
                                                    className="search-icon-btn d-flex align-items-center justify-content-center "
                                                    type="button"
                                                >
                                                    <img
                                                        src={`/images/search-icon.svg`}
                                                        alt="search-icon"
                                                    />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-auth-area d-flex justify-content-end">
                            <ul className=" d-flex align-items-center ">
                                <li>
                                    <a
                                        href="#"
                                        className=" text-white text-capitalize d-flex align-items-center"
                                    >
                                        <img
                                            src={`/images/login-icon.svg`}
                                            alt="login-icon"
                                        />
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className=" text-white text-capitalize d-flex align-items-center"
                                    >
                                        <img
                                            src="/images/register-icon.svg"
                                            alt="register-icon"
                                        />
                                        Register
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className=" text-white text-capitalize d-flex align-items-center"
                                    >
                                        <span className="bg-white d-flex align-items-center">
                                            <img
                                                src="/images/cart-icon.svg"
                                                alt="cart-icon"
                                            />
                                        </span>
                                        Cart
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainNav;
