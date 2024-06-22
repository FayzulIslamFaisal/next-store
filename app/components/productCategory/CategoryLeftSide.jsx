import CategorySectionTitle from "./CategorySectionTitle";
import SubCategoryList from "./SubCategoryList";
import PriceRange from "./PriceRange";
import CategoryVariant from "./CategoryVariant";
import CategoryColorVariant from "./CategoryColorVariant";

const CategoryLeftSide = ({
  categoryByBrand,
  categoryByColor,
  categoryBySize,
  subCategoryTitle,
  categoryByMinPrice,
  categoryByMaxPrice,
}) => {
  const subCategoryData = subCategoryTitle;
  const brandData = categoryByBrand;
  const sizedData = categoryBySize;
  const colorData = categoryByColor;
  const shouldShowPriceRange = categoryByMinPrice && categoryByMaxPrice ;

  return (
    <aside className="product-category-left-Side">
      <div className="category-left-Side-info">
        {subCategoryData?.length > 0 && (
          <>
            <CategorySectionTitle title={`Sub Categories`} />
            <SubCategoryList subCategoryData={subCategoryData} />
          </>
        )}
        {shouldShowPriceRange && (
          <>
            <CategorySectionTitle title={`Price Range`} />
            <PriceRange categoryByMinPrice={categoryByMinPrice} categoryByMaxPrice={categoryByMaxPrice} />
          </>
        )}

        {categoryByBrand?.length > 0 && (
          <>
            <CategorySectionTitle title={`Brand`} />
            <CategoryVariant variantData={brandData} />
          </>
        )}
        {categoryByColor?.length > 0 && (
          <>
            <CategorySectionTitle title={`Color`} />
            <CategoryColorVariant colorVariant={colorData} />
          </>
        )}
        {categoryBySize?.length > 0 && (
          <>
            <CategorySectionTitle title={`Size`} />
            <CategoryVariant
              variantData={sizedData}
              mergeId={1}
              countItem={false}
            />
          </>
        )}
      </div>
    </aside>
  );
};

export default CategoryLeftSide;
