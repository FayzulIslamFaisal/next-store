
import { FaCheck, FaRegEye, FaRegStar, FaStar } from "react-icons/fa6";

const ResaleProductDetailsContent = () => {
    return (
        <>
            <div className="product-details-content">
                <h1>Pilot Metropolitan Ballpoint Pen</h1>
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
                        442
                    </strong>
                    <del>৳ 562.00</del>
                </div>

                <div class="product-info-rtk-content pt-4">
                    <form>
                        <div class="product-details-variant-area">
                            <div class="d-flex align-items-center">
                                <div>
                                    <div class="product-details-variant-holder d-flex align-items-center mb-4">
                                        <p class="variantName">Color</p>
                                        <div class="product-details-inner-color product-details-variant-item" style={{ backgroundColor: "red" }}></div>
                                        <div class="product-details-inner-color product-details-variant-item" style={{ backgroundColor: "green" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-details-variant-area">
                            <div class="product-details-variant d-flex align-items-center">
                                <div>
                                    <div class="product-details-variant-holder d-flex align-items-center mb-4">
                                        <p>Size:</p>
                                        <div class="product-details-variant-item variantAttributeUnitive">
                                            <label>M</label>
                                        </div>
                                        <div class="product-details-variant-item variantAttributeUnitive">
                                            <label>L</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div class="product-details-quantity-area d-flex align-items-center justify-content-start">
                            <div class="product-details-quantity d-flex align-items-center">
                                <div class="product-details-inner-quantity d-flex align-items-center">
                                    <p>Quantity:</p>
                                </div>
                                <div class="product-details-inner-quantity product-details-inner-qty d-flex align-items-center">
                                    <button type="button" disabled="">
                                        -
                                    </button>
                                    <input readonly="" type="text" value="1" />
                                    <button type="button">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="product-details-add-cart-area d-flex align-items-center">
                            <div class="product-details-add-cart">
                                <div class="add-to-cart-btn">
                                    <button class="add-to-cart-link border-0 product-details-action-btn undefined">
                                        BUY NOW
                                    </button>
                                </div>
                            </div>
                            <div class="product-details-add-cart">
                                <div class="add-to-cart-btn">
                                    <button class="add-to-cart-link border-0 product-details-action-btn undefined">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="product-short-description-area pb-0">
                    <div>
                        <p>
                            <span>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage,
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResaleProductDetailsContent;
