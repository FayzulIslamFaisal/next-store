import Link from "next/link";

const SubCategoryListItems = ({ categoryItem }) => {
    const { title, slug: path } = categoryItem;
    return (
        <>
            <Link href={path ? path : "#"}>{title} </Link>
        </>
    );
};

export default SubCategoryListItems;
