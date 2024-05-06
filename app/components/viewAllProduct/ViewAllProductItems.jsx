import Image from "next/image"
import Link from "next/link"
import AddToCartButton from "../AddToCartButton";
import Like from "../Like";

const ViewAllProductItems = ({ items }) => {
    const { imageUrl, altText, title, path, price } = items;
    return (
        <div className="flash-sale-content-item">
            <div className="flash-sale-content-bg nh-hover-box-shadow">
                <div className="flash-sale-content-img image-hover-effect">
                    <Image
                        src={imageUrl}
                        fill={true}
                        className="img-fluid"
                        alt={altText}
                    />
                </div>
                <div className="flash-sale-content-info text-hover-effect">
                    <h4>
                        <Link href={path}>{title}</Link>
                    </h4>
                    <strong>৳ {price}</strong>
                    <div className="add-to-cart-holder d-flex align-items-center justify-content-between ">
                        <AddToCartButton />
                        <div class="add-to-cart-icon">
                            <Like />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllProductItems