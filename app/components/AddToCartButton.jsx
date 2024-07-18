"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
    addToCartInLocalStorage,
    addToCartProductList,
    setProductData,
} from "../utils";
import { useSession } from "next-auth/react";
import { addToCartProduct } from "../services/postAddToCartAfterLogin";
import { useDispatch, useSelector } from "react-redux";
import { setAddToCart } from "../store/cartSlice";
import { fetchCartProducts } from "../services/getShowAddToCartProduct";
import { useRouter } from "next/navigation";

//  function to check if all three properties (variation_size, variation_color, variation_weight) are present and not null in the decorateVariation object. If they are, the function will only check the first two properties (variation_size and variation_color) against selectedVariantKey.

function findMissingProperties(decorateVariation, selectedVariantKey) {
    const requiredKeys = [
        "variation_size",
        "variation_color",
        "variation_weight",
    ];

    const mainKeys = ["variation_size", "variation_color"];

    const missingProperties = [];

    decorateVariation?.forEach((variant) => {
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
    selectedVariantKeys = [],
    decorateVariation = [],
    setProductVariationError,
    productPrice,
    quantity,
    selectedVariants,
    selectedVariantProductInfo,
    isDetailsPage = false,
}) {
    const { status, data: session } = useSession();
    console.log(
        "====================================selectedVariants",
        selectedVariants
    );
    const dispatch = useDispatch();
    const router = useRouter();
    // Function to handle the "Add To Cart" button click event
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
                        if (isDetailsPage) {
                            setProductVariationError(" ");
                        }
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
                            const updatedCartProducts = await fetchCartProducts(
                                session?.accessToken
                            );

                            dispatch(
                                setAddToCart({
                                    hasSession: true,
                                    length: updatedCartProducts?.data?.length,
                                })
                            );
                        } else {
                            addToCartInLocalStorage(addToCartInfo);
                            const addToCartProductLength =
                                addToCartProductList();
                            dispatch(
                                setAddToCart({
                                    hasSession: false,
                                    length: addToCartProductLength.length,
                                })
                            );
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
                        const updatedCartProducts = await fetchCartProducts(
                            session?.accessToken
                        );
                        console.log(
                            "updatedCartProducts cart page ===",
                            updatedCartProducts
                        );
                        dispatch(
                            setAddToCart({
                                hasSession: true,
                                length: updatedCartProducts?.data?.length,
                            })
                        );
                    } else {
                        addToCartInLocalStorage(addToCartInfo);
                        const addToCartProductLength = addToCartProductList();
                        dispatch(
                            setAddToCart({
                                hasSession: false,
                                length: addToCartProductLength.length,
                            })
                        );
                    }
                }
            }
        }
    };

    // Function to handle the "Buy Now" button click event
    const handleBuyNow = async (e, title) => {
        e.preventDefault();
        if (title) {
            if (productInfo) {
                console.log("Hello world");
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

                        setProductData(addToCartInfo);
                        router.push("/shipping-page/buy-now");
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

                    setProductData(addToCartInfo);
                    router.push("/shipping-page/buy-now");
                }
            }
        }
    };

    return (
        <div className="add-to-cart-btn">
            <Link
                href={path}
                className={`add-to-cart-link ${buyNowBtn} ${fullWidth}`}
                onClick={(e) => {
                    !title
                        ? handleAddToCard(e, title)
                        : title == "BUY NOW" && handleBuyNow(e, title);
                }}
            >
                {!title ? "ADD TO CART" : title}
            </Link>
        </div>
    );
}

export default AddToCartButton;
