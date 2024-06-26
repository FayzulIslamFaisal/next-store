import Image from "next/image";
import CustomButton from "../CustomButton";

const ProductLongDescription = ({ productInfo }) => {
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
            {/* Start tab-panel-item */}
            <div
              className="tab-pane fade active show"
              id="nav-specification"
              role="tabpanel"
            >
              <div
                className="tab-pane fade active show"
                id="nav-specification"
                role="tabpanel"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: productInfo?.specifications,
                  }}
                />
              </div>
            </div>
            {/* End tab-panel-item */}

            {/* Start tab-panel-item */}
            <div className="tab-pane fade" id="nav-details" role="tabpanel">
              <div
                dangerouslySetInnerHTML={{
                  __html: productInfo?.full_description,
                }}
              />
            </div>
            {/* End tab-panel-item */}

            {/* Start tab-panel-item */}
            <div className="tab-pane fade" id="nav-qa" role="tabpanel">
              <p>
                <strong>
                  This is some placeholder content the Contact tab's associated
                  content.
                </strong>
                Clicking another tab will toggle the visibility of this one for
                the next. The tab JavaScript swaps classes to control the
                content visibility and styling. You can use it with tabs, pills,
                and any other <code>.nav</code>-powered navigation.
              </p>
            </div>
            {/* End tab-panel-item */}

            {/* Start tab-panel-item */}
            <div
              className="tab-pane fade"
              id="nav-reviews"
              role="tabpanel"
              aria-labelledby="nav-reviews-tab"
            >
              <p>
                <strong>
                  This is some placeholder content the Contact tab's associated
                  content.
                </strong>
                Clicking another tab will toggle the visibility of this one for
                the next. The tab JavaScript swaps classes to control the
                content visibility and styling. You can use it with tabs, pills,
                and any other <code>.nav</code>-powered navigation.
              </p>
            </div>
            {/* End tab-panel-item */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLongDescription;
