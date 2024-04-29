
import CategoryColorVariantItems from "./CategoryColorVariantItems"
import ViewMoreLink from "./ViewMoreLink"

const CategoryColorVariant = ({ colorVariant }) => {
    return (
        <div className="product-color-category-area sub-category-pb40">
            <div className="product-details-inner-quantity d-flex align-items-center">
                {
                    colorVariant.map((colorItem) => <CategoryColorVariantItems key={colorItem.id} colorItem={colorItem} />
                    )
                }
            </div>
            <ViewMoreLink />
        </div>
    )
}

export default CategoryColorVariant