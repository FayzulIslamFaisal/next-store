"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CategoryVariantItems = ({ brandItem, mergeId, type, searchParams }) => {
    const { title: value, id } = brandItem;

    const router = useRouter();
    const [checked, setChecked] = useState(id == searchParams[type]);

    const handleChange = () => {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);

        if (checked) {
            params.delete(type);
        } else {
            params.set(type, id);
        }

        url.search = params.toString();
        router.push(url.toString(), undefined, { shallow: true });
        setChecked(!checked);
    };

    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                id={`inlineCheckbox1_${id}_${mergeId}`}
                value={value}
                checked={checked}
                onChange={handleChange}
            />
            <label
                className="form-check-label"
                htmlFor={`inlineCheckbox1_${id}_${mergeId}`}
            >
                {value}
            </label>
        </div>
    );
};

export default CategoryVariantItems;
