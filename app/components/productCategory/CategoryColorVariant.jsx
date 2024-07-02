"use client";
import { useState } from "react";
import CategoryColorVariantItems from "./CategoryColorVariantItems";
import ViewMoreLink from "./ViewMoreLink";

const CategoryColorVariant = ({ colorVariant, searchParams }) => {
    const [startItem, setStartItem] = useState(0);
    const perPageItem = 5;
    const handleViewMore = () => {
        setStartItem(startItem + perPageItem);
    };
    return (
        <div className="product-color-category-area sub-category-pb40">
            <div className="product-details-inner-quantity d-flex align-items-center">
                {colorVariant
                    .slice(startItem, startItem + perPageItem)
                    .map((colorItem) => (
                        <CategoryColorVariantItems
                            key={colorItem.id}
                            colorItem={colorItem}
                            searchParams={searchParams}
                        />
                    ))}
            </div>
            {startItem + perPageItem < colorVariant.length && (
                <ViewMoreLink handleViewMore={handleViewMore} />
            )}
        </div>
    );
};

export default CategoryColorVariant;
