"use client";
import { useEffect, useState } from "react";
import AffiliateToggleButton from "./AffiliateToggleButton";
import ResaleListViewProductInfo from "./ResaleListViewProductInfo";
import ResaleProductsInfo from "./ResaleProductsInfo";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { getAffiliateResaleProduct } from "@/app/services/affiliate/affiliateproducts/getAffiliateResaleProduct";

const ResaleProducts = () => {
    const [isGridView, setIsGridView] = useState(true);
    const [resaleProduct, setResaleProduct] = useState([]);
    const [outletId, setOutletId] = useState(0);
    const { data: session, status } = useSession();
    const searchParams = useSearchParams();

    const handleToggle = (view) => {
        setIsGridView(view === "grid");
    };
    
    useEffect(() => {
        const initialOutletId = localStorage.getItem("outletId");
        setOutletId(initialOutletId ? parseInt(initialOutletId) : 3);
    }, []);

    useEffect(() => {
        if (status === "authenticated" && session?.accessToken && outletId) {
            const fetchRetailProducts = async () => {
                try {
                    let params = {};
                    const resaleProductInfo = await getAffiliateResaleProduct(
                        session.accessToken,
                        outletId,
                        params
                    );
                    const resaleProductData = resaleProductInfo?.results?.affiliate_fast_moving_products;
                    setResaleProduct(resaleProductData);
                } catch (error) {
                    console.error("Failed to fetch retail products:", error);
                }
            };
            fetchRetailProducts();
        }
    }, [session, outletId]);
    return (
        <>
            <div
                className="tab-pane fade container-booking-body-tab"
                id="resale"
                role="tabpanel"
            >
                <div className="justify-content-end d-flex align-items-end flex-sm-nowrap flex-wrap gap-2 gap-md-3 pb-4">
                    <div>
                        <label htmlFor="sort-ascending" className="form-label">
                            Sort By Duration
                        </label>
                        <select
                            className="form-select district-list"
                            name="sort-ascending"
                            id="sort-ascending"
                        >
                            <option className="selected" defaultValue="all">
                                Select
                            </option>
                            <option defaultValue="ascending">
                                Ascending
                            </option>
                            <option defaultValue="descending">
                                Descending
                            </option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sort-pric" className="form-label">
                            Sort by pric
                        </label>
                        <select
                            className="form-select district-list"
                            name="sort-pric"
                            id="sort-pric"
                        >
                            <option className="selected" defaultValue="all">
                                Select
                            </option>
                            <option defaultValue="high-to-low">
                                High to low
                            </option>
                            <option defaultValue="low-to-high">
                                Low to high
                            </option>
                        </select>
                    </div>
                    <AffiliateToggleButton
                        handleToggle={handleToggle}
                        isGridView={isGridView}
                    />
                </div>

                {isGridView ? (
                    <ResaleProductsInfo resaleProduct={resaleProduct}/>
                ) : (
                    <ResaleListViewProductInfo resaleProduct={resaleProduct}/>
                )}
            </div>
        </>
    );
};

export default ResaleProducts;
