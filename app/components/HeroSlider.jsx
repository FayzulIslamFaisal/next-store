"use client";
import MainSlider from "./MainSlider";
import CategoryMainMenu from "./CategoryMainMenu";
import { getCategoryMenu } from "../services/getCategoryMenu";
import { filterBySliderMenuView } from "../utils";
import { getHomeSlider } from "../services/getHomeSlider";
import { useEffect, useState } from "react";

function HeroSlider() {
    const [sliderOptionData, setSliderOptionData] = useState([]);
    const [categoryMenuOption, setCategoryMenuOption] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const categoryItem = await getCategoryMenu();
            const filteredList = filterBySliderMenuView(categoryItem);
            setCategoryMenuOption(filteredList.slice(0, 10));

            const sliderData = await getHomeSlider();
            setSliderOptionData(sliderData.results.sliders);
        }
        fetchData();
    }, []);

    return (
        <div className="hero-slider-main-section">
            <div className="container">
                <section className="hero-slider-area">
                    <div className=" hero-slider-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-slider-main-box ">
                                    <div className="category-menu-holder hero-slider-main-item">
                                        {categoryMenuOption && (
                                            <CategoryMainMenu
                                                categoryMenu={
                                                    categoryMenuOption
                                                }
                                            />
                                        )}
                                    </div>
                                    {sliderOptionData && (
                                        <MainSlider
                                            sliderOptionData={sliderOptionData}
                                        />
                                    )}
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
