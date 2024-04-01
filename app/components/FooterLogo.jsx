import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterLogo = ({
    logo = "/images/footer-logo.svg",
    alt = "footer logo",
    address = "Nagadhat is an e-commerce platform coupled with chain marketing in Bangladesh."
}) => {
    return (
        <div className="footer-widget-holder">
            <div className="footer-widget-logo">
                <Link href="/">
                    <Image
                        src={logo}
                        alt={alt}
                        width={140}
                        height={33}
                    />
                </Link>
            </div>
            <p className='text-white'>{address}</p>
        </div>
    )
}

export default FooterLogo