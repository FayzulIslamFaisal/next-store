import Service from "./Service";
import SectionTitle from "./SectionTitle";
import ProductCategories from "./ProductCategories";
import FlipClock from "./FlipClock";

function Category() {
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
    const categoryBrandData = [
        {
            imageurl: "/images/bengal.svg",
            altText: "Brand image 1",
            path: "#",
            title: "Wardrobe Organisers",
        },
        {
            imageurl: "/images/square.svg",
            altText: "Brand image 2",
            path: "#",
            title: "Washing Powder",
        },
        {
            imageurl: "/images/bd-food.svg",
            altText: "Brand image 3",
            path: "#",
            title: "Women",
        },
        {
            imageurl: "/images/bengal.svg",
            altText: "Brand image 4",
            path: "#",
            title: "LED Strip Lighting",
        },
        {
            imageurl: "/images/square.svg",
            altText: "Brand image 5",
            path: "#",
            title: "Wireless Earbud",
        },
        {
            imageurl: "/images/bd-food.svg",
            altText: "Brand image 6",
            path: "#",
            title: "Humidifiers",
        },
        {
            imageurl: "/images/bengal.svg",
            altText: "Brand image 7",
            path: "#",
            title: "Modelling & Sculpting",
        },
        {
            imageurl: "/images/square.svg",
            altText: "Brand image 8",
            path: "#",
            title: "Bedding Accessories",
        },

        {
            imageurl: "/images/bd-food.svg",
            altText: "Brand image 9",
            path: "#",
            title: "Wardrobe Organisers",
        },
        {
            imageurl: "/images/bengal.svg",
            altText: "Brand image 10",
            path: "#",
            title: "Washing Powder",
        },
        {
            imageurl: "/images/square.svg",
            altText: "Brand image 11",
            path: "#",
            title: "Women",
        },
        {
            imageurl: "/images/bd-food.svg",
            altText: "Brand image 12",
            path: "#",
            title: "LED Strip Lighting",
        },
        {
            imageurl: "/images/bengal.svg",
            altText: "Brand image 13",
            path: "#",
            title: "Wireless Earbud",
        },
        {
            imageurl: "/images/square.svg",
            altText: "Brand image 14",
            path: "#",
            title: "Humidifiers",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "Brand image 15",
            path: "#",
            title: "Modelling & Sculpting",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "Brand image 16",
            path: "#",
            title: "Bedding Accessories",
        },
    ];

    return (
        <section className="nh-categories-area">
            <div className="container">
                <SectionTitle title="Categories" path="#">
                    <FlipClock />
                </SectionTitle>
                <ProductCategories categoryProductData={categoryProductData} />

                <div className="nh-brands-area">
                    <SectionTitle title="Brands" path="#" />
                    <ProductCategories
                        categoryProductData={categoryBrandData}
                    />
                </div>

                <div className="nh-just-for-you">
                    <SectionTitle title="Just For You" path="#" />

                    <div className="row just-for-random-product">
                        <div className="col-md-12">
                            <div className="flash-sale-content-area">
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img1.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img2.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img3.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img4.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img5.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img6.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img1.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img2.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img3.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img4.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img5.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img6.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img1.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img2.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img3.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img4.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img5.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flash-sale-content-item">
                                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                                        <div className="flash-sale-content-img image-hover-effect">
                                            <img
                                                src="/images/flash-img6.jpg"
                                                className="img-fluid"
                                                alt="flash sale image"
                                            />
                                        </div>
                                        <div className="flash-sale-content-info text-hover-effect">
                                            <h4>
                                                <a href="#">
                                                    Maggi Masala 620gm (8Pcs)
                                                    Free 2 pcs (Nestle)
                                                </a>
                                            </h4>
                                            <strong>৳ 685,00</strong>
                                            <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                                                <div className="add-to-cart-btn">
                                                    <a
                                                        href="#"
                                                        className="add-to-cart-link"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                                <div className="add-to-cart-icon">
                                                    <a href="#">
                                                        <img
                                                            src="/images/add-to-cart.svg"
                                                            alt="add to cart icon"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row load-more-btn-row">
                        <div className="col-md-12">
                            <div className="load-more-btn-area text-center text-uppercase">
                                <a href="#" className="load-more-btn">
                                    Load more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Service serviceItems={serviceItems} />
            </div>
        </section>
    );
}

export default Category;
