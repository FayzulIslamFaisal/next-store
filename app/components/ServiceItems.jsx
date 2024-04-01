import Image from "next/image";

const ServiceItems = ({ imageurl, altText, title, subTitle }) => {
    return (
        <div className="nh-service-box-item">
            <div className="nh-service-box-bg d-flex align-items-center justify-content-center">
                <div className="nh-service-box-img d-flex align-items-center justify-content-center">
                    <Image
                        src={imageurl}
                        alt={altText}
                        width={33}
                        height={30}
                    />
                </div>
                <div className="nh-service-box-info text-white">
                    <h5 className="text-capitalize text-white">{title}</h5>
                    <p>{subTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceItems