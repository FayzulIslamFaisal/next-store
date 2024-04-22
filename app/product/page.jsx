import Breadcrumb from "../components/productDetail/Breadcrumb";
import Service from "../components/Service";
import Sales from "../components/Sales";
import ProductRightSide from "../components/productDetail/ProductRightSide";
import ProductLeftSide from "../components/productDetail/ProductLeftSide";
import SectionTitle from "../components/SectionTitle";

const ProductDetails = () => {
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
            <section className="product-details-section">
                <div className="container">
                    <Breadcrumb />
                    <div className="row product-details-info">
                        <ProductLeftSide />
                        <ProductRightSide />
                    </div>
                    <SectionTitle title="Recent view" />
                    <Sales />
                    <Service serviceItems={serviceItems} />
                </div>
            </section>
        </>
    );
};

export default ProductDetails;
