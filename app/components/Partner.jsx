import Image from "next/image";

function Partner() {
    return (
        <section className="nagadhat-partner-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="nagadhat-partner">
                            <a href="#">
                                <img
                                    className=" img-fluid"
                                    src="/images/nagadhat.jpg"
                                    alt="nagadhat image"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="nagadhat-partner">
                            <a href="#">
                                <img
                                    className=" img-fluid"
                                    src="/images/paikarihat.svg"
                                    alt="paikarihat image"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="nagadhat-partner">
                            <a href="#">
                                <img
                                    className=" img-fluid"
                                    src="/images/properties.svg"
                                    alt="properties image"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="nagadhat-partner">
                            <a href="#">
                                <img
                                    className=" img-fluid"
                                    src="/images/promise.svg"
                                    alt="promise image"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partner;
