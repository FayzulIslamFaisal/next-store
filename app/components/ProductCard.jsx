import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartButton from "./AddToCartButton";
import Like from "./Like";
import { NagadhatPublicUrl, truncateTitle } from "../utils";

function ProductCard({ item }) {
    const image = `${NagadhatPublicUrl}/${item.product_thumbnail}`;
    const {
        product_name: title,
        slug,
        mrp_price: price,
        id: product_id,
        outlet_id,
        discount_amount,
    } = item;

    const defaultVariant = item?.variations?.find(
        (variant) => variant.variations_default === 1
    );

    const selectedVariantProductInfo = {
        product_variation_id: defaultVariant?.id,
        discount_type: defaultVariant?.discount_type,
    };

    const productPrice = {
        prices: "",
        discountPrice: "",
    };
    let productStoke;

    if (item?.variations?.length > 0) {
        productPrice.prices =
            defaultVariant?.discount_amount > 0
                ? defaultVariant?.mrp_price - defaultVariant?.discount_amount
                : defaultVariant?.mrp_price;

        productPrice.discountPrice =
            defaultVariant?.discount_amount > 0
                ? defaultVariant?.mrp_price
                : "";
        productStoke =
            defaultVariant?.variation_max_quantity === null
                ? 0
                : defaultVariant?.variation_max_quantity;
    } else {
        (productPrice.prices =
            item?.price?.discounted_price !== 0
                ? item?.price?.discounted_price
                : item?.price?.regular_price),
            (productPrice.discountPrice =
                item?.price?.discounted_price > 0 &&
                item?.price?.regular_price);
        productStoke = item?.max_quantity === null ? 0 : item?.max_quantity;
    }

    const selectedVariants = [];
    if (defaultVariant?.variation_size !== null) {
        selectedVariants.push({
            variation_size: defaultVariant?.variation_size?.title,
        });
    }

    if (defaultVariant?.variation_color !== null) {
        selectedVariants.push({
            variation_color: defaultVariant?.variation_color?.title,
        });
    }

    if (defaultVariant?.variation_weight !== null) {
        selectedVariants.push({
            variation_weight: defaultVariant?.variation_weight?.title,
        });
    }

    console.log(selectedVariants);

    return (
        <div className="flash-sale-content-item">
            <Link
                href={`/products/get-product-details?outlet_id=${outlet_id}&product_id=${product_id}`}
                target="_blank"
            >
                <div className="flash-sale-content-bg nh-hover-box-shadow d-flex flex-column justify-content-between">
                    <div className="flash-sale-content-img image-hover-effect">
                        <Image src={image} alt={title} fill={true} />
                    </div>
                    <div className="flash-sale-content-info text-hover-effect">
                        <div className="">
                            <h4>{truncateTitle(title, 40)}</h4>
                            <div className=" d-flex align-items-center justify-content-between">
                                {price && (
                                    <strong>
                                        ৳{" "}
                                        {discount_amount
                                            ? price - discount_amount
                                            : price}
                                    </strong>
                                )}

                                {discount_amount && (
                                    <strong className="product-discount-price">
                                        ৳{" "}
                                        {discount_amount ? (
                                            <del>{price}</del>
                                        ) : null}
                                    </strong>
                                )}
                            </div>
                        </div>
                        <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                            <AddToCartButton
                                productInfo={item}
                                quantity={1}
                                selectedVariantProductInfo={
                                    selectedVariantProductInfo
                                }
                                selectedVariants={selectedVariants}
                                productPrice={productPrice}
                                productStoke={productStoke}
                            />
                            <Like />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
