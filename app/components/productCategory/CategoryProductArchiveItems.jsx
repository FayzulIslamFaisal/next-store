import Image from "next/image"
import Link from "next/link"
import StarRating from "./StarRating";
import AddToCartButton from "../AddToCartButton";

const CategoryProductArchiveItems = ({ productItem }) => {
    const { imageUrl, alttext, title, path, price, ratingCount, ratingImg } = productItem;
    const slicedTitle = title.length > 43 ? `${title.slice(0, 43)} ...` : title;
    return (
        <div className="flash-sale-content-item">
            <div className="flash-sale-content-bg nh-hover-box-shadow">
                <div className="product-category-image">
                    <div className="flash-sale-content-img image-hover-effect">
                        <Image
                            fill={true}
                            src={imageUrl}
                            className="img-fluid"
                            alt={alttext}
                        />
                    </div>
                </div>
                <div className="flash-sale-content-info text-hover-effect">
                    <h4>
                        <Link href={path}> {slicedTitle} </Link>
                    </h4>
                    <div className="category-product-price d-flex align-items-center justify-content-between  ">
                        <strong>৳ {price}</strong>
                        <StarRating ratingCount={ratingCount} ratingImg={ratingImg} />
                    </div>
                    <div className="add-to-cart-holder">
                        <AddToCartButton fullWidth={`category-product-add-btn`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryProductArchiveItems