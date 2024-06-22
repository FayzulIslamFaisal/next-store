import SubCategoryListItems from "./SubCategoryListItems";

const SubCategoryList = ({ subCategoryData }) => {
    return (
        <div
            className={`product-sub-category-area sub-category-pb40 ${
                subCategoryData.length >= 10 ? "sub-category-fixed-height" : ""
            }`}
        >
            <ul>
                {Array.isArray(subCategoryData) &&
                    subCategoryData.length &&
                    subCategoryData.map((categoryItem) => (
                        <SubCategoryListItems
                            key={categoryItem.id}
                            categoryItem={categoryItem}
                        />
                    ))}
            </ul>
        </div>
    );
};

export default SubCategoryList;
