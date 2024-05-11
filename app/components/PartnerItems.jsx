import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const PartnerItems = ({ optionData }) => {
    const { path, imageUrl, altText } = optionData;
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="nagadhat-partner">
                <Link href={path} target='_blank'>
                    <Image
                        className="img-fluid"
                        src={imageUrl}
                        alt={altText}
                        fill={true}
                    />
                </Link>
            </div>
        </div>
    )
}

export default PartnerItems