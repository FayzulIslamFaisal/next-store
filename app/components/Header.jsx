"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import MiniNav from "./MiniNav";
import MainNav from "./MainNav";
import HeroSlider from "./HeroSlider";
import CategoryHoverMenu from "./CategoryHoverMenu";

function Header() {
    const path = useParams();
    const [isSticky, setSticky] = useState(false);
    const [isObserverMenuVisible, setObserverMenuVisible] = useState(false);
    const [isCategoryHoverMenu, setCategoryHoverMenu] = useState(false);

    useEffect(() => {
        const handleScrollPosition = () => {
            let scrollPosition = 0;
            if (typeof window !== "undefined") {
                scrollPosition = window.scrollY;
            }
            scrollPosition > 5 ? setSticky(true) : setSticky(false);
            if (scrollPosition > 450) {
                setObserverMenuVisible(true);
            } else {
                setObserverMenuVisible(false);
                setCategoryHoverMenu(false);
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScrollPosition);
        }
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
        <>
            <header className={`${isSticky ? "header-sticky" : ""}`}>
                <div className="header-wrapper">
                    <div className="container header-container">
                        {!isObserverMenuVisible && <MiniNav />}
                        <MainNav {...scrollOption} />
                        {!path && <HeroSlider />}
                    </div>
                </div>
            </header>
            <CategoryHoverMenu isActive={isCategoryHoverMenu} />
        </>
    );
}

export default Header;
