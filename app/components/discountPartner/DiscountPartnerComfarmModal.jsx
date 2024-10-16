import React, { useState } from 'react';

const DiscountPartnerComfarmModal = ({formData}) => {
    const [isOpen, setIsOpen] = useState(true);

    console.log(formData);
    
    const closeModal = () => {
        setIsOpen(false);
    };

    const confirmSubmitForm = () => {
        // Add your form submission logic here
        closeModal();
    };

    return isOpen ? (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Nagadhat MoU Registration</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="d-flex justify-content-between">
                            <div>
                                <img className="img-fluid" src="https://staging.nagadhat.com.bd/public/images/nagadhat-squire-logo.jpeg" width="100" height="100" alt="Nagadhat Logo" />
                            </div>
                            <div>
                                <img className="img-fluid" src="https://staging.nagadhat.com.bd/public/images/handshake.gif" width="100" height="100" alt="Handshake" />
                            </div>
                            <div>
                                <img className="img-fluid" src="https://staging.nagadhat.com.bd/public/images/transparant-blank.png" id="preview" width="100" height="100" alt="Preview" />
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="font-weight-bold mt-2">MoU Form</h4>
                            <p>
                                Nagadhat Bangladesh Ltd
                                <br />
                                Khaja Super Market, 2nd to 7th Floor, Kallyanpur Bus Stop, Mirpur Road, Dhaka-1207.
                            </p>
                        </div>
                        <hr />
                        <div className="col-md-12 bg-success mb-3">
                            <h5 className="text-white font-weight-bolder">Basic Info</h5>
                        </div>
                        <div className="form-group row">
                            <label className="font-weight-bold col-sm-3" htmlFor="serviceCategory">
                                Service Category:
                            </label>
                            <div className="col-sm-9">
                                <span id="value_service_category">Brand Shop</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="font-weight-bold col-sm-3" htmlFor="companyName">
                                Company Name:
                            </label>
                            <div className="col-sm-9">
                                <span id="value_company_name">yy</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 font-weight-bold" htmlFor="location">
                                Location:
                            </label>
                            <div className="col-sm-9">
                                <span id="value_location">Dhaka, Bangladesh </span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 font-weight-bold" htmlFor="ownerName">
                                Owner Name:
                            </label>
                            <div className="col-sm-9">
                                <span id="value_owner_name">xyz</span>
                            </div>
                        </div>

                        <hr />
                        <div className="col-md-12 bg-success mb-3">
                            <h5 className="text-white font-weight-bolder">Contact Info</h5>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 font-weight-bold" htmlFor="contactNumber">
                                Business Contact Number:
                            </label>
                            <div className="col-sm-9">
                                <span id="value_business_contact">01310881055</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 font-weight-bold" htmlFor="contactEmail">
                                Business Email:
                            </label>
                            <div className="col-sm-9">
                                <span id="value_business_email">mmnayeem408@gmail.com</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 font-weight-bold" htmlFor="responsiblePersonName">
                                Responsible Person Name:
                            </label>
                            <div className="col-md-10">
                                <span id="value_responsible_person_name"></span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 font-weight-bold" htmlFor="responsiblePersonContact">
                                Responsible Person Contact:
                            </label>
                            <div className="col-md-10">
                                <span id="value_responsible_person_contact"></span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 font-weight-bold" htmlFor="responsiblePersonEmail">
                                Responsible Person Email:
                            </label>
                            <div className="col-md-10">
                                <span id="value_responsible_person_email"></span>
                            </div>
                        </div>

                        <hr />
                        <div className="col-md-12 bg-success mb-3">
                            <h5 className="text-white font-weight-bolder">Business Info</h5>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-2 font-weight-bold" htmlFor="tradeLicenseNumber">
                                Trade License Number:
                            </label>
                            <div className="col-md-10">
                                <span id="value_trade_license_number"></span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-2 font-weight-bold" htmlFor="tinOrVat">
                                TIN / VAT:
                            </label>
                            <div className="col-md-10">
                                <span id="value_tin_vat_number"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold" htmlFor="companyBrief">
                                Company Brief:
                            </label>
                            <span id="value_company_brief"></span>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default DiscountPartnerComfarmModal;
