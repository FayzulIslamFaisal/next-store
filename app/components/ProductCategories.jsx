import ProductCategoryItem from "./ProductCategoryItem"

const ProductCategories = ({ categoryProductData }) => {

    return (
        <div className="row nh-categories-row">
            <div className="col-md-12">
                <div className="nh-categories-holder">
                    {
                        categoryProductData.map((itme) => {
                            return (
                                <ProductCategoryItem key={itme.altText} categoryItem={itme} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCategories