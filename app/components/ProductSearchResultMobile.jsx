import Link from "next/link";
import Image from "next/image";

const ProductSearchResultMobile = ({ searchProduct }) => {
    return (
        <div className="product-search-modal-area">
            <div className="product-search-modal-content">
                {/* <div className="search-modal-title d-none">
                    <h4>category suggestions</h4>
                </div>
                <div className="search-modal-info d-none">
                    <ul>
                        <li>
                            <Link href="#">Food & Beverage</Link>
                        </li>
                        <li>
                            <Link href="#">Baby Food</Link>
                        </li>
                        <li>
                            <Link href="#">Food & Beverage</Link>
                        </li>
                        <li>
                            <Link href="#">Daily Foods</Link>
                        </li>
                    </ul>
                </div> */}
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
                                    <Link href={product?.slug}>
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

export default ProductSearchResultMobile;
