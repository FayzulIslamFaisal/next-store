import Image from "next/image"

const ViewAllBanner = ({ imageUrl = "" }) => {
    return (
        <div className="row view-all-product-banner-area">
            <div className="col-md-12">
                <div className="view-all-product-banner">
                    <Image src={imageUrl} className=" img-fluid" fill={true} alt="banner image" />
                </div>
            </div>
        </div>
    )
}

export default ViewAllBanner