import Image from "next/image";
import Link from "next/link";

const ShopNowButton = ({ path, btnText, btnAltText }) => {
    return (
        <div className="hero-slider-btn-area">
            <Link
                href={path}
                className="hero-slider-btn d-flex align-items-center"
            >
                <span>{btnText}</span>
                <small>
                    <Image
                        src={`/images/shop-arrow.svg`}
                        alt={btnAltText}
                        fill={true}
                    />
                </small>
            </Link>
        </div>
    );
};

export default ShopNowButton;
