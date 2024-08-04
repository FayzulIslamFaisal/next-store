"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import MiniNav from "./MiniNav";
import MainNav from "./MainNav";
import HeroSlider from "./HeroSlider";
import CategoryHoverMenu from "./CategoryHoverMenu";
import MobileNav from "./MobileNav";
import {
    addToCartProductList,
    apiBaseUrl,
    getTotalQuantity,
    storeUserAgent,
} from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { setAddToCart } from "../store/cartSlice";
import { fetchCartProducts } from "../services/getShowAddToCartProduct";

function Header() {
    const path = useParams();
    const { status, data: session } = useSession();
    const [isSticky, setSticky] = useState(false);
    const [isObserverMenuVisible, setObserverMenuVisible] = useState(false);
    const [isCategoryHoverMenu, setCategoryHoverMenu] = useState(false);
    const [isResponsive, setResponsive] = useState(false);
    const addToCartProductLength = useSelector(
        (state) => state.cart?.addToCartLength
    );
    useEffect(() => {
        const handleScrollPosition = () => {
            let scrollPosition = 0;
            let scrollPositionWidth = 0;
            if (typeof window !== "undefined") {
                scrollPosition = window.scrollY;
                scrollPositionWidth = window.innerWidth;
            }
            scrollPosition > 5 ? setSticky(true) : setSticky(false);
            scrollPositionWidth < 1200
                ? setResponsive(true)
                : setResponsive(false);
            if (scrollPosition > 450) {
                setObserverMenuVisible(true);
            } else {
                setObserverMenuVisible(false);
                setCategoryHoverMenu(false);
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScrollPosition);
            window.addEventListener("resize", handleScrollPosition);
        }
        return () => {
            window.removeEventListener("scroll", handleScrollPosition);
            window.removeEventListener("resize", handleScrollPosition);
        };
    }, []);

    const scrollOption = {
        isObserverMenuVisible,
        isCategoryHoverMenu,
        setCategoryHoverMenu,
    };

    const addToCartProduct = async (cartItems, accessToken) => {
        const response = await fetch(`${apiBaseUrl}/add-to-cart-product`, {
            method: "POST",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cart_items: cartItems }),
        });

        return response.json();
    };

    useEffect(() => {
        storeUserAgent();
    }, []);

    const dispatch = useDispatch();
    const handleCheckout = async () => {
        try {
            setLoading(true);
            if (session) {
                const cartProduct = addToCartProductList();
                await addToCartProduct(cartProduct);
                const updatedCartProducts = await fetchCartProducts();
                localStorage.removeItem("addToCart");

                if (updatedCartProducts.success) {
                    setCheckedProductCard(updatedCartProducts?.data);
                    const quantityTotal = getTotalQuantity(
                        updatedCartProducts?.data
                    );

                    dispatch(
                        setAddToCart({
                            hasSession: true,
                            length: quantityTotal,
                        })
                    );
                }
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    console.log("updated cart length", addToCartProductLength);
    useEffect(() => {
        const setCartProductLength = async () => {
            if (session) {
                const cartProduct = addToCartProductList();
                console.log(cartProduct);
                await addToCartProduct(cartProduct, session?.accessToken);
                const updatedCartProducts = await fetchCartProducts(
                    session?.accessToken
                );
                localStorage.removeItem("addToCart");

                if (updatedCartProducts?.success) {
                    const quantityTotal = getTotalQuantity(
                        updatedCartProducts?.data
                    );
                    console.log(quantityTotal, "quantityTotal");
                    dispatch(
                        setAddToCart({
                            hasSession: true,
                            length: quantityTotal,
                        })
                    );
                }
            } else {
                if (typeof window !== "undefined") {
                    const addToCart = addToCartProductList();
                    const quantityTotal = getTotalQuantity(addToCart);
                    dispatch(
                        setAddToCart({
                            hasSession: false,
                            length: quantityTotal,
                        })
                    );

                    dispatch(
                        setAddToCart({
                            hasSession: false,
                            length: quantityTotal,
                        })
                    );
                }
            }
        };

        setCartProductLength();
    }, [session?.accessToken, dispatch]);

    // console.log('=>>> get login token from header page', session?.accessToken);

    useEffect(() => {
        storeUserAgent();
    }, []);

    return (
        <>
            <header className={`${isSticky ? "header-sticky" : ""}`}>
                <div className="header-wrapper">
                    <div className="container header-container">
                        {!isObserverMenuVisible && !isResponsive && <MiniNav />}
                        {!isResponsive ? (
                            <MainNav {...scrollOption} authStatus={status} />
                        ) : (
                            <MobileNav />
                        )}
                        {!path && <HeroSlider />}
                    </div>
                </div>
            </header>
            <CategoryHoverMenu
                isActive={isCategoryHoverMenu}
                setCategoryHoverMenu={setCategoryHoverMenu}
            />
        </>
    );
}

export default Header;
