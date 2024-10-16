"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { IoCloudUploadOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DiscountPartnerComfarmModal from "./DiscountPartnerComfarmModal";

const DiscountPartnerBusinessInfo = ({handleTabClick}) => {
    const [trade, setTrade] = useState(null);
    const [tin, setTin] = useState(null);
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

    const handleLogoDrop = (acceptedFiles) => {
        setTrade(acceptedFiles[0]);  // Store the first selected file
    };
    const handleTINDrop = (acceptedFiles) => {
        setTin(acceptedFiles[0]);  // Store the first selected file
    };
    

    return (
        <div className="accordion-item mb-4 border-0 rounded-bottom">
            <ToastContainer />
            {/* <h2 className="accordion-header customer-dashboard-subtitle">
                Business Info
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
                                    Trade License Number: (optional)
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
                                    TIN / VAT: (optional)
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
                                    Facebook Link: (optional)
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
                                    Website Link: (optional)
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
                            <div className="col-md-12 pb-3">
                                <label htmlFor="location" className="form-label">
                                    Applicability: (optional)
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
                                <label htmlFor="trade" className="form-label">
                                Trade License Copy: (optional)
                                </label>
                                <Dropzone onDrop={handleLogoDrop}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section className="form-control">
                                            <div className="text-center p-3 overflow-hidden" {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                {!trade ? (
                                                    <div
                                                        className=" opacity-50"
                                                        style={{ width: '100%', height: '150px' }}
                                                    >
                                                        <p className="fs-1"><IoCloudUploadOutline /></p>
                                                        <h3>Drop Trade License</h3>
                                                        <p>Drag 'n' drop a Trade License, or click to select file</p>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="text-center"
                                                        style={{ width: '100%', height: '150px' }}
                                                    >
                                                        <Image
                                                            height={150}
                                                            width={200}
                                                            src={URL.createObjectURL(trade)}
                                                            alt="Company Logo"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            </div>

                            <div className="col-md-6 pb-3">
                                <label htmlFor="trade" className="form-label">
                                TIN / VAT Copy: (optional)
                                </label>
                                <Dropzone onDrop={handleTINDrop}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section className="form-control">
                                            <div className="text-center p-3 overflow-hidden" {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                {!tin ? (
                                                    <div
                                                        className=" opacity-50"
                                                        style={{ width: '100%', height: '150px' }}
                                                    >
                                                        <p className="fs-1"><IoCloudUploadOutline /></p>
                                                        <h3>Drop TIN / VAT Copy</h3>
                                                        <p>Drag 'n' drop a TIN / VAT copy, or click to select file</p>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="text-center"
                                                        style={{ width: '100%', height: '150px' }}
                                                    >
                                                        <Image
                                                        className="h-100"
                                                            height={150}
                                                            width={200}
                                                            src={URL.createObjectURL(tin)}
                                                            alt="Company Logo"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            </div>
                            <div className="d-flex justify-content-end gap-4">
                                <button
                                    className="add-to-cart-link border-0 bg-danger"
                                    onClick={() => handleTabClick("contact-info")}
                                >
                                    Back
                                </button>
                                <button
                                    className="add-to-cart-link border-0"
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // Submit form data to server here
                                    }}
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <DiscountPartnerComfarmModal/>
        </div>
    );
};

export default DiscountPartnerBusinessInfo;
