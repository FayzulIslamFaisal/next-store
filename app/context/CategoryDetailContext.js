"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useCategoryDetailProductContext } from "./CategoryDetailProductContext";

const CategoryDetailContext = createContext(
    {
        category_filter_products: [],
        category_all_products: [],
        filters_option: {
            color: "red",
            Size: "xl",
            Brand: "",
            order: "asc",
            maxPrice: 0,
            price: 0,
            minPrice: 0,
        },
    }
);

const CategoryDetailProvider = ({ children }) => {
    const { products } = useCategoryDetailProductContext();
    const [filterOption, setFilterOption] = useState({
        category_filter_products: [],
        category_all_products: [],
        filters_option: {
            color: "red",
            Size: "xl",
            Brand: "",
            order: "asc",
            maxPrice: 0,
            price: 0,
            minPrice: 0,
        },
    });

    useEffect(() => {
        setFilterOption((prevState) => ({
            ...prevState,
            category_all_products: products || [],
        }));
    }, [products]);

    return (
        <CategoryDetailContext.Provider value={{ ...filterOption, setFilterOption }}>
            {children}
        </CategoryDetailContext.Provider>
    );
}

// Custom hook
const useCategoryDetailContext = () => {
    return useContext(CategoryDetailContext);
};

export { CategoryDetailContext, useCategoryDetailContext, CategoryDetailProvider };
