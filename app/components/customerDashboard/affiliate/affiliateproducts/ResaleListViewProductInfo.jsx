import { NagadhatPublicUrl, truncateTitle } from "@/app/utils";

const ResaleListViewProductInfo = ({ resaleProduct }) => {
    return (
        <>
            <div className="table-responsive-xl">
                <div
                    className="d-flex flex-column gap-3 "
                    style={{ minWidth: "500px" }}
                >
                    {resaleProduct?.map(product => (
                        <div key={product.id} className="flash-sale-content-item flash-sale-content-bg affiliate-product-list-item">
                            <div className="flash-sale-content-info text-hover-effect d-flex gap-3 justify-content-between align-items-center">
                                <div className="d-flex gap-3">
                                    <div
                                        className="mb-0"
                                        style={{
                                            height: "80px",
                                            width: "80px",
                                        }}
                                    >
                                        <img
                                            src={`${NagadhatPublicUrl}/${product.product_thumbnail}`}
                                            className="img-fluid"
                                            alt={product.product_name}
                                        />
                                    </div>
                                    <h4 title={product.product_name}>
                                        {truncateTitle(product.product_name, 50)}
                                    </h4>
                                </div>
                                <div className="category-product-price">
                                    <p className="fpnh-resale-pricess">
                                        Price (MRP){" "}
                                        <del className="fw-bold">৳ {product.mrp_price}</del>
                                    </p>
                                    <p className="fpnh-resale-pricess">
                                        Price (Offer)
                                        <span className="fw-bold">৳ {product.after_discount_mrp_price}</span>
                                    </p>
                                    <p className="fpnh-resale-pricess">
                                        Minimum Quantity:
                                        <span className="fw-bold">{product.min_quantity || "N/A"}</span>
                                    </p>
                                    <p className="fpnh-resale-pricess">
                                        Duration:
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
                                            ADD TO CART
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
