"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const CategoryColorVariantItems = ({ colorItem, searchParams }) => {
    const { id, value: bgColor } = colorItem;

    let router = useRouter()
    const [checked, setChecked] = useState(id === searchParams?.color);

    const handleChange = (e) => {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);

        if (checked) {
            params.delete('color');
        } else {
            params.set('color', id);
        }

        url.search = params.toString();
        router.push(url.toString(), undefined, { shallow: true });
        setChecked(!checked);
    };

    return (
        <div
            className="product-details-inner-color product-details-variant-item"
            style={{ background: `${bgColor}` }}
        >  
            <input
                type="checkbox"
                name="color"
                id={`color-variant_${id}`}
                value={id}
                checked={checked}
                onChange={handleChange}
            />
            <label htmlFor={`color-variant_${id}`}></label>
        </div>
    );
};

export default CategoryColorVariantItems;
