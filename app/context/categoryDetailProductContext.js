"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getCategorydetailBySlug } from "../services/getCategorydetailBySlug";

const CategoryDetailProductContext = createContext();
export const useCategoryDetailProductContext = () =>
    useContext(CategoryDetailProductContext);

export const CategoryDetailProvider = ({ children, slug, option }) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const res = await getCategorydetailBySlug(slug, option);
            const products = await res?.results?.data;
            setProducts(products);
        } catch (error) {
            console.error(
                "Something went wrong fetching Category details Slug Data"
            );
            console.info(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, [slug, option]); // re-fetch products if slug or option changes

    return (
        <CategoryDetailProductContext.Provider
            value={{ products, setProducts }}
        >
            {children}
        </CategoryDetailProductContext.Provider>
    );
};
