"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getCategorydetailBySlug } from "../services/getCategorydetailBySlug";

const CategoryDetailProductContext = createContext([]);

const CategoryDetailProductProvider = ({ children, slug, option }) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const res = await getCategorydetailBySlug(slug, option);
            const product = await res?.results?.data || [];
            setProducts(product);
        } catch (error) {
            console.error("Something went wrong fetching Category details Data");
            console.info(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, [slug, option]);

    return (
        <CategoryDetailProductContext.Provider value={{ products, setProducts }}>
            {children}
        </CategoryDetailProductContext.Provider>
    );
};

// Custom hook
const useCategoryDetailProductContext = () => {
    return useContext(CategoryDetailProductContext);
};

export { CategoryDetailProductProvider, CategoryDetailProductContext, useCategoryDetailProductContext };
