import { NagadhatPublicUrl, truncateTitle } from "@/app/utils";
import Image from "next/image";

const ResaleProductsInfo = ({ resaleProduct }) => {
    return (
        <div className="row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xxl-4 g-3">
            {resaleProduct?.map(product => (
                <div key={product.id} className="flash-sale-content-item col">
                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                        <div className="flash-sale-content-img image-hover-effect">
                            <Image
                                height={200}
                                width={200}
                                src={`${NagadhatPublicUrl}/${product.product_thumbnail}`}
                                className="img-fluid h-100 w-100"
                                alt={product.product_name}
                            />
                        </div>
                        <div className="flash-sale-content-info text-hover-effect">
                            <h4 title={product.product_name}>
                                {truncateTitle(product.product_name, 50)}
                            </h4>
                            <div className="category-product-price d-flex flex-column justify-content-between">
                                <p className="fpnh-resale-pricess">
                                    Price (MRP):{" "}
                                    <del className="fw-bold">৳ {product.mrp_price}</del>
                                </p>
                                <p className="fpnh-resale-pricess">
                                    Price (Offer):{" "}
                                    <span className="fw-bold">৳ {product.after_discount_mrp_price}</span>
                                </p>
                                <p className="fpnh-resale-pricess">
                                    Minimum Quantity:{" "}
                                    <span className="fw-bold">{product.min_quantity || "N/A"}</span>
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
                                        ADD TO CART
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResaleProductsInfo;
