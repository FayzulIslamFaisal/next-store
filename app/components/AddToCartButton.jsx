"use client";

import Link from "next/link";
import { useEffect } from "react";
import { addToCartInLocalStorage } from "../utils";

function AddToCartButton({
    title = "",
    path = "#",
    buyNowBtn,
    fullWidth,
    productInfo,
    selectedVariantKeys,
    setProductVariationError,
    productPrice,

    quantity,
}) {
    const handleAddToCard = (e, title) => {
        e.preventDefault();
        if (!title) {
            console.log(
                "productInfo?.product_thumbnail",
                productInfo?.product_thumbnail
            );
            const hasColor = selectedVariantKeys.includes("variation_color");
            const hasSize = selectedVariantKeys.includes("variation_size");

            selectedVariantKeys.map((selectedKey) => {
                console.log(selectedKey);
            });

            if (selectedVariantKeys.length == 2 && hasColor && hasSize) {
                setProductVariationError(" ");
                const addToCartInfo = {
                    id: productInfo?.id,
                    product_name: productInfo?.product_name,
                    price: productPrice?.prices,
                    discountPrice: productPrice?.discountPrice,
                    outlet_id: productInfo?.outlet_id,
                    product_thumbnail: productInfo?.product_thumbnail,
                    quantity: quantity,
                };
                addToCartInLocalStorage(addToCartInfo);
            } else if (hasColor || hasSize) {
                setProductVariationError(
                    `Please select  ${hasColor ? "size" : "color"} `
                );
            } else {
                setProductVariationError("Please select the variation");
            }
        }
    };

    return (
        <div className="add-to-cart-btn">
            <Link
                href={path}
                className={`add-to-cart-link ${buyNowBtn} ${fullWidth}`}
                onClick={(e) => handleAddToCard(e, title)}
            >
                {!title ? "ADD TO CART" : title}
            </Link>
        </div>
    );
}

export default AddToCartButton;
