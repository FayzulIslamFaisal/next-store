"use client";
import MiniNav from "./MiniNav";
import MainNav from "./MainNav";
import HeroSlider from "./HeroSlider";
import { useParams } from "next/navigation";

function Header() {
    const path = useParams();
    return (
        <header>
            <div className="header-wrapper">
                <div className="container header-container">
                    <MiniNav />
                    <MainNav />
                    {!path && <HeroSlider />}
                </div>
            </div>
        </header>
    );
}

export default Header;
