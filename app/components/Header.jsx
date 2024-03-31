import MiniNav from "./MiniNav";
import MainNav from "./MainNav";
import HeroSlider from "./HeroSlider";

function Header() {
    return (
        <header>
            <div className="header-wrapper">
                <div className="container header-container">
                    <MiniNav />
                    <MainNav />
                    <HeroSlider />
                </div>
            </div>
        </header>
    );
}

export default Header;
