import Image from "next/image"
import Link from "next/link"
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
                        <Image src="/images/fashion.jpg" className=" img-fluid" sizes="100vw" fill={true} alt="banner image" />
                    </div>
                </div>
            </div>
            <div className="row view-all-product-title">
                <div className="col-md-12 ">
                    <div className="view-all-product-title-box d-flex align-items-center justify-content-center">
                        <h2>All Category</h2>
                    </div>
                </div>
            </div>
            <div className="row nh-categories-row view-all-product-area">
                <div className="col-md-12">
                    <div className="nh-categories-holder-s nh-view-all-product">
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img1.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img3.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img5.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img6.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img1.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img1.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img3.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img5.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img6.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img1.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img3.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img5.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img6.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div><div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img1.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img2.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img3.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
                                </div>
                            </div>
                        </div><div className="nh-categories-item">
                            <div className="nh-categories-item-bg nh-hover-box-shadow">
                                <div className="nh-categories-img image-hover-effect">
                                    <Image
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="product image"
                                        fill={true}
                                    />
                                </div>
                                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                    <h4>
                                        <Link href="#">Lorem Ipsum is simply dummy text</Link>
                                    </h4>
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