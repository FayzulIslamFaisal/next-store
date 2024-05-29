import Head from "next/head";
import ProductImage from "./ProductImage";
import ProductInformetion from "./ProductInformetion";
import ProductLongDescription from "./ProductLongDescription";

const ProductLeftSide = ({ productInfo }) => {
  return (
    <>
      <div className=" col-xl-9">
        <div className="row">
          <ProductImage />
          <ProductInformetion productInfo={productInfo} />
        </div>
        <ProductLongDescription productInfo={productInfo} />
      </div>
    </>
  );
};

export default ProductLeftSide;
