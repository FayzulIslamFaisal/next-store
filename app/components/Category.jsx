import Image from "next/image";
import Service from "./Service";

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
    ]
    return (
        <section className="nh-categories-area">
            <div className="container">
                <div className="row nh-common-title-area">
                    <div className="col-md-12">
                        <div className="nh-common-title d-flex align-items-center justify-content-between">
                            <div className="nh-common-item d-flex align-items-center">
                                <h3>Categories</h3>
                                <div className="common-border"></div>
                            </div>
                            <div className="nh-common-item">
                                <a href="#">View All</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row nh-categories-row">
                    <div className="col-md-12">
                        <div className="nh-categories-holder">
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#">Wardrobe Organisers</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#">Washing Powder</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#"> Women </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#"> LED Strip Lighting </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#"> Wireless Earbud </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#"> Humidifiers </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#">
                                                {" "}
                                                Modelling & Sculpting{" "}
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#">
                                                {" "}
                                                Bedding Accessories{" "}
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#">
                                                {" "}
                                                Wardrobe Organisers{" "}
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#"> Washing Powder </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#"> Women </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#"> LED Strip Lighting </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#"> Wireless Earbud </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#"> Humidifiers </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#">
                                                {" "}
                                                Modelling & Sculpting{" "}
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="nh-categories-item">
                                <div className="nh-categories-item-bg nh-hover-box-shadow">
                                    <div className="nh-categories-img image-hover-effect">
                                        <img
                                            src="/images/meril.svg"
                                            className=" img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                        <h4>
                                            <a href="#">
                                                {" "}
                                                Bedding Accessories{" "}
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nh-brands-area">
                    <div className="row nh-common-title-area">
                        <div className="col-md-12">
                            <div className="nh-common-title d-flex align-items-center justify-content-between">
                                <div className="nh-common-item d-flex align-items-center">
                                    <h3>Brands</h3>
                                    <div className="common-border"></div>
                                </div>
                                <div className="nh-common-item">
                                    <a href="#">View All</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row nh-categories-row">
                        <div className="col-md-12">
                            <div className="nh-categories-holder">
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/bengal.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#">
                                                    Wardrobe Organisers
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/square.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#">Washing Powder</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/bd-food.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#"> Women </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/bengal.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#">
                                                    {" "}
                                                    LED Strip Lighting{" "}
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/square.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#">
                                                    {" "}
                                                    Wireless Earbud{" "}
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/bd-food.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#"> Humidifiers </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/bengal.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#">
                                                    {" "}
                                                    Modelling & Sculpting{" "}
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/square.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#">
                                                    {" "}
                                                    Bedding Accessories{" "}
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/bd-food.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#">
                                                    {" "}
                                                    Wardrobe Organisers{" "}
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/bengal.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#"> Washing Powder </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/square.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#"> Women </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/bd-food.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#">
                                                    {" "}
                                                    LED Strip Lighting{" "}
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/bengal.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#">
                                                    {" "}
                                                    Wireless Earbud{" "}
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/square.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#"> Humidifiers </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/bd-food.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#">
                                                    {" "}
                                                    Modelling & Sculpting{" "}
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="nh-categories-item">
                                    <div className="nh-categories-item-bg nh-hover-box-shadow">
                                        <div className="nh-categories-img image-hover-effect">
                                            <img
                                                src="/images/bengal.svg"
                                                className=" img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                                            <h4>
                                                <a href="#">
                                                    {" "}
                                                    Bedding Accessories{" "}
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nh-just-for-you">
                    <div className="row nh-common-title-area">
                        <div className="col-md-12">
                            <div className="nh-common-title d-flex align-items-center justify-content-between">
                                <div className="nh-common-item d-flex align-items-center">
                                    <h3>Just For You</h3>
                                    <div className="common-border"></div>
                                </div>
                                <div className="nh-common-item">
                                    <a href="#">View All</a>
                                </div>
                            </div>
                        </div>
                    </div>

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
