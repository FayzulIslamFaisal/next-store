import Link from "next/link"

const SubCategoryListItems = ({ categoryItem }) => {
    const { title, path } = categoryItem;
    return (
        <>
            <li><Link href={path}>{title} </Link></li>
        </>
    )
}

export default SubCategoryListItems