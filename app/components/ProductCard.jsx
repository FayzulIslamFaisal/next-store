import Link from "next/link";
import React from "react";

function ProductCard({ item }) {
    return (
        <div className="flash-sale-content-item">
            <div className="flash-sale-content-bg nh-hover-box-shadow">
                <div className="flash-sale-content-img image-hover-effect">
                    <img
                        src={item.image}
                        className="img-fluid"
                        alt={item.altText}
                    />
                </div>
                <div className="flash-sale-content-info text-hover-effect">
                    <h4>
                        <Link href={item.path}>{item.title}</Link>
                    </h4>
                    <strong>৳ {item.price}</strong>
                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                        {item.addToCart}
                        {item.like}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
