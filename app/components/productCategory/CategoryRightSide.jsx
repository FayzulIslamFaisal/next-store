import Image from "next/image"
import Link from "next/link"
import SectionTitle from "../SectionTitle"
import ProductCategories from "../ProductCategories";
import FindLooking from "./FindLooking";
import Pagination from "./Pagination";
import CategoryProductArchive from "./CategoryProductArchive";
import ShotBy from "./ShotBy";



const CategoryRightSide = () => {
    const featuredBrandtData = [
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
    const listCateProduct = [
        {
            id: 1,
            imageUrl: "/images/flash-img4.jpg",
            alttext: "product image 1",
            title: "Advanced Props Masala 620gm (8Pcs) Free 2 pcs (Nestle) hello world",
            path: "#",
            price: 899,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 10,
        },
        {
            id: 2,
            imageUrl: "/images/flash-img5.jpg",
            alttext: "product image 2",
            title: "onLoadingComplete (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 1000,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 20,
        },
        {
            id: 3,
            imageUrl: "/images/flash-img4.jpg",
            alttext: "product image 3",
            title: "onLoad Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 489,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 11,
        },
        {
            id: 4,
            imageUrl: "/images/flash-img2.jpg",
            alttext: "product image 1",
            title: "onError Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 459,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 15,
        },
        {
            id: 5,
            imageUrl: "/images/flash-img3.jpg",
            alttext: "product image 1",
            title: "loading Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 4589,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 15,
        },
        {
            id: 6,
            imageUrl: "/images/flash-img4.jpg",
            alttext: "product image 1",
            title: "blurDataURL Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 781,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 8,
        },
        {
            id: 7,
            imageUrl: "/images/flash-img4.jpg",
            alttext: "product image 1",
            title: "unoptimized Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 994,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 9,
        },
        {
            id: 8,
            imageUrl: "/images/flash-img5.jpg",
            alttext: "product image 1",
            title: "overrideSrc Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 899,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 14,
        },
        {
            id: 9,
            imageUrl: "/images/flash-img4.jpg",
            alttext: "product image 1",
            title: "Other Props Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 1485,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 5,
        },
        {
            id: 10,
            imageUrl: "/images/flash-img3.jpg",
            alttext: "product image 1",
            title: "remotePatterns Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 268,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 3,
        },
        {
            id: 11,
            imageUrl: "/images/flash-img4.jpg",
            alttext: "product image 11",
            title: "domains Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 8954,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 7,
        },
        {
            id: 12,
            imageUrl: "/images/flash-img5.jpg",
            alttext: "product image 12",
            title: "loaderFile Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 6259,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 10,
        },
        {
            id: 13,
            imageUrl: "/images/flash-img2.jpg",
            alttext: "product image 13",
            title: "deviceSizes Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 899,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 8,
        },
        {
            id: 14,
            imageUrl: "/images/flash-img4.jpg",
            alttext: "product image 14",
            title: "imageSizes Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 9689,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 10,
        },
        {
            id: 15,
            imageUrl: "/images/flash-img3.jpg",
            alttext: "product image 15",
            title: "formats Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 899,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 45,
        },
        {
            id: 16,
            imageUrl: "/images/flash-img4.jpg",
            alttext: "product image 16",
            title: "minimumCacheTTL Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 128,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 42,
        },
        {
            id: 17,
            imageUrl: "/images/flash-img5.jpg",
            alttext: "product image 7",
            title: "disableStaticImages Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 899,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 10,
        },
        {
            id: 18,
            imageUrl: "/images/flash-img4.jpg",
            alttext: "product image 18",
            title: "dangerouslyAllowSVG Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 899,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 10,
        },
        {
            id: 19,
            imageUrl: "/images/flash-img5.jpg",
            alttext: "product image 19",
            title: "dangerouslyAllowSVG Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 1299,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 20,
        },
        {
            id: 20,
            imageUrl: "/images/flash-img4.jpg",
            alttext: "product image 20",
            title: " Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            path: "#",
            price: 80,
            ratingImg: [
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
                {
                    altText: "star image",
                    img: "/images/category-Star .svg",
                },
            ],
            ratingCount: 5,
        },
    ];

    return (
        <main className="product-category-right-Side">
            <div className="category-right-Side">
                <div className="all-category-item-area d-flex align-items-center justify-content-between">
                    <div className="all-category-item">
                        <p>145 Itmes found “Women’s Shoes Accessories”</p>
                    </div>
                    <ShotBy />
                </div>
                <CategoryProductArchive
                    productArvhiveList={listCateProduct}
                />
                <div className="row product-category-pagination-row">
                    <div className="col-md-12">
                        <div className="product-category-pagination-area d-flex flex-wrap  align-items-center justify-content-between">
                            <FindLooking />
                            <Pagination />
                        </div>
                    </div>
                </div>
                <SectionTitle title={`Featured Brands`} />
                <ProductCategories
                    categoryProductData={featuredBrandtData}
                    isHome={false}
                />
            </div>
        </main>
    )
}

export default CategoryRightSide