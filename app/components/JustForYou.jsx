"use client";
import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import LoadMore from "./LoadMore";
import ProductCard from "./ProductCard";
import { getJustForYouProduct } from "../services/getJustForYouProduct";

function JustForYou() {
    const [jfyProducts, setJfyProducts] = useState([]);
    const [offset, setOffset] = useState(12);
    const [showLoadMore, setShowLoadMore] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const justForYoutList = await getJustForYouProduct();
                const justForYouProductList =
                    justForYoutList?.results?.["for_you_products"] || [];
                const initialProducts = justForYouProductList.slice(0, offset);

                setJfyProducts(initialProducts);
                if (initialProducts.length === justForYouProductList.length) {
                    setShowLoadMore(false);
                }
            } catch (error) {
                console.error("Error fetching 'Just For You' products:", error);
            }
        };

        fetchProducts();
    }, [offset]);

    const handleLoadMore = (e) => {
        e.preventDefault();
        setOffset((prev) => prev + 12);
    };

    return (
        <div className="nh-just-for-you">
            <SectionTitle title="Just For You" target="justForYou" path="/viewallproduct" />

            <div className="row just-for-random-product">
                <div className="col-md-12">
                    <div className="flash-sale-content-area">
                        {jfyProducts.map((product) => (
                            <ProductCard key={product.id} item={product} />
                        ))}
                    </div>
                </div>
            </div>

            {showLoadMore && <LoadMore onLoadMore={handleLoadMore} />}
        </div>
    );
}

export default JustForYou;
