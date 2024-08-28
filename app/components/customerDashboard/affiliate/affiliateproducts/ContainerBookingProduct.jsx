import { useState } from "react";
import { NagadhatPublicUrl } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";

const ContainerBookingProduct = ({ containerProduct, selectedProducts, setSelectedProducts}) => {

    // Toggle product selection
    const handleSelectProduct = (product) => {
        if (selectedProducts.some(p => p.id === product.id)) {
            setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
        } else {
            setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
        }
    };

    return (
        <>
            <div className="px-4 pt-4">
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "70%" }}
                    >
                        <span className="sr-only">70% Complete</span>
                    </div>
                </div>
            </div>
            <div className="row row-cols-auto row-cols-sm-2 row-cols-lg-3 p-4 row-cols-xxl-4 g-3">
                {containerProduct.map((product) => (
                    <div
                        key={product.id}
                        className="flash-sale-content-item col"
                        onClick={() => handleSelectProduct(product)}
                    >
                        <div className={`flash-sale-content-bg nh-hover-box-shadow ${selectedProducts.some(p => p.id === product.id) ? 'selected shadow  border-2' : ''}`}>
                            <div className="flash-sale-content-img image-hover-effect">
                                <Image
                                    width={200}
                                    height={270}
                                    src={`${NagadhatPublicUrl}/${product.product_thumbnail}`}
                                    className="img-fluid"
                                    alt={product.product_name}
                                />
                            </div>
                            <div className="flash-sale-content-info text-hover-effect">
                                <h4>{product.product_name}</h4>
                                <div className="add-to-cart-btn">
                                    <Link className="add-to-cart-link" href={`/container-products-details/${product.slug}`}>
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ContainerBookingProduct;
