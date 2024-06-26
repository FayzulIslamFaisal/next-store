"use client";
import { createContext, useContext, useState } from "react";

const CategoryDetailContext = createContext();
export const useCategoryDetailContext = () => useContext(CategoryDetailContext);

export const CategoryDetailProvider = ({ children }) => {
    const [option, setOption] = useState({});
    return (
        <CategoryDetailContext.Provider value={{ option, setOption }}>
            {children}
        </CategoryDetailContext.Provider>
    );
};
