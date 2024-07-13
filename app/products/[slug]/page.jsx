import React from "react";
import ProductSinglePage from "./ProductDetails";

const ProductDetailsShows = ({ params }) => {
    return (
        <div>
            <ProductSinglePage params={params}></ProductSinglePage>
        </div>
    );
};

export default ProductDetailsShows;
