import Link from "next/link";
import Image from "next/image";
import CategorySubMenu from "./CategorySubMenu";

const CategoryMainMenuList = ({ menuList }) => {
    const catImage = `https://v3.nagadhat.com/${menuList.logo}`;
    const categorySubMenuItem = menuList && menuList?.child_categories;
    const onCateLeftMenu = menuList && menuList?.on_slider_menu_view;
    const categoryStatus = menuList && menuList?.status;

    return (
        onCateLeftMenu === 1 &&
        categoryStatus === 1 && (
            <li className="menu-link">
                <Link
                    href="#"
                    className="link-item d-flex align-items-center justify-content-between"
                >
                    <p className="d-flex align-items-center">
                        <span>
                            <Image
                                width={23}
                                height={20}
                                src={catImage}
                                alt={menuList.title ? menuList.title : ""}
                            />
                        </span>
                        {menuList.title ? menuList.title : ""}
                    </p>
                    {categorySubMenuItem && categorySubMenuItem.length > 0 && (
                        <small>
                            <Image
                                width={32}
                                height={32}
                                src="/images/menu-arrow.svg"
                                alt="arrow icon"
                            />
                        </small>
                    )}
                </Link>
                {categorySubMenuItem && categorySubMenuItem.length > 0 && (
                    <ul className="sub-category-menu">
                        {categorySubMenuItem.map((subMenuItem) => (
                            <CategorySubMenu
                                key={subMenuItem.id}
                                subMenuItem={subMenuItem}
                            />
                        ))}
                    </ul>
                )}
            </li>
        )
    );
};

export default CategoryMainMenuList;
