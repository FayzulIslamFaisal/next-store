import React from "react";

const Collapse = () => {
  return (
    <div>
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="accordion" id="accordionExample">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          >
                            What is Lorem Ipsum?
                          </button>
                        </h5>
                      </div>

                      <div id="collapseExample" className="collapse">
                        <div className="card-body">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collapse;
