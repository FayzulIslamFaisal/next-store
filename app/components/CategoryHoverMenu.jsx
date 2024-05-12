
import { getCategoryMenu } from "../services/getCategoryMenu";
import CategoryMainMenu from "./CategoryMainMenu";

async function CategoryHoverMenu({ isActive, setCategoryHoverMenu }) {
    const categoryMenuOption = await getCategoryMenu();
    return (
        <div className="container">
            <div
                className={`observer-hover-menu ${isActive ? "active" : ""}`}
                onMouseLeave={() => setCategoryHoverMenu(false)}
            >
                <CategoryMainMenu categoryMenu={categoryMenuOption} />
            </div>
        </div>
    );
}

export default CategoryHoverMenu;
