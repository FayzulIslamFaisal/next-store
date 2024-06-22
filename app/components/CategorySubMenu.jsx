
import Link from "next/link";

const CategorySubMenu = ({ subMenuItem }) => {
    return (
        <li>
            <Link href={`/category/${subMenuItem.slug}`} >
                {subMenuItem.title ? subMenuItem.title : ""}
            </Link>
        </li>
    )
}

export default CategorySubMenu