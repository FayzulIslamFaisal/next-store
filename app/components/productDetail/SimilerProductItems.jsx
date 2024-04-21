import Image from 'next/image'
const SimilerProductItems = ({ productItem }) => {
    const { imageUrl, title, price } = productItem;

    return (
        <>
            <div className="similer-product-box-item d-flex ">
                <div className="similer-product-img">
                    <Image src={imageUrl} fill={true} className="img-fluid" alt="similer product" />
                </div>
                <div className="similer-product-info">
                    <h4>{title}</h4>
                    <strong> <span>৳</span> {price} </strong>
                </div>
            </div>
        </>
    )
}

export default SimilerProductItems