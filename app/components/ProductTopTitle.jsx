import Link from 'next/link'

const ProductTopTitle = ({ title, path, linkText }) => {
    return (
        <div className="row nh-common-title-area">
            <div className="col-md-12">
                <div className="nh-common-title d-flex align-items-center justify-content-between">
                    <div className="nh-common-item d-flex align-items-center">
                        <h3>{title} </h3>
                        <div className="common-border"></div>
                    </div>
                    <div className="nh-common-item">
                        <Link href={path}>{linkText}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTopTitle