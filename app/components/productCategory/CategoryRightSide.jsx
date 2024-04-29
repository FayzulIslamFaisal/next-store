import Image from "next/image"
import Link from "next/link"
import SectionTitle from "../SectionTitle"
import ProductCategories from "../ProductCategories";


const CategoryRightSide = () => {
    const categoryProductData = [
        {
            imageurl: "/images/meril.svg",
            altText: "category image 1",
            path: "#",
            title: "Wardrobe Organisers",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 2",
            path: "#",
            title: "Washing Powder",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 3",
            path: "#",
            title: "Women",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 4",
            path: "#",
            title: "LED Strip Lighting",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 5",
            path: "#",
            title: "Wireless Earbud",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 6",
            path: "#",
            title: "Humidifiers",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 7",
            path: "#",
            title: "Modelling & Sculpting",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 8",
            path: "#",
            title: "Bedding Accessories",
        },

        {
            imageurl: "/images/meril.svg",
            altText: "category image 9",
            path: "#",
            title: "Wardrobe Organisers",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 10",
            path: "#",
            title: "Washing Powder",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 11",
            path: "#",
            title: "Women",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 12",
            path: "#",
            title: "LED Strip Lighting",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 13",
            path: "#",
            title: "Wireless Earbud",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 14",
            path: "#",
            title: "Humidifiers",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 15",
            path: "#",
            title: "Modelling & Sculpting",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 16",
            path: "#",
            title: "Bedding Accessories",
        },
    ];
    return (
        <main className="product-category-right-Side">
            <div className="category-right-Side">
                <div className="all-category-item-area d-flex align-items-center justify-content-between">
                    <div className="all-category-item">
                        <p>145 Itmes found “Women’s Shoes Accessories”</p>
                    </div>
                    <div className="all-category-item">
                        <div className="category-shot-area d-flex align-items-center">
                            <p className=" text-capitalize">Shot By</p>
                            <div className="category-shot-option">
                                <select className="form-select" >
                                    <option>Best Match</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-category-grid-area">

                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flash-sale-content-item">
                        <div className="flash-sale-content-bg nh-hover-box-shadow">
                            <div className="product-category-image">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Image
                                        fill
                                        security="100vw"
                                        src="/images/flash-img4.jpg"
                                        className="img-fluid"
                                        alt="Fashion"
                                    />
                                </div>
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>
                                    <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                </h4>
                                <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                    <strong>৳ 560</strong>
                                    <div className="category-product-rating d-flex align-items-center">
                                        <div className="category-product-rating-item d-flex align-items-center">
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                            <div className="category-product-rating-img">
                                                <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                            </div>
                                        </div>
                                        <span>(15)</span>
                                    </div>
                                </div>
                                <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                    <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row product-category-pagination-row">
                    <div className="col-md-12">
                        <div className="product-category-pagination-area d-flex flex-wrap  align-items-center justify-content-between">
                            <div className="product-category-pagination-col d-flex align-items-center">
                                <div className="product-category-pagination-inner"><p>Did you find what you were looking for?</p> </div>
                                <div className="product-category-pagination-inner">
                                    <form>
                                        <div className="category-looking-form d-flex align-items-center">
                                            <button>Yes</button>
                                            <button>No</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="product-category-pagination-col">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination align-items-center">
                                        <li className="page-item">
                                            <Link className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&#60;</span>
                                            </Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link active" href="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                        <li className="page-item"><Link className="page-link page-link-dotted" href="#">...</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">10</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&#62;</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <SectionTitle title={`Featured Brands`} />
                <ProductCategories categoryProductData={categoryProductData} isHome={false} />
            </div>
        </main>
    )
}

export default CategoryRightSide