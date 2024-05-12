import MainSlider from "./MainSlider";
import { getHomeSlider } from "../services/getHomeSlider";
import CategoryMainMenu from "./CategoryMainMenu";
import { getCategoryMenu } from "../services/getCategoryMenu";
import { Suspense } from 'react';

async function HeroSlider() {

    const categoryMenuOption = getCategoryMenu();
    const sliderData = getHomeSlider();
    const sliderOption = await sliderData;
    const { sliders: sliderOptionData } = sliderOption.results;

    return (
        <div className="hero-slider-main-section">
            <div className="container">
                <section className="hero-slider-area">
                    <div className=" hero-slider-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-slider-main-box ">
                                    <div className="category-menu-holder hero-slider-main-item">
                                        <Suspense fallback="<h1>Loding Category Menu...</h1>">
                                            <CategoryMainMenu categoryMenu={categoryMenuOption} />
                                        </Suspense>
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
