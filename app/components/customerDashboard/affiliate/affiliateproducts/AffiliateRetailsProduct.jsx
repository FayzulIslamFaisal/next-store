"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";
import AffiliateToggleButton from "./AffiliateToggleButton";
import AffiliateRetailsProductInfo from "./AffiliateRetailsProductInfo";
import { Suspense, useEffect, useState } from "react";
import RetailListViewProductInfo from "./RetailListViewProductInfo";
import { useSession } from "next-auth/react";
import { getAffiliateRetailProduct } from "@/app/services/affiliate/affiliateproducts/getAffiliateRetailProduct";

const AffiliateRetailsProduct = () => {
    const [isGridView, setIsGridView] = useState(true);
    const [retailProduct, setRetailProduct] = useState([]);
    const [outletId, setOutletId] = useState(0);
    const { data: session, status } = useSession();

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
                    const retailProductInfo = await getAffiliateRetailProduct(
                        session.accessToken,
                        outletId
                    );
                    const retailProductData =
                        retailProductInfo?.results?.affiliate_retail_products
                            ?.data || [];
                    setRetailProduct(retailProductData);
                } catch (error) {
                    console.error("Failed to fetch retail products:", error);
                }
            };
            fetchRetailProducts();
        }
    }, [status, session, outletId]);

    return (
        <>
            <div
                className="tab-pane fade show active container-booking-body-tab"
                id="retails"
                role="tabpanel"
            >
                <div className="justify-content-end d-flex align-content-end flex-sm-nowrap flex-wrap gap-2 gap-md-3 pb-4">
                    <div className="input-group affiliate-products-search">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                        />
                        <button className="input-group-text" id="search">
                            <FaMagnifyingGlass />
                        </button>
                    </div>
                    <div>
                        <label htmlFor="show" className="form-label" hidden>
                            Show
                        </label>
                        <select
                            className="form-select district-list"
                            name="show"
                            id="show"
                        >
                            <option className="selected" defaultValue="all">
                                Select Category
                            </option>
                            <option defaultValue="organic">Organic</option>
                            <option defaultValue="mens-fashion">
                                Men's Fashion
                            </option>
                        </select>
                    </div>
                    <AffiliateToggleButton
                        handleToggle={handleToggle}
                        isGridView={isGridView}
                    />
                </div>
                {/* <AffiliateRetailsProductInfo /> */}
                <Suspense fallback={<h1>Retail Products Loading...</h1>}>
                    {isGridView ? (
                        <AffiliateRetailsProductInfo
                            retailProduct={retailProduct}
                        />
                    ) : (
                        <RetailListViewProductInfo
                            retailProduct={retailProduct}
                        />
                    )}
                </Suspense>
            </div>
        </>
    );
};

export default AffiliateRetailsProduct;
