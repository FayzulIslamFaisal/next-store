const ContainerBookingProduct = () => {
    return (
        <>
            <div className="px-4 pt-4">
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "70%" }}
                    >
                        <span className="sr-only">70% Complete</span>
                    </div>
                </div>
            </div>
            <div className="row row-cols-auto row-cols-sm-2 row-cols-md-4 p-4 row-cols-xxl-4 g-3">
                <div className="flash-sale-content-item col">
                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                        <div className="flash-sale-content-img image-hover-effect">
                            <img
                                src="/images/flash-img1.jpg"
                                className="img-fluid"
                                alt="flash sale image"
                            />
                        </div>
                        <div className="flash-sale-content-info text-hover-effect">
                            <h4>
                                <a href="#">Maggi Masala 620gm (8Pcs)</a>
                            </h4>
                            <div className="add-to-cart-btn">
                                <a className="add-to-cart-link" href="#">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flash-sale-content-item col">
                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                        <div className="flash-sale-content-img image-hover-effect">
                            <img
                                src="/images/flash-img2.jpg"
                                className="img-fluid"
                                alt="flash sale image"
                            />
                        </div>
                        <div className="flash-sale-content-info text-hover-effect">
                            <h4>
                                <a href="#">Maggi Masala 620gm (8Pcs)</a>
                            </h4>
                            <div className="add-to-cart-btn">
                                <a className="add-to-cart-link" href="#">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flash-sale-content-item col">
                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                        <div className="flash-sale-content-img image-hover-effect">
                            <img
                                src="/images/flash-img3.jpg"
                                className="img-fluid"
                                alt="flash sale image"
                            />
                        </div>
                        <div className="flash-sale-content-info text-hover-effect">
                            <h4>
                                <a href="#">Maggi Masala 620gm (8Pcs)</a>
                            </h4>
                            <div className="add-to-cart-btn">
                                <a className="add-to-cart-link" href="#">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flash-sale-content-item col">
                    <div className="flash-sale-content-bg nh-hover-box-shadow">
                        <div className="flash-sale-content-img image-hover-effect">
                            <img
                                src="/images/flash-img4.jpg"
                                className="img-fluid"
                                alt="flash sale image"
                            />
                        </div>
                        <div className="flash-sale-content-info text-hover-effect">
                            <h4>
                                <a href="#">Maggi Masala 620gm (8Pcs)</a>
                            </h4>
                            <div className="add-to-cart-btn">
                                <a className="add-to-cart-link" href="#">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContainerBookingProduct;
