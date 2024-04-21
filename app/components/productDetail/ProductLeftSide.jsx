
import ProductImage from "./ProductImage"
import ProductInformetion from "./ProductInformetion"
import ProductLongDescription from "./ProductLongDescription"

const ProductLeftSide = () => {

    return (
        <div className=" col-xl-9">
            <div className="row">
                <ProductImage />
                <ProductInformetion />
            </div>
            <ProductLongDescription />
        </div>
    )
}

export default ProductLeftSide