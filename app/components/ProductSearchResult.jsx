"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ProductSearchResult = ({ searchProduct, setSearchProduct, setSearch }) => {

const searchResultRef = useRef(null);
// function Click Outside Search Modal hide
useEffect(() => {
    const handleClickOutside = (event) => {
        if (
            searchResultRef.current &&
            !searchResultRef.current.contains(event.target)
        ) {
            setSearchProduct([]);
            setSearch("");
        }
    };
    if (typeof window !== "undefined") {
        document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [setSearchProduct, setSearch]);

    return (
        <div ref={searchResultRef} className="product-search-modal-area">
            <div className="product-search-modal-content">
                <div className="search-modal-title">
                    <h4>products</h4>
                </div>
                <div className="search-modal-info">
                    <ul className="similer-search-product-list">
                        {searchProduct &&
                            searchProduct.map((product, index) => (
                                <li
                                    key={`${product?.product_name}-${product?.slug}-${index}`}
                                >
                                    <Link href={`/products/get-product-details?outlet_id=${product?.outlet_id}&product_id=${product?.product_id}`}>
                                        <div className="search-modal-info-inner d-flex align-content-center gap-4">
                                            <div className="search-modal-info-img">
                                                <Image
                                                    fill
                                                    src={`${process.env.NEXT_PUBLIC_ROOT_URL}/${product?.product_thumbnail}`}
                                                    alt={product?.product_name}
                                                />
                                            </div>
                                            <div className="search-modal-info-details">
                                                <p>{product?.product_name}</p>
                                                <strong>
                                                    ৳ {product?.mrp_price}
                                                </strong>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductSearchResult;
