import Image from "next/image"
import Link from "next/link"
import AddToCartButton from "../AddToCartButton";
import Like from "../Like";

const ViewAllProductItems = ({ items }) => {
    const {product_name:title, mrp_price:price, path } = items;
    let imageUrl = `https://v3.nagadhat.com/${items.product_thumbnail}`;
    return (
        <div className="flash-sale-content-item">
            <div className="flash-sale-content-bg nh-hover-box-shadow d-flex flex-column justify-content-between">
                <div className="flash-sale-content-img image-hover-effect">
                    <Image
                        src={imageUrl}
                        fill={true}
                        className="img-fluid"
                        alt={title}
                    />
                </div>
                <div className="flash-sale-content-info text-hover-effect">
                    <h4>
                        <Link href={path ?? "#"}>{title ? title : "Product Title"}</Link>
                    </h4>
                    <strong>৳ {price}</strong>
                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                        <AddToCartButton />
                        <div className="add-to-cart-icon">
                            <Like />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllProductItems