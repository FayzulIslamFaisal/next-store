"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DiscountPartnerContactInfo = ({handleTabClick}) => {
    const [formData, setFormData] = useState({
        companyName: "",
        ownerName: "",
        location: "",
        serviceCategory: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    return (
        <div className="accordion-item mb-4 border-0 rounded-bottom">
            <ToastContainer />
            {/* <h2 className="accordion-header customer-dashboard-subtitle">
                    Contact Info
            </h2> */}
            <div>
                <div className="accordion-body">
                    <div className="customer-manage-profile-from-area">
                        <form className="row">
                            <div className="col-md-6 pb-3">
                                <label
                                    htmlFor="company-name"
                                    className="form-label"
                                >
                                    Business Contact Number: *
                                </label>
                                <input
                                    type="text"
                                    name="company-name"
                                    className="form-control"
                                    id="company-name"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label
                                    htmlFor="owner-name"
                                    className="form-label"
                                >
                                    Business Email: (optional)
                                </label>
                                <input
                                    type="text"
                                    name="owner-name"
                                    className="form-control"
                                    id="owner-name"
                                    required
                                    value={formData.ownerName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="location" className="form-label">
                                Responsible Person Name: (optional)
                                </label>
                                <input
                                    type="text"
                                    name="locatin"
                                    className="form-control"
                                    id="location"
                                    required
                                    value={formData.location}
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="location" className="form-label">
                                Responsible Person Contact: (optional)
                                </label>
                                <input
                                    type="text"
                                    name="locatin"
                                    className="form-control"
                                    id="location"
                                    required
                                    value={formData.location}
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="location" className="form-label">
                                Responsible Person Email: (optional)
                                </label>
                                <input
                                    type="text"
                                    name="locatin"
                                    className="form-control"
                                    id="location"
                                    required
                                    value={formData.location}
                                    onChange={handleChange} 
                                />
                            </div>
                            
                        </form>
                        <div className="d-flex justify-content-end gap-4">
                                <button
                                    className="add-to-cart-link border-0 bg-danger"
                                    onClick={() => handleTabClick("basic-info")}
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    className="add-to-cart-link border-0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // Submit form data to server here
                                    }}
                                >
                                    Next
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountPartnerContactInfo;
