import Image from "next/image";
import CustomButton from "../CustomButton";
import ProductQuestions from "./ProductDiscussion";
import ProductReview from "./ProductReview";
import ResaleCondition from "./ResaleCondition";

const ContainerProductLongDescription = ({ productInfo }) => {
    return (
        <div className="row product-long-discription-area">
            <div className="col-md-12">
                <div className="product-long-discription-tab">
                    <nav>
                        <div
                            className="nav nav-tabs d-flex align-items-center"
                            id="nav-tab"
                            role="tablist"
                        >
                            <CustomButton
                                className="nav-link active"
                                id="nav-resale-condition-tab"
                                dataBsToggle="tab"
                                dataBsTarget="#nav-resale-condition"
                                type="button"
                                role="tab"
                            >
                                Container Condition
                            </CustomButton>
                            <CustomButton
                                className="nav-link"
                                id="nav-specification-tab"
                                dataBsToggle="tab"
                                dataBsTarget="#nav-specification"
                                type="button"
                                role="tab"
                            >
                                Specification
                            </CustomButton>
                            <CustomButton
                                className="nav-link"
                                id="nav-details-tab"
                                dataBsToggle="tab"
                                dataBsTarget="#nav-details"
                                type="button"
                                role="tab"
                            >
                                Details
                            </CustomButton>
                            <CustomButton
                                className="nav-link"
                                id="nav-qa-tab"
                                dataBsToggle="tab"
                                dataBsTarget="#nav-qa"
                                type="button"
                                role="tab"
                            >
                                Q & A
                            </CustomButton>
                            <CustomButton
                                className="nav-link"
                                id="nav-reviews-tab"
                                dataBsToggle="tab"
                                dataBsTarget="#nav-reviews"
                                type="button"
                                role="tab"
                            >
                                Reviews <span>(240)</span>{" "}
                            </CustomButton>
                        </div>
                    </nav>
                    <div className="tab-content " id="nav-tabContent">
                        <div
                            className="tab-pane fade active show"
                            id="nav-resale-condition"
                            role="tabpanel"
                            aria-labelledby="nav-resale-condition-tab"
                        >
                            <div>
                                <h2>Coming Soon</h2>
                            </div>
                        </div>

                        <div
                            className="tab-pane fade"
                            id="nav-specification"
                            role="tabpanel"
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: productInfo?.specification,
                                }}
                            />
                        </div>

                        <div
                            className="tab-pane fade"
                            id="nav-details"
                            role="tabpanel"
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: productInfo?.full_description,
                                }}
                            />
                        </div>

                        <div
                            className="tab-pane fade"
                            id="nav-qa"
                            role="tabpanel"
                        >
                            <ProductQuestions
                                productInfo={productInfo}
                            ></ProductQuestions>
                        </div>

                        <div
                            className="tab-pane fade"
                            id="nav-reviews"
                            role="tabpanel"
                            aria-labelledby="nav-reviews-tab"
                        >
                            <ProductReview></ProductReview>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContainerProductLongDescription;
