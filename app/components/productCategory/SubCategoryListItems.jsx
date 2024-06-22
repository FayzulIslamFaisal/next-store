import Link from "next/link";

const SubCategoryListItems = ({ categoryItem }) => {
  const { title, slug: path } = categoryItem;
  return (
    <>
      <li>
        <Link href={path ? path : "#"}>{title} </Link>
      </li>
    </>
  );
};

export default SubCategoryListItems;
