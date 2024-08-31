import NoDataFound from "@/app/components/NoDataFound";
import { NagadhatPublicUrl } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";

const RetailListViewProductInfo = ({ retailProduct, outletId }) => {
    return (
        <div className="table-responsive-xl">
            <div
                className="d-flex flex-column gap-3"
                style={{ minWidth: "500px" }}
            >
                {retailProduct.length > 0 ? (
                    retailProduct.map((product) => {
                        const imageUrl = `${NagadhatPublicUrl}/${product?.product_thumbnail}`;
                        return (
                            <div
                                key={product.id}
                                className="flash-sale-content-item flash-sale-content-bg affiliate-product-list-item"
                            >
                                <div className="flash-sale-content-info text-hover-effect d-flex gap-3 justify-content-between align-items-center">
                                    <div className="d-flex gap-3 flex-1 flex-shrink-0 ">
                                        <div
                                            className="mb-0 flex-shrink-0"
                                            style={{
                                                height: "80px",
                                                width: "80px",
                                                position: "relative",
                                            }}
                                        >
                                            <Image
                                                fill
                                                src={
                                                    imageUrl ||
                                                    "/images/flash-img1.jpg"
                                                }
                                                className="img-fluid"
                                                alt={
                                                    product?.product_name ||
                                                    "Product image"
                                                }
                                                sizes="(max-width: 576px) 100vw, 
                                                    (max-width: 768px) 100vw, 
                                                    (max-width: 992px) 100vw, 
                                                    100vw"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                        <h4
                                            style={{
                                                maxWidth: "300px",
                                                minWidth: "80px",
                                            }}
                                        >
                                            <Link
                                                href={`/affiliate-product-details/${product.slug}`}
                                            >
                                                {product?.product_name ||
                                                    "Product Name"}
                                            </Link>
                                        </h4>
                                    </div>
                                    <div className="flex-shrink-0 ">
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="d-flex align-items-center gap-2">
                                                {product?.after_discount_mrp_price ===
                                                product?.mrp_price ? (
                                                    <strong>
                                                        {`৳ ${product?.mrp_price}`}
                                                    </strong>
                                                ) : (
                                                    <>
                                                        <strong>{`৳ ${product?.after_discount_mrp_price}`}</strong>
                                                        <strong>
                                                            <del
                                                                style={{
                                                                    color: "#ACACAC",
                                                                }}
                                                            >{`৳ ${product?.mrp_price}`}</del>
                                                        </strong>
                                                    </>
                                                )}
                                            </div>
                                            <p className="affiliate-commission">
                                                Commission:{" "}
                                                {`৳ ${
                                                    product?.calculated_commission ||
                                                    "0"
                                                }`}{" "}
                                                <span className="ms-1">
                                                    ({product?.level_commission}
                                                    )
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex-1 d-inline-flex justify-content-end flex-shrink-0">
                                        <div>
                                            <button className=" copy-link-btn mt-0 px-3">
                                                Copy Link
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className=" w-100">
                        <NoDataFound
                            title={`Affiliate retail products not found.`}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default RetailListViewProductInfo;
