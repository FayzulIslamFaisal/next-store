import Image from 'next/image'
import Link from 'next/link'
import SocialLink from '../SocialLink'
import ProductSlider from './ProductSlider'

const ProductImage = () => {
    const socialLinkItem = [
        { image: "/images/facbook.svg", alt: "facbook", path: "#" },
        { image: "/images/twitter.svg", alt: "twitter", path: "#" },
        { image: "/images/linkedin.svg", alt: "linkedin", path: "#" },
        { image: "/images/youtube.svg", alt: "youtube", path: "#" },
        { image: "/images/instagram.svg", alt: "instagram", path: "#" },
    ];
    const productSliderData = [
        {
            id: 1,
            imageUrl: "/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg",
            altText: "product image 1",
        },
        {
            id: 2,
            imageUrl: "/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg",
            altText: "product image 2",
        },


    ]
    return (
        <div className="col-md-6">

            <div className="product-img-slider-area">
                {
                    productSliderData.map((sliderItem) => {
                        return (
                            <ProductSlider key={sliderItem.id} sliderItem={sliderItem} />
                        )
                    })
                }
            </div>
            <div className="product-details-social-link d-flex align-items-center justify-content-center pb-3">
                <p>Share:</p>
                <SocialLink socialLinkItem={socialLinkItem} />
            </div>
        </div>
    )
}

export default ProductImage