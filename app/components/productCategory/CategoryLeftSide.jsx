
"use client"
import CategorySectionTitle from './CategorySectionTitle'
import SubCategoryList from './SubCategoryList';
import PriceRange from './PriceRange';
import CategoryVariant from './CategoryVariant';
import CategoryColorVariant from './CategoryColorVariant';
import { useState } from 'react';

const CategoryLeftSide = () => {
    const [showFullList, setShowFullList] = useState(false);

    const subCategoryData = [
        {
            id: 1,
            title: "Women's Shoes Accessories",
            path: "#"
        },
        {
            id: 2,
            title: "Bras",
            path: "#"
        },
        {
            id: 3,
            title: "Women's Socks & Tights",
            path: "#"
        },
        {
            id: 4,
            title: "Women's Hats & Caps",
            path: "#"
        },
        {
            id: 5,
            title: "Sarees",
            path: "#"
        },
        {
            id: 6,
            title: "Women Belts",
            path: "#"
        },
        {
            id: 7,
            title: "Panties",
            path: "#"
        },
        {
            id: 8,
            title: "Blouses & Shirts",
            path: "#"
        },
        {
            id: 9,
            title: "Sleep & Loungewear",
            path: "#"
        },
        {
            id: 10,
            title: "Women's Gloves",
            path: "#"
        },
        {
            id: 11,
            title: "Women's Shoes Accessories",
            path: "#"
        },
    ];
    const brandData = [
        {
            id: 1,
            value: "Women's Shoes Accessories",
        },
        {
            id: 2,
            value: "Bras",
        },
        {
            id: 3,
            value: "Women's Socks & Tights",
        },
        {
            id: 4,
            value: "Women's Hats & Caps",
        },
        {
            id: 5,
            value: "Sarees",
        },
        {
            id: 6,
            value: "Panties",
        },
        {
            id: 7,
            value: "Women Belts",
        },
        {
            id: 8,
            value: "Blouses & Shirts",
        },
        {
            id: 9,
            value: "Panties",
        },
    ];
    const sizedData = [
        {
            id: 1,
            value: "30",
        },
        {
            id: 2,
            value: "32",
        },
        {
            id: 3,
            value: "34",
        },
        {
            id: 4,
            value: "36",
        },
        {
            id: 5,
            value: "38",
        },
        {
            id: 6,
            value: "40",
        },
        {
            id: 7,
            value: "42",
        },
    ];
    const colorData = [
        {
            id: 1,
            bgColor: "#D9D9D9",
        },
        {
            id: 2,
            bgColor: "#FF0000",
        },
        {
            id: 3,
            bgColor: "#321313",
        },
        {
            id: 4,
            bgColor: "#4200FF",
        },
        {
            id: 5,
            bgColor: "#A0CF1B",
        }
    ];

    return (
        <aside className="product-category-left-Side">
            <div className="category-left-Side-info">
                <CategorySectionTitle title={`Sub Categories`} />
                <SubCategoryList subCategoryData={subCategoryData} />
                <CategorySectionTitle title={`Price Range`} />
                <PriceRange />
                <CategorySectionTitle title={`Brand`} />
                <CategoryVariant showFullList={false} setShowFullList={setShowFullList} variantData={brandData} />
                <CategorySectionTitle title={`Color`} />
                <CategoryColorVariant colorVariant={colorData} />
                <CategorySectionTitle title={`Size`} />
                <CategoryVariant showFullList={false} setShowFullList={setShowFullList} variantData={sizedData} mergeId={1} />
            </div>
        </aside>
    )
}

export default CategoryLeftSide