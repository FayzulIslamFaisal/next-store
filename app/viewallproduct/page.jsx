import Pagination from "../components/productCategory/Pagination"
import Sales from "../components/Sales";
import Service from "../components/Service";
import ViewAllBanner from "../components/viewAllProduct/ViewAllBanner";
import ViewAllCategoryTitle from "../components/viewAllProduct/ViewAllCategoryTitle";
import ViewAllProduct from "../components/viewAllProduct/ViewAllProduct";

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
    const viewProductData = [
        {
            id: 1,
            imageUrl: "/images/flash-img1.jpg",
            altText: "flash-img1",
            title: "One Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 2,
            imageUrl: "/images/flash-img2.jpg",
            altText: "flash-img2",
            title: "Two Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 3,
            imageUrl: "/images/flash-img3.jpg",
            altText: "flash-img3",
            title: "Three Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 4,
            imageUrl: "/images/flash-img4.jpg",
            altText: "flash-img4",
            title: "Four Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 5,
            imageUrl: "/images/flash-img5.jpg",
            altText: "flash-img5",
            title: "Five Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 6,
            imageUrl: "/images/flash-img6.jpg",
            altText: "flash-img6",
            title: "Six Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 7,
            imageUrl: "/images/flash-img1.jpg",
            altText: "flash-img7",
            title: "Seven Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 8,
            imageUrl: "/images/flash-img2.jpg",
            altText: "flash-img8",
            title: "Eight Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 9,
            imageUrl: "/images/flash-img3.jpg",
            altText: "flash-img9",
            title: "Nine Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 10,
            imageUrl: "/images/flash-img4.jpg",
            altText: "flash-img10",
            title: "Ten Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 11,
            imageUrl: "/images/flash-img5.jpg",
            altText: "flash-img11",
            title: "Eleven Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 12,
            imageUrl: "/images/flash-img6.jpg",
            altText: "flash-img12",
            title: "Twelve Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 13,
            imageUrl: "/images/flash-img1.jpg",
            altText: "flash-img13",
            title: "Thirteen Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 14,
            imageUrl: "/images/flash-img2.jpg",
            altText: "flash-img14",
            title: "Fourteen Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 15,
            imageUrl: "/images/flash-img3.jpg",
            altText: "flash-img15",
            title: "Fifteen Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },
        {
            id: 16,
            imageUrl: "/images/flash-img4.jpg",
            altText: "flash-img16",
            title: "Sixteen Lorem Ipsum is simply dummy tex",
            path: "#",
            price: 4580,
        },

    ]
    return (
        <div className="container view-all-product-container">
            <ViewAllBanner />
            <ViewAllCategoryTitle title={`Flash Sale`} />
            <ViewAllProduct viewProductData={viewProductData} />


            <div className="row view-all-product-pagination-area">
                <div className="col-md-12 text-center">
                    <Pagination />
                </div>
            </div>
            <Sales isHome={false} bgcolor="bg-white" removePx={`removepadding-x`} />
            <Service serviceItems={serviceItems} />
        </div>
    )
}

export default viewAllProduct