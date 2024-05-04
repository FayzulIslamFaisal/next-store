import Image from "next/image"
import Pagination from "../components/productCategory/Pagination"
import Service from "../components/Service";

const viewAllProduct = () => {
    const serviceItems = [
        {
            imageurl: "/images/pickup.svg",
            altText: "pickup image",
            title: " Fast Delivery",
            subTitle: "Free For All Type Order",
        },
        {
            imageurl: "/images/gift-cart.svg",
            altText: "gift cart",
            title: " Best Quality",
            subTitle: "Best Product Peices",
        },
        {
            imageurl: "/images/gift-box.svg",
            altText: "gift box",
            title: " Exchange Offer",
            subTitle: "One Day To Changes",
        },
        {
            imageurl: "/images/headphone.svg",
            altText: "headphone",
            title: "  Help Center",
            subTitle: "Support System 24/7",
        },
    ];
    return (
        <div className="container view-all-product-container">
            <div className="row view-all-product-banner-area">
                <div className="col-md-12">
                    <div className="view-all-product-banner">
                        <Image src="/images/viewproduct.jpg" className=" img-fluid" sizes="100vw" fill={true} alt="banner image" />
                    </div>
                </div>
            </div>
            <div className="row view-all-product-title">
                <div className="col-md-12 ">
                    <div className="view-all-product-title-box d-flex align-items-center justify-content-center">
                        <h2>All Product</h2>
                    </div>
                </div>
            </div>

            <div className="row just-for-random-product view-all-product-area">
                <div className="col-md-12">
                    <div className="flash-sale-content-area">
                        <div className="flash-sale-content-item">
                            <div className="flash-sale-content-bg nh-hover-box-shadow">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        fill={true}
                                        className="img-fluid"
                                        alt="flash-img2"
                                    />
                                </div>
                                <div className="flash-sale-content-info text-hover-effect">
                                    <h4>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h4>
                                    <strong>৳ 500</strong>
                                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                        <div class="add-to-cart-btn">
                                            <a class="add-to-cart-link" href="#">ADD TO CART</a>
                                        </div>
                                        <div class="add-to-cart-icon">
                                            <a href="#">
                                                <Image alt="add to cart icon" width="28" height="28" src="/images/add-to-cart.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flash-sale-content-item">
                            <div className="flash-sale-content-bg nh-hover-box-shadow">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        fill={true}
                                        className="img-fluid"
                                        alt="flash-img2"
                                    />
                                </div>
                                <div className="flash-sale-content-info text-hover-effect">
                                    <h4>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h4>
                                    <strong>৳ 500</strong>
                                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                        <div class="add-to-cart-btn">
                                            <a class="add-to-cart-link" href="#">ADD TO CART</a>
                                        </div>
                                        <div class="add-to-cart-icon">
                                            <a href="#">
                                                <Image alt="add to cart icon" width="28" height="28" src="/images/add-to-cart.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flash-sale-content-item">
                            <div className="flash-sale-content-bg nh-hover-box-shadow">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        fill={true}
                                        className="img-fluid"
                                        alt="flash-img2"
                                    />
                                </div>
                                <div className="flash-sale-content-info text-hover-effect">
                                    <h4>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h4>
                                    <strong>৳ 500</strong>
                                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                        <div class="add-to-cart-btn">
                                            <a class="add-to-cart-link" href="#">ADD TO CART</a>
                                        </div>
                                        <div class="add-to-cart-icon">
                                            <a href="#">
                                                <Image alt="add to cart icon" width="28" height="28" src="/images/add-to-cart.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flash-sale-content-item">
                            <div className="flash-sale-content-bg nh-hover-box-shadow">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        fill={true}
                                        className="img-fluid"
                                        alt="flash-img2"
                                    />
                                </div>
                                <div className="flash-sale-content-info text-hover-effect">
                                    <h4>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h4>
                                    <strong>৳ 500</strong>
                                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                        <div class="add-to-cart-btn">
                                            <a class="add-to-cart-link" href="#">ADD TO CART</a>
                                        </div>
                                        <div class="add-to-cart-icon">
                                            <a href="#">
                                                <Image alt="add to cart icon" width="28" height="28" src="/images/add-to-cart.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flash-sale-content-item">
                            <div className="flash-sale-content-bg nh-hover-box-shadow">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        fill={true}
                                        className="img-fluid"
                                        alt="flash-img2"
                                    />
                                </div>
                                <div className="flash-sale-content-info text-hover-effect">
                                    <h4>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h4>
                                    <strong>৳ 500</strong>
                                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                        <div class="add-to-cart-btn">
                                            <a class="add-to-cart-link" href="#">ADD TO CART</a>
                                        </div>
                                        <div class="add-to-cart-icon">
                                            <a href="#">
                                                <Image alt="add to cart icon" width="28" height="28" src="/images/add-to-cart.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flash-sale-content-item">
                            <div className="flash-sale-content-bg nh-hover-box-shadow">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        fill={true}
                                        className="img-fluid"
                                        alt="flash-img2"
                                    />
                                </div>
                                <div className="flash-sale-content-info text-hover-effect">
                                    <h4>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h4>
                                    <strong>৳ 500</strong>
                                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                        <div class="add-to-cart-btn">
                                            <a class="add-to-cart-link" href="#">ADD TO CART</a>
                                        </div>
                                        <div class="add-to-cart-icon">
                                            <a href="#">
                                                <Image alt="add to cart icon" width="28" height="28" src="/images/add-to-cart.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flash-sale-content-item">
                            <div className="flash-sale-content-bg nh-hover-box-shadow">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        fill={true}
                                        className="img-fluid"
                                        alt="flash-img2"
                                    />
                                </div>
                                <div className="flash-sale-content-info text-hover-effect">
                                    <h4>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h4>
                                    <strong>৳ 500</strong>
                                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                        <div class="add-to-cart-btn">
                                            <a class="add-to-cart-link" href="#">ADD TO CART</a>
                                        </div>
                                        <div class="add-to-cart-icon">
                                            <a href="#">
                                                <Image alt="add to cart icon" width="28" height="28" src="/images/add-to-cart.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flash-sale-content-item">
                            <div className="flash-sale-content-bg nh-hover-box-shadow">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        fill={true}
                                        className="img-fluid"
                                        alt="flash-img2"
                                    />
                                </div>
                                <div className="flash-sale-content-info text-hover-effect">
                                    <h4>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h4>
                                    <strong>৳ 500</strong>
                                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                        <div class="add-to-cart-btn">
                                            <a class="add-to-cart-link" href="#">ADD TO CART</a>
                                        </div>
                                        <div class="add-to-cart-icon">
                                            <a href="#">
                                                <Image alt="add to cart icon" width="28" height="28" src="/images/add-to-cart.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flash-sale-content-item">
                            <div className="flash-sale-content-bg nh-hover-box-shadow">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        fill={true}
                                        className="img-fluid"
                                        alt="flash-img2"
                                    />
                                </div>
                                <div className="flash-sale-content-info text-hover-effect">
                                    <h4>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h4>
                                    <strong>৳ 500</strong>
                                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                        <div class="add-to-cart-btn">
                                            <a class="add-to-cart-link" href="#">ADD TO CART</a>
                                        </div>
                                        <div class="add-to-cart-icon">
                                            <a href="#">
                                                <Image alt="add to cart icon" width="28" height="28" src="/images/add-to-cart.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flash-sale-content-item">
                            <div className="flash-sale-content-bg nh-hover-box-shadow">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        fill={true}
                                        className="img-fluid"
                                        alt="flash-img2"
                                    />
                                </div>
                                <div className="flash-sale-content-info text-hover-effect">
                                    <h4>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h4>
                                    <strong>৳ 500</strong>
                                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                        <div class="add-to-cart-btn">
                                            <a class="add-to-cart-link" href="#">ADD TO CART</a>
                                        </div>
                                        <div class="add-to-cart-icon">
                                            <a href="#">
                                                <Image alt="add to cart icon" width="28" height="28" src="/images/add-to-cart.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flash-sale-content-item">
                            <div className="flash-sale-content-bg nh-hover-box-shadow">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        fill={true}
                                        className="img-fluid"
                                        alt="flash-img2"
                                    />
                                </div>
                                <div className="flash-sale-content-info text-hover-effect">
                                    <h4>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h4>
                                    <strong>৳ 500</strong>
                                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                        <div class="add-to-cart-btn">
                                            <a class="add-to-cart-link" href="#">ADD TO CART</a>
                                        </div>
                                        <div class="add-to-cart-icon">
                                            <a href="#">
                                                <Image alt="add to cart icon" width="28" height="28" src="/images/add-to-cart.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flash-sale-content-item">
                            <div className="flash-sale-content-bg nh-hover-box-shadow">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        fill={true}
                                        className="img-fluid"
                                        alt="flash-img2"
                                    />
                                </div>
                                <div className="flash-sale-content-info text-hover-effect">
                                    <h4>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h4>
                                    <strong>৳ 500</strong>
                                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                        <div class="add-to-cart-btn">
                                            <a class="add-to-cart-link" href="#">ADD TO CART</a>
                                        </div>
                                        <div class="add-to-cart-icon">
                                            <a href="#">
                                                <Image alt="add to cart icon" width="28" height="28" src="/images/add-to-cart.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row view-all-product-pagination-area">
                <div className="col-md-12 text-center">
                    <Pagination />
                </div>
            </div>
            <Service serviceItems={serviceItems} />
        </div>
    )
}

export default viewAllProduct