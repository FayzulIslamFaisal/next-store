import ProductDeliveryDetail from "./ProductDeliveryDetail";
import SimilerProduct from "./SimilerProduct";

const ProductRightSide = ({ productInfo }) => {
    return (
        <div className="col-xl-3">
            <div className="product-sidebar">
                <ProductDeliveryDetail productInfo={productInfo} />
                {productInfo?.similarProduct?.length > 0 && (
                    <SimilerProduct productData={productInfo?.similarProduct} />
                )}
            </div>
        </div>
    );
};

export default ProductRightSide;
