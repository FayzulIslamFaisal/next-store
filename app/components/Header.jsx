"use client";
import { useState, useEffect } from "react";
import MiniNav from "./MiniNav";
import MainNav from "./MainNav";
import HeroSlider from "./HeroSlider";
import { useParams } from "next/navigation";

function Header() {
    const path = useParams();
    const [isSticky, setSticky] = useState(false);
    const [isObserverMenuVisible, setObserverMenuVisible] = useState(false);
    const [isCategoryHoverMenu, setCategoryHoverMenu] = useState(false);
    const [showMiniVisible, setMiniMenuVisible] = useState(true);
    useEffect(() => {
        const handleScrollPosition = () => {
            const scrollPosition = window.scrollY;
            scrollPosition > 5 ? setSticky(true) : setSticky(false);
            scrollPosition > 380
                ? setObserverMenuVisible(true)
                : setObserverMenuVisible(false);
            scrollPosition > 550
                ? setMiniMenuVisible(false)
                : setMiniMenuVisible(true);
        };

        window.addEventListener("scroll", handleScrollPosition);
        return () => {
            window.removeEventListener("scroll", handleScrollPosition);
        };
    }, []);

    const scrollOption = {
        isObserverMenuVisible,
        isCategoryHoverMenu,
        setCategoryHoverMenu,
    };

    return (
        <header className={`${isSticky ? "header-sticky" : ""}`}>
            <div className="header-wrapper">
                <div className="container header-container">
                    {showMiniVisible && <MiniNav />}
                    <MainNav {...scrollOption} />
                    {!path && <HeroSlider />}
                </div>
            </div>
        </header>
    );
}

export default Header;
