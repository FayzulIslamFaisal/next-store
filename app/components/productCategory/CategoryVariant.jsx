import Link from 'next/link'
import CategoryVariantItems from './CategoryVariantItems'
import ViewMoreLink from './ViewMoreLink'

const CategoryVariant = ({ variantData, mergeId }) => {
    return (
        <div className="product-brand-category-area sub-category-pb40">
            <div className="product-brand-category-list">
                {
                    variantData.map((brandItem) => (<CategoryVariantItems key={brandItem.id} brandItem={brandItem} mergeId={mergeId} />))
                }
            </div>
            <ViewMoreLink />
        </div>
    )
}

export default CategoryVariant