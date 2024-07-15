import React from 'react'

const ManageNomineeInfo = () => {
    return (
        <div className="accordion-item border-0 mb-4 rounded">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed rounded bg-white customer-dashboard-subtitle" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                    aria-expanded="false" aria-controls="flush-collapseFive">
                    Nominee Info
                </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body border-top">
                    <div className="customer-manage-profile-from-area">
                        <from className="row ">
                            <div className="col-md-6 pb-3">
                                <label htmlFor="name" className="form-label">
                                    Full Name
                                    <span className="text-danger fw-bold">*</span>
                                </label>
                                <input type="text" name="name" className="form-control" id="name" required />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="mobile" className="form-label">
                                    Mobile Number
                                    <span className="text-danger fw-bold">*</span>
                                </label>
                                <input type="text" name="mobile" className="form-control" id="mobile" required />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="nid-no" className="form-label">NID No</label>
                                <input type="number" name="nid-no" className="form-control"
                                    id="nid-no" />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="relation" className="form-label">Relation</label>
                                <input type="text" name="relation" className="form-control"
                                    id="relation" />
                            </div>
                            <div className="">
                                <input className="add-to-cart-link border-0 mx-auto" type="submit"
                                    value="Update Info" />
                            </div>
                        </from>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageNomineeInfo
