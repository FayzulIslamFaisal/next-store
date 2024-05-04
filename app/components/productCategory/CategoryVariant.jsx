import CategoryVariantItems from "./CategoryVariantItems";
import ViewMoreLink from "./ViewMoreLink";

const CategoryVariant = ({ variantData, mergeId, showFullList, setShowFullList }) => {


    return (
        <div className="product-brand-category-area sub-category-pb40">
            <div className="product-brand-category-list">
                {showFullList ? (
                    variantData.map((brandItem) => (
                        <CategoryVariantItems
                            key={brandItem.id}
                            brandItem={brandItem}
                            mergeId={mergeId}
                        />
                    ))
                ) : (
                    variantData.slice(0, 3).map((brandItem) => (
                        <CategoryVariantItems
                            key={brandItem.id}
                            brandItem={brandItem}
                            mergeId={mergeId}
                        />
                    ))
                )}
                {!showFullList && (
                    <ViewMoreLink setShowFullList={setShowFullList} />
                )}
            </div>
        </div>
    );
};

export default CategoryVariant;
