import React from 'react'

const ManageIDVerification = () => {
    return (
        <div className="accordion-item border-0 rounded mb-4">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-white rounded customer-dashboard-subtitle" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                    aria-expanded="false" aria-controls="flush-collapseThree">
                    ID Verification
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body border-top">
                    <div className="customer-manage-profile-from-area">
                        <form action="">
                            <div className="mb-3">
                                <label for="nid-no" className="form-label">
                                    NID/ Birth Certificate/ Passport/ Driving License No
                                    <span className="text-danger fw-bold">*</span>
                                </label>
                                <input className="form-control" type="text" id="nid-no" name="nid-no" />
                            </div>
                            <div className="mb-3">
                                <label for="nid" className="form-label">
                                    Uplod NID/ Birth Certificate/ Passport/ Driving License Photo
                                    <span className="text-danger fw-bold">*</span>
                                </label>
                                <input className="form-control" type="file" id="nid" accept="image/*" name="nid" capture />
                            </div>
                            <div className="">
                                <input className="add-to-cart-link border-0 mx-auto" type="submit"
                                    value="Update Info" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageIDVerification
