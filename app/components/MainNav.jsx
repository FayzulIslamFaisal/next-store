"use client";
import Image from "next/image";
import Link from "next/link";
import SignoutBtn from "./SignoutBtn";

function MainNav({
    isObserverMenuVisible,
    isCategoryHoverMenu,
    setCategoryHoverMenu,
    authStatus,
}) {
    return (
        <>
            <div
                className={`row main-header-section ${
                    !isObserverMenuVisible ? "" : "d-none"
                }`}
            >
                <div className="col-12">
                    <div className="main-header-area d-flex">
                        <div className="logo">
                            <Link href="/" className=" d-inline-block">
                                <Image
                                    width={0}
                                    height={43}
                                    sizes="100vw"
                                    src={`/images/logo.svg`}
                                    style={{ width: "100%" }}
                                    alt="logo"
                                />
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
                                    <Image
                                        src={`/images/store-location.svg`}
                                        alt="store-location"
                                        width={17}
                                        height={15}
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
                                            <Image
                                                src={`/images/search-icon.svg`}
                                                alt="search-icon"
                                                width={18}
                                                height={18}
                                            />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="header-auth-area d-flex justify-content-end">
                            <ul className=" d-flex align-items-center ">
                                <li>
                                    {authStatus === "authenticated" ? (
                                        <SignoutBtn />
                                    ) : (
                                        <Link
                                            href="/login"
                                            className=" text-white text-capitalize d-flex align-items-center"
                                        >
                                            <Image
                                                src={`/images/login-icon.svg`}
                                                alt="login-icon"
                                                width={13}
                                                height={19}
                                            />
                                            Login
                                        </Link>
                                    )}
                                </li>
                                <li>
                                    <Link
                                        href="/registration"
                                        className=" text-white text-capitalize d-flex align-items-center"
                                    >
                                        <Image
                                            src="/images/register-icon.svg"
                                            alt="register-icon"
                                            width={14}
                                            height={17}
                                        />
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className=" text-white text-capitalize d-flex align-items-center"
                                    >
                                        <span className="bg-white d-flex align-items-center">
                                            <Image
                                                src="/images/cart-icon.svg"
                                                alt="cart-icon"
                                                width={17}
                                                height={15}
                                            />
                                        </span>
                                        Cart
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`row observerable-header-section ${
                    isObserverMenuVisible ? "" : "d-none"
                }`}
            >
                <div className="col-12">
                    <div className="main-header-area d-flex">
                        <div className="logo">
                            <Link href="/" className=" d-inline-block">
                                <Image
                                    width={0}
                                    height={43}
                                    sizes="100vw"
                                    alt="logo"
                                    src={`/images/logo.svg`}
                                    style={{ width: "100%" }}
                                />
                            </Link>
                        </div>
                        <div className="header-search-area observerable-header-search-area">
                            <div className="header-search-inner-area d-flex align-items-center">
                                <div
                                    className="observerable-categories-item position-relative"
                                    onMouseEnter={() =>
                                        setCategoryHoverMenu(true)
                                    }
                                    onMouseLeave={
                                        () => console.log("...")
                                        // setCategoryHoverMenu(false)
                                    }
                                >
                                    <Link
                                        href="#"
                                        className="d-flex align-items-center text-white text-capitalize"
                                    >
                                        <span>Categories</span>
                                        <Image
                                            className="categories-arrow-img"
                                            src="/images/Categories-arrow.svg"
                                            alt="arrow"
                                            width={10}
                                            height={7}
                                        />
                                    </Link>
                                </div>
                                <div className="header-search-holder d-flex align-items-centers">
                                    <div className="header-search-location">
                                        <button
                                            type="button"
                                            className="text-capitalize d-flex align-items-center"
                                            data-bs-toggle="modal"
                                            data-bs-target="#district-Modal"
                                        >
                                            <Image
                                                src={`/images/store-location.svg`}
                                                alt="store-location"
                                                width={17}
                                                height={15}
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
                                                    <Image
                                                        src={`/images/search-icon.svg`}
                                                        alt="search-icon"
                                                        width={18}
                                                        height={18}
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
                                    <Link
                                        href="/login"
                                        className=" text-white text-capitalize d-flex align-items-center"
                                    >
                                        <Image
                                            src={`/images/login-icon.svg`}
                                            alt="login-icon"
                                            width={13}
                                            height={19}
                                        />
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/registration"
                                        className=" text-white text-capitalize d-flex align-items-center"
                                    >
                                        <Image
                                            src="/images/register-icon.svg"
                                            alt="register-icon"
                                            width={14}
                                            height={17}
                                        />
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className=" text-white text-capitalize d-flex align-items-center"
                                    >
                                        <span className="bg-white d-flex align-items-center">
                                            <Image
                                                src="/images/cart-icon.svg"
                                                alt="cart-icon"
                                                width={17}
                                                height={15}
                                            />
                                        </span>
                                        Cart
                                    </Link>
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
