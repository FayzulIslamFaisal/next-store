import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa6";

const ProductDetailsContent = ({ productInfo }) => {
    return (
        <>
            <div className="product-details-content">
                <h1>{productInfo?.product_name}</h1>
                <div className="product-details-rating-area d-flex align-items-center justify-content-between flex-wrap">
                    <div className="product-details-rating-item d-flex">
                        <div className="rating-star d-flex text-warning">
                            <div className="rating-star-image">
                                <FaStar />
                            </div>
                            <div className="rating-star-image">
                                <FaStar />
                            </div>
                            <div className="rating-star-image">
                                <FaStar />
                            </div>
                            <div className="rating-star-image">
                                <FaStar />
                            </div>
                            <div className="rating-star-image">
                                <FaRegStar />
                            </div>
                        </div>
                        <div className="rating-star">
                            <p>{productInfo?.ratings} Ratings</p>
                        </div>
                    </div>
                    <div className="product-details-rating-item d-flex align-items-center">
                        <div className="product-Sold-img">
                            <Image
                                width={20}
                                height={20}
                                alt="sold"
                                className="img-fluid"
                                src="/images/sold.svg"
                            />
                        </div>
                        <div className="product-Sold">
                            <p>415 Sold</p>
                        </div>
                    </div>
                    <div className="product-details-rating-item d-flex align-items-center">
                        <div className="product-Sold-img">
                            <Image
                                alt="Viewe image"
                                width={40}
                                height={40}
                                className="img-fluid"
                                src="/images/product-view.svg"
                            />
                        </div>
                        <div className="product-Sold">
                            <p>50 Viewed</p>
                        </div>
                    </div>
                </div>
                <div className="product-details-price-area d-flex align-items-center">
                    <strong>
                        <span>৳</span>
                        {productInfo?.after_discount_mrp_price}
                    </strong>
                    <del>৳ {productInfo?.mrp_price}</del>
                </div>
                <div className="product-short-description-area">
                    <div>
                        <p>
                            <span>{productInfo?.short_description}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsContent;
