
import Link from "next/link";

const CategorySubMenu = ({ subMenuItem }) => {
    return (
        <li>
            <Link href="#">
                {subMenuItem.title ? subMenuItem.title : ""}
            </Link>
        </li>
    )
}

export default CategorySubMenu