"use client";
import Service from "@/app/components/Service";
import CategoryLeftSide from "@/app/components/productCategory/CategoryLeftSide";
import CategoryRightSide from "@/app/components/productCategory/CategoryRightSide";
import Breadcrumb from "@/app/components/productDetail/Breadcrumb";
import { getCategorydetailBySlug } from "@/app/services/getCategorydetailBySlug";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DynamicCategoryPage = ({ params }) => {
    const searchParams = useSearchParams();
    const [categoryBySlugData, setCategoryBySlugData] = useState(null);
    const { slug } = params;
    const [option, setOption] = useState({});
    const [outletId, setOutletId] = useState(0); // default outlet
    
    useEffect(() => {
        const initialOutletId = localStorage.getItem('outletId');
        setOutletId(initialOutletId?parseInt(initialOutletId):3);
    }, []);

    useEffect(() => {
        const newOption = {};
        for (const key of searchParams.keys()) {
            newOption[key] = searchParams.get(key);
        }
        setOption(newOption);
    }, [searchParams]);

    const page = parseInt(option.page) || 1;
    const limit = 12; // Items per page

    useEffect(() => {
        if (outletId) {
            const fetchProducts = async () => {
                try {
                    const data = await getCategorydetailBySlug(outletId, slug, option);
                    setCategoryBySlugData(data);
                } catch (error) {
                    console.error("Error fetching 'Just For You' products:", error);
                }
            };
            fetchProducts(); 
        }
    }, [slug, option]);

    const categoryByResult = categoryBySlugData?.results;
    const categoryTitle = categoryByResult?.category;
    const categoryByProduct = categoryByResult?.products?.data;
    const categoryByBrand = categoryByResult?.brands;
    const categoryByColor = categoryByResult?.colors;
    const categoryBySize = categoryByResult?.sizes;
    const subCategoryTitle = categoryByResult?.category?.children;
    const allSubCategories = categoryByResult?.sub_categories;
    const categoryByMinPrice = categoryByResult?.min_price;
    const categoryByMaxPrice = categoryByResult?.max_price;
    const categoryTotalMinPrice = categoryByResult?.category_min_price;
    const categoryTotalMaxPrice = categoryByResult?.category_max_price;
    const totalProduct = categoryByResult?.total_product;
    const lastPage = categoryByResult?.products?.last_page;

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
            subTitle: "Best Product Pieces",
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
            title: " Help Center",
            subTitle: "Support System 24/7",
        },
    ];

    return (
        <section className="product-category-wrapper">
            <div className="container">
                <Breadcrumb />
                <div className="row product-category-details-row">
                    <div className="col-md-12">
                        <div className="product-category-details">
                            <CategoryLeftSide
                                categoryByBrand={categoryByBrand}
                                categoryByColor={categoryByColor}
                                categoryBySize={categoryBySize}
                                subCategoryTitle={subCategoryTitle}
                                categoryByMinPrice={categoryByMinPrice}
                                categoryByMaxPrice={categoryByMaxPrice}
                                categoryTotalMinPrice={categoryTotalMinPrice}
                                categoryTotalMaxPrice={categoryTotalMaxPrice}
                                allSubCategories={allSubCategories}
                                searchParams={option}
                            />
                            <CategoryRightSide
                                categoryByProduct={categoryByProduct}
                                categoryByResult={categoryByResult}
                                categoryTitle={categoryTitle}
                                searchParams={option}
                                totalProduct={totalProduct}
                                lastPage={lastPage}
                                currentPage={page}
                                itemsPerPage={limit}
                            />
                        </div>
                    </div>
                </div>
                <Service serviceItems={serviceItems} />
            </div>
        </section>
    );
};

export default DynamicCategoryPage;
