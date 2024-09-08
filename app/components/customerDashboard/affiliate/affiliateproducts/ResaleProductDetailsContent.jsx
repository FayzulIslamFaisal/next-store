import { FaCheck, FaRegEye, FaRegStar, FaStar } from "react-icons/fa6";

const ResaleProductDetailsContent = ({ productDetails }) => {
    return (
        <>
            <div className="product-details-content">
                <h1>{productDetails?.product_name}</h1>
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
                            <p>10 Ratings</p>
                        </div>
                    </div>
                    <div className="product-details-rating-item d-flex align-items-center">
                        <div className="text-black-50">
                            <FaCheck />
                        </div>
                        <div className="product-Sold">
                            <p>415 Sold</p>
                        </div>
                    </div>
                    <div className="product-details-rating-item d-flex align-items-center">
                        <div className="text-black-50">
                            <FaRegEye />
                        </div>
                        <div className="product-Sold">
                            <p>50 Viewed</p>
                        </div>
                    </div>
                </div>
                <div className="product-details-price-area align-items-center d-flex">
                    <strong>
                        <span>৳ </span>
                        {productDetails?.resell_purchases_price}
                    </strong>
                    <del>৳ {productDetails?.resell_mrp_price}</del>
                </div>

                <div className="product-info-rtk-content pt-4">
                    <form>
                        <div></div>
                        <div className="product-details-quantity-area d-flex align-items-center justify-content-start">
                            <div className="product-details-quantity d-flex align-items-center">
                                <div className="product-details-inner-quantity d-flex align-items-center">
                                    <p>Quantity:</p>
                                </div>
                                <div className="product-details-inner-quantity product-details-inner-qty d-flex align-items-center">
                                    <button type="button" disabled="">
                                        -
                                    </button>
                                    <input
                                        readOnly=""
                                        type="text"
                                        defaultValue="1"
                                    />
                                    <button type="button">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="product-details-add-cart-area d-flex align-items-center">
                            <div className="product-details-add-cart">
                                <div className="add-to-cart-btn">
                                    <button className="add-to-cart-link border-0 product-details-action-btn undefined">
                                        BUY NOW
                                    </button>
                                </div>
                            </div>
                            <div className="product-details-add-cart">
                                <div className="add-to-cart-btn">
                                    <button className="add-to-cart-link border-0 product-details-action-btn undefined">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="pt-4">{productDetails?.short_description}</div>
            </div>
        </>
    );
};

export default ResaleProductDetailsContent;
