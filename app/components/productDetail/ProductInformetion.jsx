import Image from "next/image"
import AddToCartButton from "../AddToCartButton"

const ProductInformetion = () => {
    return (
        <div className="col-md-6">
            <div className="product-details-content">
                <h1>
                    2M LED Light String 60 Leds Computer Desk DIY
                    Backlight 24 Key Remote Control RGB Multicolor Tape Home Decoration Light Strip
                </h1>
                <div className="product-details-rating-area d-flex align-items-center justify-content-between flex-wrap">
                    <div className="product-details-rating-item d-flex align-items-center">
                        <div className="rating-star d-flex align-items-center">
                            <div className="rating-star-image">
                                <Image className="img-fluid" src="/images/Star 5.svg" fill={true} alt="Star" />
                            </div>
                            <div className="rating-star-image">
                                <Image className="img-fluid" src="/images/Star 5.svg" fill={true} alt="Star" />
                            </div>
                            <div className="rating-star-image">
                                <Image className="img-fluid" src="/images/Star 5.svg" fill={true} alt="Star" />
                            </div>
                            <div className="rating-star-image">
                                <Image className="img-fluid" src="/images/Star 5.svg" fill={true} alt="Star" />
                            </div>
                            <div className="rating-star-image">
                                <Image className="img-fluid" src="/images/Star 5.svg" fill={true} alt="Star" />
                            </div>
                        </div>
                        <div className="rating-star">
                            <p>10 Ratings</p>
                        </div>
                    </div>
                    <div className="product-details-rating-item d-flex align-items-center">
                        <div className="product-Sold-img">
                            <Image className="img-fluid" src="/images/sold.svg" width={100} height={100} alt="sold" />
                        </div>
                        <div className="product-Sold">
                            <p>415 Sold</p>
                        </div>
                    </div>
                    <div className="product-details-rating-item d-flex align-items-center">
                        <div className="product-Sold-img">
                            <Image className="img-fluid" src="/images/product-view.svg" alt="Viewe image" width={100} height={100} />
                        </div>
                        <div className="product-Sold">
                            <p>1000 Viewed</p>
                        </div>
                    </div>
                </div>
                <div className="product-details-price-area d-flex align-items-center">
                    <strong> <span>৳</span> 500</strong>
                    <del>৳ 600</del>
                </div>
                <div className="product-short-description-area">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam non
                        eirmod tempor invidunt ut labore et dolore magna</p>
                    <ul>
                        <li>Consetetur sadip</li>
                        <li>Scing elitrsed </li>
                        <li>Daam nonumy</li>
                        <li>Tempor invidunt</li>
                    </ul>
                </div>
                <div className="product-info-rtk-content">
                    <form>
                        <div className="product-details-variant-area">
                            <div className="product-details-variant d-flex align-items-center">
                                <p>Size:</p>
                                <div className="product-details-variant-holder d-flex align-items-center">
                                    <div className="product-details-variant-item">
                                        <input type="radio" name="size" id="size-variant1" />
                                        <label htmlFor="size-variant1">10 Watt</label>
                                    </div>
                                    <div className="product-details-variant-item">
                                        <input type="radio" name="size" id="size-variant2" />
                                        <label htmlFor="size-variant2">20 watt</label>
                                    </div>
                                    <div className="product-details-variant-item">
                                        <input type="radio" name="size" id="size-variant3" />
                                        <label htmlFor="size-variant3">100 watt</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-details-quantity-area d-flex align-items-center justify-content-between">
                            <div className="product-details-quantity d-flex align-items-center">
                                <div className="product-details-inner-quantity d-flex align-items-center">
                                    <p>Quantity:</p>
                                </div>
                                <div className="product-details-inner-quantity product-details-inner-qty d-flex align-items-center">
                                    <button>-</button>
                                    <input type="text" value="1" />
                                    <button>+</button>
                                </div>
                            </div>
                            <div className="product-details-quantity d-flex align-items-center">
                                <p>Color</p>
                                <div className="product-details-inner-quantity d-flex align-items-center">
                                    <div className="product-details-inner-color product-details-variant-item" style={{ background: '#BBB5FF' }}>
                                        <input type="radio" name="color" id="color-variant1" />
                                        <label htmlFor="color-variant1"></label>
                                    </div>
                                    <div className="product-details-inner-color product-details-variant-item" style={{ background: '#FF0000' }}>
                                        <input type="radio" name="color" id="color-variant2" />
                                        <label htmlFor="color-variant2"></label>
                                    </div>
                                    <div className="product-details-inner-color product-details-variant-item" style={{ background: '#1400FF' }}>
                                        <input type="radio" name="color" id="color-variant3" />
                                        <label htmlFor="color-variant3"></label>
                                    </div>
                                    <div className="product-details-inner-color product-details-variant-item" style={{ background: '#32D118' }}>
                                        <input type="radio" name="color" id="color-variant4" />
                                        <label htmlFor="color-variant4"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-details-add-cart-area d-flex align-items-center">
                            <div className="product-details-add-cart">
                                <AddToCartButton title="BUY NOW" />
                                <button className="product-details-buy-now-btn">BUY NOW</button>
                            </div>
                            <div className="product-details-add-cart">
                                <AddToCartButton />
                                <button className="product-details-add-to-cart-btn">ADD TO CART</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductInformetion