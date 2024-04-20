import Image from "next/image"
import Link from "next/link"
const ProductDetails = () => {
    return (
        <>
            {/* <!--Start product-details-section --> */}
            <section className="product-details-section" >
                <div className="container">
                    {/* <!-- Start product-details-breadcrumb-area --> */}
                    <div className="row product-details-breadcrumb-area">
                        <div className="col-md-12">
                            <nav aria-label="breadcrumb" className="breadcrumb-content">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li className="breadcrumb-item" ><Link href="#">Bulb</Link></li>
                                    <li className="breadcrumb-item active">LED Light String</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* <!-- End product-details-breadcrumb-area --> */}

                    {/* <!-- Start product-details-info --> */}
                    <div className="row product-details-info">
                        {/* <!-- Start product-details-info left --> */}
                        <div className=" col-xl-9">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="product-details-info-photo">
                                        <div className="product-details-info-img">
                                            <Image src="/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg" fill={true} alt="peoduct image" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="product-details-info-multiple-photo">
                                        <div className="product-multiple-photo-item">
                                            <Image className="img-fluid" src="/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg" fill={true} alt="multiple product image" />
                                        </div>
                                    </div>
                                    <div className="product-details-social-link d-flex align-items-center justify-content-center pb-3">
                                        <p>Share:</p>
                                        <div className="product-social-link d-flex align-items-center">
                                            <Link href="#" target="_blank">
                                                <Image className="img-fluid" src="/images/facbook.svg" alt="facebook" fill={true} />
                                            </Link>
                                            <Link href="#" target="_blank">
                                                <Image className="img-fluid" src="/images/twitter.svg" alt="twitter" fill={true} />
                                            </Link>
                                            <Link href="#" target="_blank">
                                                <Image className="img-fluid" src="/images/linkedin.svg" alt="linkedin" fill={true} />
                                            </Link>
                                            <Link href="#" target="_blank">
                                                <Image className="img-fluid" src="/images/youtube.svg" alt="youtube" fill={true} />
                                            </Link>
                                            <Link href="#" target="_blank">
                                                <Image className="img-fluid" src="/images/instagram.svg" alt="instagram" fill={true} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
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
                                                                <input type="checkbox" name="size1" id="size-variant1" />
                                                                <label htmlFor="size-variant1">10 Watt</label>
                                                            </div>
                                                            <div className="product-details-variant-item">
                                                                <input type="checkbox" name="size1" id="size-variant2" />
                                                                <label htmlFor="size-variant2">20 watt</label>
                                                            </div>
                                                            <div className="product-details-variant-item">
                                                                <input type="checkbox" name="size1" id="size-variant3" />
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
                                                                <input type="checkbox" name="color1" id="color-variant1" />
                                                                <label htmlFor="color-variant1"></label>
                                                            </div>
                                                            <div className="product-details-inner-color product-details-variant-item" style={{ background: '#FF0000' }}>
                                                                <input type="checkbox" name="color2" id="color-variant2" />
                                                                <label htmlFor="color-variant2"></label>
                                                            </div>
                                                            <div className="product-details-inner-color product-details-variant-item" style={{ background: '#1400FF' }}>
                                                                <input type="checkbox" name="color3" id="color-variant3" />
                                                                <label htmlFor="color-variant3"></label>
                                                            </div>
                                                            <div className="product-details-inner-color product-details-variant-item" style={{ background: '#32D118' }}>
                                                                <input type="checkbox" name="color4" id="color-variant4" />
                                                                <label htmlFor="color-variant4"></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-details-add-cart-area d-flex align-items-center">
                                                    <div className="product-details-add-cart">
                                                        <button className="product-details-buy-now-btn">BUY NOW</button>
                                                    </div>
                                                    <div className="product-details-add-cart">
                                                        <button className="product-details-add-to-cart-btn">ADD TO CART</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start product-long-discription-area --> */}
                            <div className="row product-long-discription-area">
                                <div className="col-md-12">
                                    <div className="product-long-discription-tab">
                                        <nav>
                                            <div className="nav nav-tabs d-flex align-items-center" id="nav-tab" role="tablist">
                                                <button className="nav-link active" id="nav-specification-tab" data-bs-toggle="tab" data-bs-target="#nav-specification" type="button" role="tab">Specification</button>
                                                <button className="nav-link" id="nav-details-tab" data-bs-toggle="tab" data-bs-target="#nav-details" type="button" role="tab">Details</button>
                                                <button className="nav-link" id="nav-qa-tab" data-bs-toggle="tab" data-bs-target="#nav-qa" type="button" role="tab">Q & A</button>
                                                <button className="nav-link" id="nav-reviews-tab" data-bs-toggle="tab" data-bs-target="#nav-reviews" type="button" role="tab">Reviews <span>(240)</span> </button>
                                            </div>
                                        </nav>
                                        <div className="tab-content " id="nav-tabContent">
                                            {/* Start tab-panel-item */}
                                            <div className="tab-pane fade active show" id="nav-specification" role="tabpanel" >
                                                <div className="tab-panel-info-details">
                                                    <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</h6>
                                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                                                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                </div>
                                                <div className="tab-panel-info-image-area">
                                                    <div className="tab-panel-info-image-col">
                                                        <Image src={`/images/black-friday.jpg`} fill={true} alt="black friday" />
                                                    </div>
                                                    <div className="tab-panel-info-image-col">
                                                        <Image src={`/images/fashion.jpg`} fill={true} alt="fashion" />
                                                    </div>
                                                </div>
                                                <div className="tab-panel-info-details">
                                                    <h6> Accusam et justo duo dolores et ea rebum. Stet clita kasd.</h6>
                                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                                                    <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</h6>
                                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</p>
                                                </div>
                                            </div>
                                            {/* End tab-panel-item */}

                                            {/* Start tab-panel-item */}
                                            <div className="tab-pane fade" id="nav-details" role="tabpanel" >
                                                <p><strong>This is some placeholder content the Profile tab's associated content.</strong>
                                                    Clicking another tab will toggle the visibility of this one for the next.
                                                    The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
                                                    tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                                            </div>
                                            {/* End tab-panel-item */}

                                            {/* Start tab-panel-item */}
                                            <div className="tab-pane fade" id="nav-qa" role="tabpanel" >
                                                <p><strong>This is some placeholder content the Contact tab's associated content.</strong>
                                                    Clicking another tab will toggle the visibility of this one for the next.
                                                    The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
                                                    tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                                            </div>
                                            {/* End tab-panel-item */}

                                            {/* Start tab-panel-item */}
                                            <div className="tab-pane fade" id="nav-reviews" role="tabpanel" aria-labelledby="nav-reviews-tab">
                                                <p><strong>This is some placeholder content the Contact tab's associated content.</strong>
                                                    Clicking another tab will toggle the visibility of this one for the next.
                                                    The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
                                                    tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                                            </div>
                                            {/* End tab-panel-item */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End product-long-discription-area --> */}
                        </div>
                        {/* <!-- End product-details-info left --> */}
                        {/* <!-- Start product-details-info right --> */}
                        <div className="col-xl-3">
                            <div className="product-sidebar">
                                {/* <!-- Start product-details-delivery-area --> */}
                                <div className="product-details-delivery-area">
                                    <div className="product-details-delivery-bg ">
                                        <div className="product-delivery-top-title d-flex align-items-center justify-content-between">
                                            <h2>Delivery</h2>
                                            <div className="product-delivery-top-img">
                                                <Image className="img-fluid" src="/images/delivery.svg" alt="delivery image" fill={true} />
                                            </div>
                                        </div>
                                        <div className="product-delivery-address-area d-flex justify-content-between ">
                                            <div className="product-delivery-address-inner d-flex">
                                                <div className="product-delivery-address-icon sidebar-common-img-size">
                                                    <Image className="img-fluid" src="/images/location-black-img.svg" alt="location image" fill={true} />
                                                </div>
                                                <p>Dhaka, Dhaka North, Banani Road No. 12 - 19</p>
                                            </div>
                                            <div className="product-delivery-address-inner">
                                                <Link href="#" className="custom-text-link">CHANGE</Link>
                                            </div>
                                        </div>
                                        <div className="product-free-delivery-area">
                                            <div className="product-free-delivery-top d-flex justify-content-between">
                                                <div className="product-free-delivery-info d-flex align-items-center">
                                                    <div className="product-free-delivery-info-img sidebar-common-img-size">
                                                        <Image className="img-fluid" src="/images/free-delivery.svg" fill={true} alt="free-delivery" />
                                                    </div>
                                                    <h5>Free Delivery</h5>
                                                    <p>12 Apr - 19 Apr</p>
                                                </div>
                                                <div className="product-free-delivery-info ">
                                                    <Link href="#" className="custom-text-link">FREE</Link>
                                                </div>
                                            </div>
                                            <div className="product-free-delivery-end-time">
                                                <p>12 - 19 day(s)</p>
                                                <div className="product-free-delivery-textarea">
                                                    <textarea className="form-control" value="Enjoy free shipping promotion with minimum spend of ৳ 499 from Buy More Save More." />
                                                </div>
                                                <div className="product-free-delivery-two-col d-flex align-items-center">
                                                    <div className="product-free-delivery-two-col-img sidebar-common-img-size">
                                                        <Image className="img-fluid" src="/images/cash-on-delivery.svg" fill={true} alt="cash-on-delivery" />
                                                    </div>
                                                    <h5>Cash on Delivery Available</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-details-service-area">
                                            <div className="product-delivery-top-title d-flex align-items-center justify-content-between">
                                                <h2>Service</h2>
                                                <div className="product-delivery-top-img">
                                                    <Image className="img-fluid" src="/images/delivery.svg" alt="delivery image" fill={true} />
                                                </div>
                                            </div>
                                            <div className="product-details-service-info">
                                                <div className="product-free-delivery-two-col d-flex align-items-center">
                                                    <div className="product-free-delivery-two-col-img sidebar-common-img-size">
                                                        <Image className="img-fluid" src="/images/return.svg" alt="return image" fill={true} />
                                                    </div>
                                                    <h5>7 Days Return</h5>
                                                </div>
                                                <p>Change of mind is not applicable</p>
                                                <div className="product-free-delivery-two-col d-flex align-items-center">
                                                    <div className="product-free-delivery-two-col-img sidebar-common-img-size">
                                                        <Image className="img-fluid" src="/images/warrant.svg" alt="warrant image" fill={true} />
                                                    </div>
                                                    <h5>Warranty not available</h5>
                                                </div>
                                            </div>
                                            <div className="product-details-sold-area bg-white">
                                                <div className="product-details-sold-top d-flex align-items-center justify-content-between">
                                                    <div className="product-details-sold-item"><h5>Sold By</h5> </div>
                                                    <div className="product-details-sold-item d-flex align-items-center">
                                                        <div className="product-details-sold-img sidebar-common-img-size">
                                                            <Image className="img-fluid" src="/images/chat-img.svg" alt="cart image" fill={true} />
                                                        </div>
                                                        <Link href="#" className="custom-text-link">Chat</Link>
                                                    </div>
                                                </div>
                                                <p>Imran Fashion House</p>
                                                <div className="product-details-sold-table">
                                                    <div className="table-responsive">
                                                        <table className="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Positive Seller Ratings</th>
                                                                    <th>Ship on Time</th>
                                                                    <th>Chat Response Rate</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>85%</td>
                                                                    <td>66%</td>
                                                                    <td className="table-td-text">Not enough data</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="product-sold-visit text-center">
                                                    <Link href="#" className="custom-text-link">Visit Store</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End product-details-delivery-area --> */}
                                {/* <!-- Start similer-product-area --> */}
                                <div className="similer-product-area">
                                    <div className="similer-product-title d-flex align-items-center">
                                        <h3>Similer Product</h3>
                                        <div className="similer-product-border"></div>
                                    </div>
                                    <div className="similer-product-box">
                                        <div className="similer-product-box-item d-flex ">
                                            <div className="similer-product-img">
                                                <Image src="/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg" fill={true} className="img-fluid" alt="similer product" />
                                            </div>
                                            <div className="similer-product-info">
                                                <h4>2M LED Light String 60
                                                    Leds Computer Desk DIY
                                                    Backlight.
                                                </h4>
                                                <strong> <span>৳</span> 450</strong>
                                            </div>
                                        </div>
                                        <div className="similer-product-box-item d-flex ">
                                            <div className="similer-product-img">
                                                <Image src="/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg" fill={true} className="img-fluid" alt="similer product" />
                                            </div>
                                            <div className="similer-product-info">
                                                <h4>2M LED Light String 60
                                                    Leds Computer Desk DIY
                                                    Backlight.
                                                </h4>
                                                <strong> <span>৳</span> 450</strong>
                                            </div>
                                        </div>
                                        <div className="similer-product-box-item d-flex ">
                                            <div className="similer-product-img">
                                                <Image src="/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg" fill={true} className="img-fluid" alt="similer product" />
                                            </div>
                                            <div className="similer-product-info">
                                                <h4>2M LED Light String 60
                                                    Leds Computer Desk DIY
                                                    Backlight.
                                                </h4>
                                                <strong> <span>৳</span> 450</strong>
                                            </div>
                                        </div>
                                        <div className="similer-product-box-item d-flex ">
                                            <div className="similer-product-img">
                                                <Image src="/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg" fill={true} className="img-fluid" alt="similer product" />
                                            </div>
                                            <div className="similer-product-info">
                                                <h4>2M LED Light String 60
                                                    Leds Computer Desk DIY
                                                    Backlight.
                                                </h4>
                                                <strong> <span>৳</span> 450</strong>
                                            </div>
                                        </div>
                                        <div className="similer-product-box-item d-flex ">
                                            <div className="similer-product-img">
                                                <Image src="/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg" fill={true} className="img-fluid" alt="similer product" />
                                            </div>
                                            <div className="similer-product-info">
                                                <h4>2M LED Light String 60
                                                    Leds Computer Desk DIY
                                                    Backlight.
                                                </h4>
                                                <strong className=""> ৳ 450</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End similer-product-area --> */}
                            </div>
                        </div>
                        {/* <!-- End product-details-info right --> */}
                    </div>
                    {/* <!-- Start product-details-info --> */}

                </div>
            </section >
            {/* <!--End product-details-section --> */}
        </>
    )
}

export default ProductDetails