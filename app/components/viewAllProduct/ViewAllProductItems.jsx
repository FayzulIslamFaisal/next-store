import Image from "next/image"
import Link from "next/link"

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
                        <div class="add-to-cart-btn">
                            <a class="add-to-cart-link" href="#">ADD TO CART</a>
                        </div>
                        <div class="add-to-cart-icon">
                            <a href="#">
                                <Image alt="add to cart icon" width="28" height="28" src="/images/add-to-cart.svg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllProductItems