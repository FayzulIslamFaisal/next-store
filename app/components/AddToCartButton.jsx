"use client";

import Link from "next/link";

function AddToCartButton({ title = "", path = "#", buyNowBtn, fullWidth }) {
  return (
    <div className="add-to-cart-btn">
      <Link
        href={path}
        className={`add-to-cart-link ${buyNowBtn} ${fullWidth}`}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {!title ? "ADD TO CART" : title}
      </Link>
    </div>
  );
}

export default AddToCartButton;
