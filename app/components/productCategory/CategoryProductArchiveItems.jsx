import Image from "next/image";
import Link from "next/link";
// import StarRating from "./StarRating";
import AddToCartButton from "../AddToCartButton";
import { NagadhatPublicUrl } from "../../utils";

const CategoryProductArchiveItems = ({ productItem }) => {
    let imageUrl = null;
    const {
        product_name: title,
        slug: path,
        mrp_price: price,
        id,
        discount_amount,
    } = productItem;
    const slicedTitle =
        title?.length > 43 ? `${title.slice(0, 43)} ...` : title;
    if (productItem?.product_thumbnail) {
        imageUrl = `${NagadhatPublicUrl}/${productItem?.product_thumbnail}`;
    }

    return (
        <div className="flash-sale-content-item">
            <Link
                href={`/products/get-product-details?outlet_id=${3}&product_id=${id}`}
            >
                <div className="flash-sale-content-bg nh-hover-box-shadow">
                    <div className="product-category-image">
                        <div className="flash-sale-content-img image-hover-effect">
                            <Image
                                fill={true}
                                src={imageUrl}
                                className="img-fluid"
                                alt={title}
                            />
                        </div>
                    </div>
                    <div className="flash-sale-content-info text-hover-effect">
                        <h4>{slicedTitle}</h4>
                        <div className="category-product-price d-flex align-items-center justify-content-between ">
                            {price && (
                                <strong>
                                    ৳{" "}
                                    {discount_amount ? discount_amount : price}
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

                            {/* <StarRating ratingCount={ratingCount} ratingImg={ratingImg} /> */}
                        </div>
                        <div className="add-to-cart-holder">
                            <AddToCartButton
                                fullWidth={`category-product-add-btn`}
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryProductArchiveItems;
