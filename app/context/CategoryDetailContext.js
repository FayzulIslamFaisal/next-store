"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useCategoryDetailProductContext } from "./categoryDetailProductContext";

const CategoryDetailContext = createContext();
export const useCategoryDetailContext = () => useContext(CategoryDetailContext);

const initialState = {
    category_filter_products: [],
    category_all_products: [],
    category_sorting_value: "asc",
    category_filters: {
        color: "red",
    },
};

export const CategoryDetailProvider = ({ children }) => {
    const { products } = useCategoryDetailProductContext();
    const [filterOption, setFilterOption] = useState(initialState);

    useEffect(() => {
        // Update the category_all_products with the products from useCategoryDetailProductContext
        setFilterOption((prevState) => ({
            ...prevState,
            category_all_products: products,
        }));
    }, [products]);

    return (
        <CategoryDetailContext.Provider
            value={{ ...filterOption, setFilterOption }}
        >
            {children}
        </CategoryDetailContext.Provider>
    );
};
