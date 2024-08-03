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
    getTotalQuantity,
    storeUserAgent,
} from "../utils";
import { useDispatch } from "react-redux";
import { setAddToCart } from "../store/cartSlice";
import { fetchCartProducts } from "../services/getShowAddToCartProduct";

function Header() {
    const path = useParams();
    const [isSticky, setSticky] = useState(false);
    const [isObserverMenuVisible, setObserverMenuVisible] = useState(false);
    const [isCategoryHoverMenu, setCategoryHoverMenu] = useState(false);
    const [isResponsive, setResponsive] = useState(false);
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

    const { status, data: session } = useSession();
    useEffect(() => {
        storeUserAgent();
    }, []);

    const dispatch = useDispatch();

    useEffect(() => {
        const setCartProductLength = async () => {
            if (session) {
                const updatedCartProducts = await fetchCartProducts(
                    session?.accessToken
                );
                if (updatedCartProducts?.success) {
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
    }, [session, dispatch]);

    console.log("=>>> get login status from header page", status);
    console.log("=>>> get login session from header page", session);
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
