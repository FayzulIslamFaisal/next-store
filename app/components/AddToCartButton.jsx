"use client";

import Link from "next/link";

function AddToCartButton({ title = "", path = "#", buyNowBtn }) {
    return (
        <div className="add-to-cart-btn">
            <Link
                href={path}
                className={`add-to-cart-link ${buyNowBtn}`}
                onClick={(e) => {
                    e.preventDefault();
                    console.log("added to cart");
                }}
            >
                {!title ? "ADD TO CART" : title}
            </Link>
        </div >
    );
}

export default AddToCartButton;
