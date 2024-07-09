"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CategoryColorVariantItems = ({ colorItem, searchParams }) => {
    const { id, value: bgColor } = colorItem;

    const router = useRouter();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(
            searchParams?.color &&
                searchParams.color.split(",").includes(id.toString())
        );
    }, [searchParams, id]);

    const handleChange = () => {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);

        // Toggle the selection
        if (checked) {
            // Remove color from params
            const updatedColors = searchParams.color
                .split(",")
                .filter((colorId) => colorId !== id.toString());
            if (updatedColors.length > 0) {
                params.set("color", updatedColors.join(","));
            } else {
                params.delete("color");
            }
        } else {
            // Add color to params
            const currentColors = searchParams.color
                ? searchParams.color.split(",")
                : [];
            params.set("color", [...currentColors, id].join(","));
        }
        params.set("page","1");
        // Convert params to string with commas instead of %2C
        const newUrlSearchParams = decodeURIComponent(params.toString());

        router.push(
            `${window.location.pathname}?${newUrlSearchParams}`,
            undefined,
            { shallow: true }
        );
        
        setChecked(!checked);
    };

    return (
        <div
            className="product-details-inner-color product-details-variant-item"
            style={{ background: bgColor }}
        >
            <input
                type="checkbox"
                name={`color-${id}`}
                id={`color-variant_${id}`}
                checked={checked}
                onChange={handleChange}
                value={checked}
            />
            <label htmlFor={`color-variant_${id}`}></label>
        </div>
    );
};

export default CategoryColorVariantItems;
