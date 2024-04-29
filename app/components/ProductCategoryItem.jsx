import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCategoryItem = ({ categoryItem, demo = false }) => {
    const { banner, slug, title } = categoryItem;

    return (
        <div className="nh-categories-item">
            <div className="nh-categories-item-bg nh-hover-box-shadow">
                <div className="nh-categories-img image-hover-effect">
                    <Image
                        src={
                            demo
                                ? `${banner}`
                                : `${process.env.NEXT_PUBLIC_ROOT_URL}/${banner}`
                        }
                        className="img-fluid"
                        alt={title}
                        fill={true}
                    />
                </div>
                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                    <h4>
                        <Link href={`/brand/${slug}`}>{title}</Link>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryItem;
