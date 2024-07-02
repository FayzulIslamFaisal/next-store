"use client";

import Link from "next/link";
import { useEffect } from "react";
import { addToCartInLocalStorage } from "../utils";

function findMissingProperties(decorateVariation, selectedVariantKey) {
    const variantKeys = [
        "variation_size",
        "variation_color",
        "variation_weight",
    ];
    const missingProperties = [];

    decorateVariation.forEach((variant) => {
        variantKeys.forEach((key) => {
            if (variant[key] !== null && !selectedVariantKey.includes(key)) {
                if (!missingProperties.includes(key)) {
                    missingProperties.push(key);
                }
            }
        });
    });

    return missingProperties;
}

function AddToCartButton({
    title = "",
    path = "#",
    buyNowBtn,
    fullWidth,
    productInfo,
    selectedVariantKeys,
    decorateVariation,
    setProductVariationError,
    productPrice,
    quantity,
    selectedVariants,
}) {
    const handleAddToCard = (e, title) => {
        e.preventDefault();
        if (!title) {
            if (productInfo) {
                if (productInfo.variations.length > 0) {
                    const result = findMissingProperties(
                        decorateVariation,
                        selectedVariantKeys
                    );

                    if (result?.length == 2) {
                        setProductVariationError("Please Select variant");
                    } else if (result?.length == 1) {
                        setProductVariationError(
                            `${
                                result[0]
                                    .split("_")[1]
                                    .charAt(0)
                                    .toUpperCase() +
                                result[0].split("_")[1].slice(1)
                            } not selected`
                        );
                    } else {
                        setProductVariationError(" ");
                        const addToCartInfo = {
                            id: productInfo?.id,
                            product_name: productInfo?.product_name,
                            price: productPrice?.prices,
                            discountPrice: productPrice?.discountPrice,
                            outlet_id: productInfo?.outlet_id,
                            product_thumbnail: productInfo?.product_thumbnail,
                            quantity: quantity,
                            selectedVariants: selectedVariants,
                        };

                        addToCartInLocalStorage(addToCartInfo);
                    }
                } else {
                    console.log("it's single product");
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
                }
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
