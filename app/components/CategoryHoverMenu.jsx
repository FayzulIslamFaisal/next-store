"use client";
import { useEffect, useState } from "react";
import { getCategoryMenu } from "../services/getCategoryMenu";
import CategoryMainMenu from "./CategoryMainMenu";
import { filterBySliderMenuView } from "../utils";

function CategoryHoverMenu({ isActive, setCategoryHoverMenu }) {
    const [categoryMenuOption, setCategoryMenuOption] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getCategoryMenu();
            const filteredList = filterBySliderMenuView(data);
            setCategoryMenuOption(filteredList.slice(0, 10));
        }
        fetchData();
    }, []);

    return (
        <div className="container">
            <div
                className={`observer-hover-menu ${isActive ? "active" : ""}`}
                onMouseLeave={() => setCategoryHoverMenu(false)}
            >
                {categoryMenuOption && (
                    <CategoryMainMenu categoryMenu={categoryMenuOption} />
                )}
            </div>
        </div>
    );
}

export default CategoryHoverMenu;
