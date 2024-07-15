import React from 'react'

const ManageShippingAddress = () => {
    return (
        <div className="accordion-item border-0 rounded mb-4">
            <h2 className="accordion-header">
                <button className="accordion-button rounded collapsed bg-white customer-dashboard-subtitle" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                    aria-expanded="false" aria-controls="flush-collapseTwo">
                    Default Shipping Address
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse border-top"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <div className="p-4">
                        <div className="mx-auto" type="button" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            <div className="add-new-address-bar"
                                data-toggle="modal" data-target="#addNewAddressModal">
                                <i className="fa-solid fa-plus"></i>
                                <div className="alpha-7">Add New Address</div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Modal --> */}
                    <div className="modal fade modal-lg" id="exampleModal" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title customer-dashboard-title" id="exampleModalLabel">
                                        Shipping Address</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="shaipping-from-area px-4">
                                        <from className="row ">
                                            <div className="col-md-6 pb-3">
                                                <label for="mobile" className="form-label">Mobile Number <span className="text-danger fw-bold">*</span></label>
                                                <input type="text" name="mobile" className="form-control"
                                                    id="mobile" />
                                            </div>
                                            <div className="col-md-6 pb-3">
                                                <label for="email" className="form-label">Email(Optonal)</label>
                                                <input type="email" name="email" className="form-control"
                                                    id="email" />
                                            </div>
                                            <div className="col-md-6 pb-3">
                                                <label for="district" className="form-label">District <span
                                                    className="text-danger fw-bold">*</span></label>
                                                <select className="form-select district-list" name="district"
                                                    id="district">
                                                    <option defaultValue="District">District</option>
                                                    <option value="Barisal">Barisal</option>
                                                    <option value="Chittagong">Chittagong</option>
                                                    <option value="Dhaka">Dhaka</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 pb-3">
                                                <label for="city" className="form-label">City</label>

                                                <select className="form-select district-list" name="city" id="city">
                                                    <option defaultValue="City">City</option>
                                                    <option value="Barisal">Barisal</option>
                                                    <option value="Chittagong">Chittagong</option>
                                                    <option value="Dhaka">Dhaka</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 pb-3">
                                                <label for="address" className="form-label">Address</label>
                                                <textarea name="address" id="address"
                                                    className="form-control textarea-resize" rows="2"></textarea>
                                            </div>
                                        </from>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="add-to-cart-link bg-danger border-0"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="add-to-cart-link border-0">Save
                                        changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Modal End --> */}

                    {/* <!------------- if Address -------------> */}

                    {/* <!-- <div className="p-4 ">
                        <div className="d-flex gap-4 border p-3 rounded">
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, fugit?</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    </div>  --> */}
                </div>
            </div>
        </div>
    )
}

export default ManageShippingAddress
