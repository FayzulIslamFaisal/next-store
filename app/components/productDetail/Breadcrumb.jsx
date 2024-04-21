import Link from "next/link"

const Breadcrumb = () => {
    return (
        <div className="row product-details-breadcrumb-area">
            <div className="col-md-12">
                <nav aria-label="breadcrumb" className="breadcrumb-content">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item" ><Link href="#">Bulb</Link></li>
                        <li className="breadcrumb-item active">LED Light String</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Breadcrumb