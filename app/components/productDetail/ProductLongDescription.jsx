import Image from "next/image"

const ProductLongDescription = () => {
    return (
        <div className="row product-long-discription-area">
            <div className="col-md-12">
                <div className="product-long-discription-tab">
                    <nav>
                        <div className="nav nav-tabs d-flex align-items-center" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-specification-tab" data-bs-toggle="tab" data-bs-target="#nav-specification" type="button" role="tab">Specification</button>
                            <button className="nav-link" id="nav-details-tab" data-bs-toggle="tab" data-bs-target="#nav-details" type="button" role="tab">Details</button>
                            <button className="nav-link" id="nav-qa-tab" data-bs-toggle="tab" data-bs-target="#nav-qa" type="button" role="tab">Q & A</button>
                            <button className="nav-link" id="nav-reviews-tab" data-bs-toggle="tab" data-bs-target="#nav-reviews" type="button" role="tab">Reviews <span>(240)</span> </button>
                        </div>
                    </nav>
                    <div className="tab-content " id="nav-tabContent">
                        {/* Start tab-panel-item */}
                        <div className="tab-pane fade active show" id="nav-specification" role="tabpanel" >
                            <div className="tab-panel-info-details">
                                <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</h6>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                                <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="tab-panel-info-image-area">
                                <div className="tab-panel-info-image-col">
                                    <Image src={`/images/black-friday.jpg`} fill={true} alt="black friday" />
                                </div>
                                <div className="tab-panel-info-image-col">
                                    <Image src={`/images/fashion.jpg`} fill={true} alt="fashion" />
                                </div>
                            </div>
                            <div className="tab-panel-info-details">
                                <h6> Accusam et justo duo dolores et ea rebum. Stet clita kasd.</h6>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                                <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</h6>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</p>
                            </div>
                        </div>
                        {/* End tab-panel-item */}

                        {/* Start tab-panel-item */}
                        <div className="tab-pane fade" id="nav-details" role="tabpanel" >
                            <p><strong>This is some placeholder content the Profile tab's associated content.</strong>
                                Clicking another tab will toggle the visibility of this one for the next.
                                The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
                                tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                        </div>
                        {/* End tab-panel-item */}

                        {/* Start tab-panel-item */}
                        <div className="tab-pane fade" id="nav-qa" role="tabpanel" >
                            <p><strong>This is some placeholder content the Contact tab's associated content.</strong>
                                Clicking another tab will toggle the visibility of this one for the next.
                                The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
                                tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                        </div>
                        {/* End tab-panel-item */}

                        {/* Start tab-panel-item */}
                        <div className="tab-pane fade" id="nav-reviews" role="tabpanel" aria-labelledby="nav-reviews-tab">
                            <p><strong>This is some placeholder content the Contact tab's associated content.</strong>
                                Clicking another tab will toggle the visibility of this one for the next.
                                The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
                                tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                        </div>
                        {/* End tab-panel-item */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductLongDescription