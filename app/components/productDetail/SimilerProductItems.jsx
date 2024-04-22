import Image from 'next/image'
import Link from 'next/link';
const SimilerProductItems = ({ productItem }) => {
    const { imageUrl, title, price, path, altText } = productItem;

    return (
        <>
            <div className="similer-product-box-item d-flex ">
                <div className="similer-product-img">
                    <Image src={imageUrl} fill={true} className="img-fluid" alt={altText} />
                </div>
                <div className="similer-product-info">
                    <h4><Link href={path}>{title}</Link> </h4>
                    <strong> <span>৳</span> {price} </strong>
                </div>
            </div>
        </>
    )
}

export default SimilerProductItems