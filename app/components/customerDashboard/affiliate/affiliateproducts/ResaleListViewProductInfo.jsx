"use client";
import { NagadhatPublicUrl, truncateTitle } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ResaleListViewProductInfo = ({ resaleProduct }) => {
    const searchParams = useSearchParams();
    const tab = searchParams.get("tab") || "retails-tab";
    return (
        <>
            <div className="table-responsive-xl">
                <div
                    className="d-flex flex-column gap-3 "
                    style={{ minWidth: "640px" }}
                >
                    {resaleProduct?.map((product) => (
                        <div
                            key={product.id}
                            className="flash-sale-content-item flash-sale-content-bg affiliate-product-list-item"
                        >
                            <div className="flash-sale-content-info text-hover-effect d-flex gap-3 justify-content-between align-items-center">
                                <div
                                    className="d-flex gap-3"
                                    style={{
                                        minWidth: "200px",
                                        maxWidth: "360px",
                                        flex: "1",
                                    }}
                                >
                                    <div
                                        className="mb-0"
                                        style={{
                                            height: "120px",
                                            width: "80px",
                                        }}
                                    >
                                        <Link
                                            href={`/resale-product-details/${product.id}/${tab}`}
                                        >
                                            <Image
                                                height={120}
                                                width={80}
                                                src={`${NagadhatPublicUrl}/${product.product_thumbnail}`}
                                                className="img-fluid"
                                                alt={product.product_name}
                                            />
                                        </Link>
                                    </div>
                                    <h4
                                        title={product.product_name}
                                        style={{
                                            minWidth: "120px",
                                            maxWidth: "280px",
                                            flex: "1",
                                        }}
                                    >
                                        <Link
                                            href={`/resale-product-details/${product.id}/${tab}`}
                                        >
                                            {truncateTitle(
                                                product.product_name,
                                                80
                                            )}
                                        </Link>
                                    </h4>
                                </div>
                                <div className="category-product-price">
                                    <p className="fpnh-resale-pricess">
                                        Price (MRP):{" "}
                                        <del className="fw-bold">
                                            ৳ {product.resell_mrp_price}
                                        </del>
                                    </p>
                                    <p className="fpnh-resale-pricess">
                                        Price (Offer):{" "}
                                        <span className="fw-bold">
                                            ৳ {product.resell_purchases_price}
                                        </span>
                                    </p>
                                    <p className="fpnh-resale-pricess">
                                        Minimum Quantity:{" "}
                                        <span className="fw-bold">
                                            {product.min_quantity || "N/A"}
                                        </span>
                                    </p>
                                    <p className="fpnh-resale-pricess">
                                        Duration:{" "}
                                        <span className="fw-bold">
                                            {`After ${product.fast_moving_duration} Months`}
                                        </span>
                                    </p>
                                </div>
                                <div className="add-to-cart-holder">
                                    <div className="add-to-cart-btn">
                                        <a
                                            className="add-to-cart-link undefined category-product-add-btn"
                                            href="#"
                                            style={{
                                                pointerEvents: "auto",
                                                opacity: 1,
                                            }}
                                        >
                                            Buy Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ResaleListViewProductInfo;
