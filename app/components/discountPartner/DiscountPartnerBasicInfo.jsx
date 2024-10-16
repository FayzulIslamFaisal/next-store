"use client";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";

const DiscountPartnerBasicInfo = ({ handleTabClick }) => {
    const [formData, setFormData] = useState({
        companyName: "",
        ownerName: "",
        location: "",
        serviceCategory: "",
    });

    const [logo, setLogo] = useState(null);  // For storing company logo
    const [gallery, setGallery] = useState([]);  // For storing photo gallery files

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogoDrop = (acceptedFiles) => {
        setLogo(acceptedFiles[0]);  // Store the first selected file
    };

    const handleGalleryDrop = (acceptedFiles) => {
        setGallery(acceptedFiles);  // Store the selected files for the gallery
    };

    return (
        <div className="accordion-item border-0 rounded-bottom">
            <ToastContainer />
            <div
                id="flush-collapseOne"
                className="accordion-collapse collapse border-top show"
                data-bs-parent="#accordionFlushExample"
            >
                <div className="accordion-body">
                    <div className="customer-manage-profile-from-area">
                        <form className="row">
                            <div className="col-md-6 pb-3">
                                <label htmlFor="company-name" className="form-label">
                                    Company Name: *
                                </label>
                                <input
                                    type="text"
                                    name="companyName"
                                    className="form-control"
                                    id="company-name"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="owner-name" className="form-label">
                                    Owner Name: *
                                </label>
                                <input
                                    type="text"
                                    name="ownerName"
                                    className="form-control"
                                    id="owner-name"
                                    required
                                    value={formData.ownerName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="location" className="form-label">
                                    Location: *
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    className="form-control"
                                    id="location"
                                    required
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6 pb-3">
                                <label htmlFor="serviceCategory" className="form-label">
                                    Service Category:
                                </label>
                                <select
                                    className="form-control"
                                    name="serviceCategory"
                                    id="service_category"
                                    required
                                    value={formData.serviceCategory}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Category</option>
                                    <option value="1">Brand Shop</option>
                                    <option value="2">Restaurant</option>
                                    <option value="3">Hotel</option>
                                    <option value="4">Tour & Tourism</option>
                                    <option value="5">Hospital</option>
                                    <option value="6">Diagnostic Center</option>
                                    <option value="7">Educational Institute</option>
                                    <option value="8">Others</option>
                                </select>
                            </div>

                            <div className="col-md-6 pb-3">
                                <label htmlFor="logo" className="form-label">
                                    Company Logo:
                                </label>
                                <Dropzone onDrop={handleLogoDrop}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section className="form-control">
                                            <div className="text-center p-3 overflow-hidden" {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                {!logo ? (
                                                    <div
                                                        className=" opacity-50"
                                                        style={{ width: '100%', height: '150px' }}
                                                    >
                                                        <p className="fs-1"><IoCloudUploadOutline /></p>
                                                        <h3>Drop Logo</h3>
                                                        <p>Drag 'n' drop a logo, or click to select file</p>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="text-center"
                                                        style={{ width: '100%', height: '150px' }}
                                                    >
                                                        <Image
                                                            height={150}
                                                            width={200}
                                                            src={URL.createObjectURL(logo)}
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
                                <label htmlFor="gallery" className="form-label">
                                    Photo Gallery:
                                </label>
                                <Dropzone onDrop={handleGalleryDrop}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section className="form-control">
                                            <div className="text-center p-3 overflow-y-auto" {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                {gallery.length == 0 ? (
                                                    <div
                                                        className=" opacity-50"
                                                        style={{ width: '100%', height: '150px' }}
                                                    >
                                                        <p className="fs-1"><IoCloudUploadOutline /></p>
                                                        <h3>Drop Gallery</h3>
                                                        <p>Drag 'n' drop gallery photos, or click to select files</p>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="text-center"
                                                        style={{ width: '100%', height: '150px' }}
                                                    >
                                                        {gallery.map((file, index) => (
                                                            <Image
                                                            className="my-2 mx-3 border"
                                                                key={index}
                                                                height={70}
                                                                width={100}
                                                                src={URL.createObjectURL(file)}
                                                                alt="Company Logo"
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            </div>
                        </form>
                        <div className="d-flex justify-content-end gap-4">
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

export default DiscountPartnerBasicInfo;
