import { NagadhatPublicUrl } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";

const AffiliateRetailsProductInfo = ({ retailProduct }) => {
    return (
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xxl-4 g-3">
            {retailProduct.length > 0 ? (
                retailProduct.map((product) => {
                    const imageUrl = `${NagadhatPublicUrl}/${product?.product_thumbnail}`;
                    return (
                        <div
                            key={product.id}
                            className="flash-sale-content-item col"
                        >
                            <div className="flash-sale-content-bg nh-hover-box-shadow">
                                <div className="flash-sale-content-img image-hover-effect">
                                    <Link
                                        href="#"
                                        style={{ cursor: "pointer" }}
                                        className="cursor-pointer "
                                    >
                                        <Image
                                            width={162}
                                            height={150}
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
                                    </Link>
                                </div>
                                <div className="flash-sale-content-info text-hover-effect">
                                    <h4>
                                        <Link href={product?.link || "#"}>
                                            {product?.product_name ||
                                                "Product Name"}
                                        </Link>
                                    </h4>
                                    <div className=" d-flex align-items-center justify-content-between ">
                                        {product?.after_discount_mrp_price ==
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
                                        {`৳ ${product?.commission || "0"}`}
                                    </p>
                                    <button className="copy-link-btn">
                                        Copy Link
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="col-12">
                    <p>No data available</p>
                </div>
            )}
        </div>
    );
};

export default AffiliateRetailsProductInfo;
