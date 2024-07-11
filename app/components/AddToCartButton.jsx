"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { addToCartInLocalStorage } from "../utils";
import { useSession } from "next-auth/react";
import { addToCartProduct } from "../services/postAddToCartAfterLogin";

//  function to check if all three properties (variation_size, variation_color, variation_weight) are present and not null in the decorateVariation object. If they are, the function will only check the first two properties (variation_size and variation_color) against selectedVariantKey.

function findMissingProperties(decorateVariation, selectedVariantKey) {
    const requiredKeys = [
        "variation_size",
        "variation_color",
        "variation_weight",
    ];

    const mainKeys = ["variation_size", "variation_color"];

    const missingProperties = [];

    decorateVariation.forEach((variant) => {
        const allRequiredKeysPresent = requiredKeys.every(
            (key) => variant[key] !== null && variant[key] !== undefined
        );

        if (allRequiredKeysPresent) {
            mainKeys.forEach((key) => {
                if (!selectedVariantKey.includes(key)) {
                    if (!missingProperties.includes(key)) {
                        missingProperties.push(key);
                    }
                }
            });
        } else {
            requiredKeys.forEach((key) => {
                if (
                    variant[key] !== null &&
                    variant[key] !== undefined &&
                    !selectedVariantKey.includes(key)
                ) {
                    if (!missingProperties.includes(key)) {
                        missingProperties.push(key);
                    }
                }
            });
        }
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
    selectedVariantProductInfo,
}) {
    const { status, data: session } = useSession();
    console.log("selectedVariantKeys", selectedVariantKeys);
    console.log("decorateVariation", decorateVariation);
    const handleAddToCard = async (e, title) => {
        e.preventDefault();
        if (!title) {
            if (productInfo) {
                if (productInfo?.variations?.length > 0) {
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
                            product_id: productInfo?.id,
                            product_name: productInfo?.product_name,
                            price: productPrice?.prices,
                            discountPrice: productPrice?.discountPrice,
                            outlet_id: productInfo?.outlet_id,
                            product_thumbnail: productInfo?.product_thumbnail,
                            quantity: quantity,
                            selectedVariants: selectedVariants,
                            outlet_id: 3,
                            location_id: 47,
                            order_type: "Regular",
                            product_variation_id:
                                selectedVariantProductInfo?.product_variation_id,
                            discount_type:
                                selectedVariantProductInfo?.discount_type,
                        };
                        if (session) {
                            await addToCartProduct(
                                addToCartInfo,
                                session.accessToken
                            );
                        } else {
                            addToCartInLocalStorage(addToCartInfo);
                        }
                    }
                } else {
                    const addToCartInfo = {
                        product_id: productInfo?.id,
                        product_name: productInfo?.product_name,
                        price: productPrice?.prices,
                        discountPrice: productPrice?.discountPrice,
                        outlet_id: productInfo?.outlet_id,
                        product_thumbnail: productInfo?.product_thumbnail,
                        quantity: quantity,
                        outlet_id: 3,
                        location_id: 47,
                        order_type: "Regular",
                        product_variation_id: null,
                        discount_type: productInfo?.discount_type,
                    };
                    if (session) {
                        await addToCartProduct(
                            addToCartInfo,
                            session.accessToken
                        );
                    } else {
                        addToCartInLocalStorage(addToCartInfo);
                    }
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
