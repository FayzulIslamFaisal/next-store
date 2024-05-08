"use client";
import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import LoadMore from "./LoadMore";
import ProductCard from "./ProductCard";
import AddToCartButton from "./AddToCartButton";
import Like from "./Like";

function JustForYou() {
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

    const [jfyProducts, setJfyProducts] = useState(justForYouProductList);
    const [offset, setOffset] = useState(12);
    const [showLoadMore, setLoadMore] = useState(true);

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
        };
        fetchJfyProducts();
    }, [offset]);

    return (
        <div className="nh-just-for-you">
            <SectionTitle title="Just For You" />

            <div className="row just-for-random-product">
                <div className="col-md-12">
                    <div className="flash-sale-content-area">
                        {jfyProducts.map((product) => (
                            <ProductCard key={product.id} item={product} />
                        ))}
                    </div>
                </div>
            </div>

            {showLoadMore && <LoadMore onLoadMore={handleLoadMore} />}
        </div>
    );
}

export default JustForYou;
