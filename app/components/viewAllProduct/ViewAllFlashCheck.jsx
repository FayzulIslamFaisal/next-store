"use client";
import { useState, useEffect } from "react";
import Sales from "../Sales";
// import { fetchRecentViewProducts } from "../services/getRecentViewProduct";
import { useSession } from "next-auth/react";
import { fetchRecentViewProducts } from "@/app/services/getRecentViewProduct";

const ViewAllFlashCheck = () => {
    const { status, data: session } = useSession();
    const [recentViewProductData, setRecentViewProductData] = useState([]);
    const [outletId, setOutletId] = useState(0);

    useEffect(() => {
        const initialOutletId = localStorage.getItem("outletId");
        setOutletId(initialOutletId ? parseInt(initialOutletId) : 3);
    }, []);

    useEffect(() => {
        const recentViewConfigure = async () => {
            if (session) {
                const recentViewProductFetch = await fetchRecentViewProducts(
                    session?.accessToken,
                    outletId
                );
                setRecentViewProductData(
                    recentViewProductFetch?.results?.for_you_products
                );
            } else {
                if (typeof window !== "undefined") {
                    const storedProducts =
                        JSON.parse(
                            localStorage.getItem("recentlyViewProducts")
                        ) || [];
                    setRecentViewProductData(storedProducts);
                }
            }
        };
        recentViewConfigure();
    }, [session, outletId]);
    
    return (
        <>
            {recentViewProductData.length > 0 && (
                <Sales
                    isHome={false}
                    bgcolor="bg-white"
                    removePx={`removepadding-x`}
                />
            )}
        </>
    );
};

export default ViewAllFlashCheck;
