import Image from "next/image"
import Link from "next/link"
import AddToCartButton from "../AddToCartButton";
import Like from "../Like";
import { NagadhatPublicUrl, truncateTitle } from "@/app/utils";

const ViewAllProductItems = ({ items }) => {
    
    const {product_name:title, mrp_price:price, slug:path, id, outlet_id } = items;
    let imageUrl = `${NagadhatPublicUrl}/${items.product_thumbnail}`;
    return (
        <div className="flash-sale-content-item">
            <div className="flash-sale-content-bg nh-hover-box-shadow ">
            <Link href={`/products/get-product-details?outlet_id=${outlet_id}&product_id=${id}`} className="d-flex flex-column justify-content-between h-100">
                <div className="flash-sale-content-img image-hover-effect">
                    <Image
                        src={imageUrl ? imageUrl : null}
                        fill={true}
                        className="img-fluid"
                        alt={title ? title : "Product Title"}
                    />
                </div>
                <div className="flash-sale-content-info text-hover-effect">
                    <h4>
                        {truncateTitle(title, 40)}
                    </h4>
                    <strong>৳ {price ? price : 0}</strong>
                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                        <AddToCartButton />
                        <div className="add-to-cart-icon">
                            <Like />
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default ViewAllProductItems