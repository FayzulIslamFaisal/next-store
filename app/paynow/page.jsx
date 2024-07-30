import PayNowTopIcon from "../components/paynow/PayNowTopIcon";
import PayNowDetails from "../components/paynow/PayNowDetails";
import Service from "../components/Service";

const PayNowPage = () => {
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
            <div className="pay-now-wrapper">
                <div className="container">
                    <PayNowTopIcon />
                    <PayNowDetails />
                    <Service serviceItems={serviceItems} />
                </div>
            </div>
        </>
    );
};

export default PayNowPage;
