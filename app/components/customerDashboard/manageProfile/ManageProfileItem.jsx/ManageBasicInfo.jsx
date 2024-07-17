import React from 'react'

const ManageBasicInfo = () => {
    return (
        <div className="accordion-item mb-4 border-0 rounded-bottom">
            <h2 className="accordion-header">
                <button className="accordion-button shadow-none rounded-bottom bg-white customer-dashboard-subtitle" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                    aria-expanded="true" aria-controls="flush-collapseOne">
                    Basic Info
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse border-top show"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <div className="customer-manage-profile-from-area">
                        <from className="row ">
                            <div className="col-md-6 pb-3">
                                <label htmlFor="name" className="form-label">
                                    Full Name
                                    <span className="text-danger fw-bold">*</span>
                                </label>
                                <input type="text" name="name" className="form-control" id="name" />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="mobile" className="form-label">
                                    Mobile Number
                                    <span className="text-danger fw-bold">*</span>
                                </label>
                                <input type="text" name="mobile" className="form-control" id="mobile" />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="email" className="form-label">Email (Optonal)</label>
                                <input type="email" name="email" className="form-control" id="email" />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="birth" className="form-label">
                                    Date of Birth
                                    <span className="text-danger fw-bold">*</span>
                                </label>
                                <input type="date" name="birth" className="form-control" id="birth" />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="district" className="form-label">
                                    Gender
                                    <span className="text-danger fw-bold">*</span>
                                </label>
                                <select className="form-select district-list" name="district"
                                    id="district">
                                    <option defaultValue="Select">Select</option>
                                    <option Value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="marital-status" className="form-label">
                                    Marital status
                                    <span className="text-danger fw-bold">*</span>
                                </label>
                                <select className="form-select district-list" name="city" id="city">
                                    <option defaultValue="Select">Select</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                </select>
                            </div>
                            <div className="">
                                <input className="add-to-cart-link border-0 mx-auto" type="submit" value="Update Profile"/>
                            </div>
                        </from>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageBasicInfo
