
import CategoryMainMenuList from "./CategoryMainMenuList";

const CategoryMainMenu = async ({ categoryMenu }) => {
    const categorytMenuList = await categoryMenu;
    const menuItems = await categorytMenuList?.results || [];
    return (
        <>
            <ul className="category-menu-area">
                {
                    Array.isArray(menuItems) && menuItems.map((menuItem) => (
                        <CategoryMainMenuList
                            key={menuItem.id}
                            menuList={menuItem}
                        />
                    ))
                }
            </ul>
        </>
    )
}

export default CategoryMainMenu