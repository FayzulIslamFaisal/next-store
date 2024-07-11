"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CategoryVariantItems = ({ brandItem, mergeId, type, searchParams }) => {
    const { title: value, id } = brandItem;

    const router = useRouter();
    const [selectedIds, setSelectedIds] = useState([]);

    useEffect(() => {
        const initialSelectedIds = searchParams[type]
            ? searchParams[type].split(",")
            : [];
        setSelectedIds(initialSelectedIds);
    }, [searchParams, type]);

    const handleChange = () => {
        let updatedSelectedIds = [...selectedIds];
        if (selectedIds.includes(id.toString())) {
            updatedSelectedIds = updatedSelectedIds.filter(
                (selectedId) => selectedId !== id.toString()
            );
        } else {
            updatedSelectedIds.push(id.toString());
        }

        const params = new URLSearchParams(window.location.search);

        if (updatedSelectedIds.length > 0) {
            params.set(type, updatedSelectedIds.join(","));
        } else {
            params.delete(type);
        }
        params.set("page","1");
        // Construct the new URL without encoding commas
        const newUrlSearchParams = params.toString().replace(/%2C/g, ",");

        router.push(
            `${window.location.pathname}?${newUrlSearchParams}`,
            undefined,
            { shallow: true }
        );
        setSelectedIds(updatedSelectedIds);
    };

    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                id={`inlineCheckbox1_${id}_${mergeId}`}
                value={value}
                checked={selectedIds.includes(id.toString())}
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
