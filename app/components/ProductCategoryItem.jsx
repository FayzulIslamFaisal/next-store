import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCategoryItem = ({ categoryItem }) => {
    let imageurl = `https://v3.nagadhat.com/${categoryItem.logo}`;
    const altText = categoryItem?.title ? categoryItem?.title : "";
    const { slug, title } = categoryItem;
    let path = slug;

    // Function to truncate title
    const truncateTitle = (title, maxLength = 24) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + "...";
        }
        return title;
    };

    if (!path) {
        path = "#";
    }

<<<<<<< HEAD
    return (
        <div className="nh-categories-item">
            <div className="nh-categories-item-bg nh-hover-box-shadow">
                <Link href={path}>
                    <div className="nh-categories-img image-hover-effect">
                        <Image
                            src={imageurl}
                            className="img-fluid"
                            alt={altText}
                            fill={true}
                        />
                    </div>
                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                        <h4>{truncateTitle(title)}</h4>
                    </div>
                </Link>
            </div>
        </div>
    );
=======
  return (
    <div className="nh-categories-item">
      <div className="nh-categories-item-bg nh-hover-box-shadow">
      <Link href={`category/${path}`}>
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
            {truncateTitle(title)}
          </h4>
        </div>
        </Link>
      </div>
    </div>
  );
>>>>>>> 7c8dc8d (product Category page dynamic)
};

export default ProductCategoryItem;
