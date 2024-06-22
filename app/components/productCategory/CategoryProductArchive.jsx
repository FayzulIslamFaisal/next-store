import CategoryProductArchiveItems from "./CategoryProductArchiveItems";

const CategoryProductArchive = ({ productArvhiveList }) => {
  return (
    <div className="product-category-grid-area">
      {Array.isArray(productArvhiveList) &&
        productArvhiveList?.map((productItem) => (
          <CategoryProductArchiveItems
            key={productItem.id}
            productItem={productItem}
          />
        ))}
    </div>
  );
};

export default CategoryProductArchive;
