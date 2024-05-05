import Image from 'next/image'
import Link from 'next/link'

const ProductDeliveryDetail = () => {
    return (
        <div className="product-details-delivery-area">
            <div className="product-details-delivery-bg ">
                <div className="product-delivery-top-title d-flex align-items-center justify-content-between">
                    <h2>shipping address</h2>
                    <div className="product-delivery-top-img">
                        <Image className="img-fluid" src="/images/delivery.svg" alt="delivery image" fill={true} />
                    </div>
                </div>
                <div className="product-delivery-address-area d-flex justify-content-between ">
                    <div className="product-delivery-address-inner d-flex">
                        <div className="product-delivery-address-icon sidebar-common-img-size">
                            <Image className="img-fluid" src="/images/location-black-img.svg" alt="location image" fill={true} />
                        </div>
                        <p>Dhaka, Dhaka North, Banani Road No. 12 - 19</p>
                    </div>
                    <div className="product-delivery-address-inner">
                        <Link href="#" className="custom-text-link">Change</Link>
                    </div>
                </div>
                <div className="product-free-delivery-area">
                    <div className="product-delivery-top-title d-flex align-items-center justify-content-between">
                        <h2>delivery charge</h2>
                        <div className="product-delivery-top-img">
                            <Image className="img-fluid" src="/images/delivery.svg" alt="delivery image" fill={true} />
                        </div>
                    </div>
                    <div className="product-free-delivery-top d-flex justify-content-between flex-column">
                        <div className="product-free-delivery-info d-flex align-items-center">
                            <div className="product-free-delivery-info-img sidebar-common-img-size">
                                <Image className="img-fluid" src="/images/free-delivery.svg" fill={true} alt="free-delivery" />
                            </div>
                            <h5>Delivery</h5>
                            {/* <p>12 Apr - 19 Apr</p> */}
                        </div>
                        <div className="product-free-delivery-info ">
                            <h6 className="custom-text-link">Free</h6>
                        </div>
                    </div>
                    <div className="product-free-delivery-end-time">
                        {/* <p>12 - 19 day(s)</p>
                        <div className="product-free-delivery-textarea">
                            <textarea className="form-control" value="Enjoy free shipping promotion with minimum spend of ৳ 499 from Buy More Save More." />
                        </div> */}

                    </div>
                </div>
                <div className="product-details-service-area">
                    <div className="product-delivery-top-title d-flex align-items-center justify-content-between">
                        <h2>Service</h2>
                        <div className="product-delivery-top-img">
                            <Image className="img-fluid" src="/images/delivery.svg" alt="delivery image" fill={true} />
                        </div>
                    </div>
                    <div className="product-free-delivery-two-col-holder">
                        <div className="product-free-delivery-two-col d-flex align-items-center">
                            <div className="product-free-delivery-two-col-img sidebar-common-img-size">
                                <Image className="img-fluid" src="/images/cash-on-delivery.svg" fill={true} alt="cash-on-delivery" />
                            </div>
                            <h5>Cash on Delivery </h5>
                        </div>
                        <div className="product-free-delivery-status">
                            <h5>Available</h5>
                        </div>
                    </div>

                    <div className="product-details-service-info">
                        <div className="product-free-delivery-two-col d-flex align-items-center">
                            <div className="product-free-delivery-two-col-img sidebar-common-img-size">
                                <Image className="img-fluid" src="/images/return.svg" alt="return image" fill={true} />
                            </div>
                            <h5>7 Days Return</h5>
                        </div>
                        <p>Change of mind is not applicable</p>
                        <div className="product-free-delivery-two-col d-flex align-items-center">
                            <div className="product-free-delivery-two-col-img sidebar-common-img-size">
                                <Image className="img-fluid" src="/images/warrant.svg" alt="warrant image" fill={true} />
                            </div>
                            <h5>Warranty not available</h5>
                        </div>
                    </div>
                    <div className="product-details-sold-area bg-white">
                        <div className="product-details-sold-top d-flex align-items-center justify-content-between">
                            <div className="product-details-sold-item"><h5>Sold By</h5> </div>
                            <div className="product-details-sold-item d-flex align-items-center">
                                <div className="product-details-sold-img sidebar-common-img-size">
                                    <Image className="img-fluid" src="/images/chat-img.svg" alt="cart image" fill={true} />
                                </div>
                                <Link href="#" className="custom-text-link">Chat</Link>
                            </div>
                        </div>
                        <p>Imran Fashion House</p>
                        <div className="product-details-sold-table">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Positive Seller Ratings</th>
                                            <th>Ship on Time</th>
                                            <th>Chat Response Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>85%</td>
                                            <td>66%</td>
                                            <td className="table-td-text">Not enough data</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="product-sold-visit text-center">
                            <Link href="#" className="custom-text-link">Visit Store</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDeliveryDetail