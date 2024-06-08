import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartButton from "./AddToCartButton";
import Like from "./Like";

function ProductCard({ item }) {
  const image = `https://v3.nagadhat.com/${item.product_thumbnail}`;
  const {
    product_name: title,
    slug,
    mrp_price: price,
    id: product_id,
    outlet_id,
  } = item;
  console.log(item);
  return (
    <div className="flash-sale-content-item">
      <div className="flash-sale-content-bg nh-hover-box-shadow d-flex flex-column justify-content-between">
        <div className="flash-sale-content-img image-hover-effect">
          <Image src={image} alt={title} fill={true} />
        </div>
        <div className="flash-sale-content-info text-hover-effect">
          <div className="">
            <h4>
              <Link
                href={`/products/get-product-details?outlet_id=${outlet_id}&product_id=${product_id}`}
                target="_blank"
              >
                {title}
              </Link>
            </h4>
            <strong>৳ {price}</strong>
          </div>
          <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
            <AddToCartButton />
            <Like />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
