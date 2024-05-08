import Breadcrumb from "../components/productDetail/Breadcrumb";
import Service from "../components/Service";
import CategoryLeftSide from "../components/productCategory/CategoryLeftSide";
import CategoryRightSide from "../components/productCategory/CategoryRightSide";

const ProductCategory = () => {
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
        <>
            <section className="product-category-wrapper">
                <div className="container">
                    <Breadcrumb />
                    <div className="row product-category-details-row">
                        <div className="col-md-12">
                            <div className="product-category-details">
                                <CategoryLeftSide />
                                <CategoryRightSide />
                            </div>
                        </div>
                    </div>
                    <Service serviceItems={serviceItems} />
                </div>
            </section>
        </>
    );
};

export default ProductCategory;
