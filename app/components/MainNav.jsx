"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SignoutBtn from "./SignoutBtn";
import { getHomeSearchProduct } from "../services/getHomeSearchProduct";
import ProductSearchResult from "./ProductSearchResult";
import ProductSearchResultMobile from "./ProductSearchResultMobile";

function MainNav({
    isObserverMenuVisible,
    isCategoryHoverMenu,
    setCategoryHoverMenu,
    authStatus,
}) {
    const [search, setSearch] = useState("");
    const [searchProduct, setSearchProduct] = useState([]);
    const searchParams = useSearchParams();
    let districtId = searchParams.get("districtId");
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        const fetchSearchProduct = async () => {
            if (!search || search.length < 3) {
                setSearchProduct([]);
                return;
            }

            if (!districtId) {
                districtId = 47;
            }
            const productData = await getHomeSearchProduct(districtId, search);
            if (productData?.results) {
                const allSearchProducts = [
                    ...productData.results.flash_sales_product,
                    ...productData.results.just_for_you.for_you_products,
                ];

                setSearchProduct(allSearchProducts);
            }
        };
        fetchSearchProduct();
    }, [search, districtId]);

    const isSearchProductAvailable = () => {
        return searchProduct.length !== 0;
    };

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
                            <Link href="/" className="d-inline-block">
                                <Image
                                    width={0}
                                    height={43}
                                    sizes="100vw"
                                    src="/images/logo.svg"
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
                                        src="/images/store-location.svg"
                                        alt="store-location"
                                        width={17}
                                        height={15}
                                    />
                                    Dhaka City, Dhaka
                                </button>
                            </div>
                            <div className="header-search-field">
                                <form action="#">
                                    <div className="input-group align-items-center">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="search"
                                            placeholder="Search in Nagad Hat..."
                                            onChange={handleSearchChange}
                                        />
                                        <button
                                            className="search-icon-btn d-flex align-items-center justify-content-center"
                                            type="button"
                                        >
                                            <Image
                                                src="/images/search-icon.svg"
                                                alt="search-icon"
                                                width={18}
                                                height={18}
                                            />
                                        </button>
                                    </div>
                                </form>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <div className="search-modal-info-inner d-flex align-content-center gap-4">
                              <div className="search-modal-info-img">
                                <Image
                                  fill
                                  src="/images/dan-cake-chocolate-muffin-30g-24-pieces_550.jpeg"
                                  alt="BabyCare"
                                />
                            )}
                        </div>
                        <div className="header-auth-area d-flex justify-content-end">
                            <ul className="d-flex align-items-center">
                                <li>
                                    {authStatus === "authenticated" ? (
                                        <SignoutBtn />
                                    ) : (
                                        <Link
                                            href="/login"
                                            className="text-white text-capitalize d-flex align-items-center"
                                        >
                                            <Image
                                                src="/images/login-icon.svg"
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
                                        className="text-white text-capitalize d-flex align-items-center"
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
                                        className="text-white text-capitalize d-flex align-items-center"
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
                            <Link href="/" className="d-inline-block">
                                <Image
                                    width={0}
                                    height={43}
                                    sizes="100vw"
                                    alt="logo"
                                    src="/images/logo.svg"
                                    style={{ width: "100%" }}
                                />
                            </Link>
                        </div>
                      </form>
                    </div>
                    <div className="product-search-modal-area d-none">
                      <div className="product-search-modal-content">
                        <div className="search-modal-title">
                          <h4>category suggestions</h4>
                        </div>
                        <div className="search-modal-info">
                          <ul>
                            <li>
                              <Link href="#">Food & Beverage</Link>
                            </li>
                            <li>
                              <Link href="#">Baby Food</Link>
                            </li>
                            <li>
                              <Link href="#">Food & Beverage</Link>
                            </li>
                            <li>
                              <Link href="#">Daily Foods</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="search-modal-title">
                          <h4>products</h4>
                        </div>
                        <div className="search-modal-info">
                          <ul className="similer-search-product-list">
                            <li>
                              <Link href="#">
                                <div className="search-modal-info-inner d-flex align-content-center gap-4">
                                  <div className="search-modal-info-img">
                                    <Image
                                      fill
                                      src="/images/primaSatgebabyFood.jpg"
                                      alt="BabyCare"
                                    />
                                  </div>
                                  <div className="search-modal-info-details">
                                    <p>Satge 1 baby Food</p>
                                    <strong>৳ 730</strong>
                                  </div>
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
                                                src="/images/store-location.svg"
                                                alt="store-location"
                                                width={17}
                                                height={15}
                                            />
                                            Dhaka City, Dhaka
                                        </button>
                                    </div>
                                    <div className="header-search-field">
                                        <form action="#">
                                            <div className="input-group align-items-center">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="search"
                                                    placeholder="Search in Nagad Hat..."
                                                    onChange={
                                                        handleSearchChange
                                                    }
                                                />
                                                <button
                                                    className="search-icon-btn d-flex align-items-center justify-content-center"
                                                    type="button"
                                                >
                                                    <Image
                                                        src="/images/search-icon.svg"
                                                        alt="search-icon"
                                                        width={18}
                                                        height={18}
                                                    />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    {search && isSearchProductAvailable() && (
                                        <ProductSearchResultMobile
                                            searchProduct={searchProduct}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="header-auth-area d-flex justify-content-end">
                            <ul className="d-flex align-items-center">
                                <li>
                                    <Link
                                        href="/login"
                                        className="text-white text-capitalize d-flex align-items-center"
                                    >
                                        <Image
                                            src="/images/login-icon.svg"
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
                                        className="text-white text-capitalize d-flex align-items-center"
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
                                        className="text-white text-capitalize d-flex align-items-center"
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
