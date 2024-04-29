"use client";
import { useEffect, useState } from "react";
import Service from "./Service";
import SectionTitle from "./SectionTitle";
import ProductCategories from "./ProductCategories";
import ProductCard from "./ProductCard";
import AddToCartButton from "./AddToCartButton";
import Like from "./Like";
import LoadMore from "./LoadMore";
import getBrandService from "../services/getBrandService";

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
    const [categoryBrandData, setCategoryBrandData] = useState([]);
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
            id: 1,
            title: "Wardrobe Organisers",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 2,
            title: "Wardrobe Organisers",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 3,
            title: "Meril",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 4,
            title: "Meril",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 5,
            title: "Wardrobe Organisers",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 6,
            title: "Wardrobe Organisers",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 7,
            title: "Meril",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 8,
            title: "Meril",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 9,
            title: "Wardrobe Organisers",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 10,
            title: "Wardrobe Organisers",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 11,
            title: "Meril",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 12,
            title: "Meril",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 13,
            title: "Wardrobe Organisers",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 14,
            title: "Wardrobe Organisers",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 15,
            title: "Meril",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
        },
        {
            id: 16,
            title: "Meril",
            description: "Wardrobe Organisers",
            slug: "wardrobe-organisers",
            logo: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            banner: "storage/media/brand/banner/istockphoto-1305947366-1024x1024.jpg",
            pos_brand_id: null,
            parent_id: 0,
            is_top_brand: 0,
            status: 1,
            created_at: "2024-03-30T06:46:35.000000Z",
            updated_at: "2024-03-30T06:46:35.000000Z",
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

    useEffect(() => {
        async function fetchData() {
            const data = await getBrandService();
            setCategoryBrandData(data);
        }
        fetchData();
    }, []);

    return (
        <section className="nh-categories-area">
            <div className="container">
                <SectionTitle title="Categories" path="#" />
                <ProductCategories
                    categoryProductData={categoryProductData}

                />

                <div className="nh-brands-area">
                    <SectionTitle title="Brands" path="#" />

                    {categoryBrandData && (
                        <ProductCategories
                            categoryProductData={categoryBrandData}
                        />
                    )}

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
