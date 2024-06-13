import SubCategoryListItems from "./SubCategoryListItems";

const SubCategoryList = ({ subCategoryData }) => {
    const hasLongSubTitle = subCategoryData.some((item) => item?.title.length > 10);
  return (
    <div className={`product-sub-category-area sub-category-pb40 ${hasLongSubTitle ? 'sub-category-fixed-height' : ''}`}>
      <ul >
        {Array.isArray(subCategoryData) &&
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
