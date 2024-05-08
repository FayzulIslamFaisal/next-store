import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCategoryItem = ({ categoryItem }) => {
    let imageurl = `https://v3.nagadhat.com/${categoryItem.logo}`;
    const altText = categoryItem?.title ? categoryItem?.title : "";
    const { slug: path, title } = categoryItem;

    return (
        <div className="nh-categories-item">
            <div className="nh-categories-item-bg nh-hover-box-shadow">
                <div className="nh-categories-img image-hover-effect">
                    <Image
                        src={imageurl}
                        className="img-fluid"
                        alt={altText}
                        fill={true}
                    />
                </div>
                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                    <h4>
                        <Link href={path ?? ""}>{title}</Link>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryItem;
