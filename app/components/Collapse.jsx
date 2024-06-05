import React from "react";

const Collapse = () => {
  return (
    <div>
      <section class="faq">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12">
              <div class="accordion" id="accordionExample">
                <div class="row">
                  <div class="col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link collapsed"
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

                      <div id="collapseExample" class="collapse">
                        <div class="card-body">
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
