"use client";
import Service from "./Service";
import SectionTitle from "./SectionTitle";
import ProductCategories from "./ProductCategories";
import ProductCard from "./ProductCard";
import AddToCartButton from "./AddToCartButton";
import Like from "./Like";
import LoadMore from "./LoadMore";
import { useEffect, useState } from "react";

function Category() {
    const justForYouProductList = [
        {
            id: 1,
            image: "/images/flash-img1.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 2,
            image: "/images/flash-img2.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 3,
            image: "/images/flash-img3.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 4,
            image: "/images/flash-img4.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 5,
            image: "/images/flash-img5.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 6,
            image: "/images/flash-img6.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 7,
            image: "/images/flash-img1.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 8,
            image: "/images/flash-img2.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 9,
            image: "/images/flash-img3.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 10,
            image: "/images/flash-img4.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 11,
            image: "/images/flash-img5.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 12,
            image: "/images/flash-img6.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 13,
            image: "/images/flash-img1.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 14,
            image: "/images/flash-img2.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 15,
            image: "/images/flash-img3.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 16,
            image: "/images/flash-img4.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 17,
            image: "/images/flash-img5.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 18,
            image: "/images/flash-img6.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
    ];
    const [offset, setOffset] = useState(12);
    const [showLoadMore, setLoadMore] = useState(true);
    const [jfyProducts, setJfyProducts] = useState(justForYouProductList);
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

    const handleLoadMore = (e) => {
        e.preventDefault();
        setOffset((prev) => prev * 2);
    };

    useEffect(() => {
        const newProductItem = justForYouProductList.slice(0, offset);
        const fetchJfyProducts = () => {
            setJfyProducts(newProductItem);
            if (newProductItem.length == justForYouProductList.length) {
                setLoadMore(false);
            }
            setJfyProducts(newProductItem);
            console.log("showLoadMore", showLoadMore);
        };
        fetchJfyProducts();
    }, [offset]);

    return (
        <section className="nh-categories-area">
            <div className="container">
                <SectionTitle title="Categories" path="#" />
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
                                {jfyProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        item={product}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {showLoadMore && <LoadMore onLoadMore={handleLoadMore} />}
                </div>

                <Service serviceItems={serviceItems} />
            </div>
        </section>
    );
}

export default Category;
