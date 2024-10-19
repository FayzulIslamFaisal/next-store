import { ToastContainer } from "react-toastify";
import DiscountPartnerComfarmModal from "./DiscountPartnerComfarmModal";
import Dropzone from "react-dropzone";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";

const DiscountPartnerBusinessInfo = ({ handleTabClick, formData, setFormData }) => {
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogoDrop = (acceptedFiles) => {
        setFormData((prevData) => ({
            ...prevData,
            trade_license_copy: acceptedFiles[0],  // Store the first selected file
        }));
    };

    const handleTINDrop = (acceptedFiles) => {
        setFormData((prevData) => ({
            ...prevData,
            tin_vat_copy: acceptedFiles[0],  // Store the first selected file
        }));
    };

    // Function to remove trade license copy
    const removeTradeLicense = (e) => {
        e.stopPropagation()
        setFormData((prevData) => ({
            ...prevData,
            trade_license_copy: null,  // Reset trade_license_copy to null
        }));
    };

    // Function to remove TIN/VAT copy
    const removeTINVAT = (e) => {
        e.stopPropagation()
        setFormData((prevData) => ({
            ...prevData,
            tin_vat_copy: null,  // Reset tin_vat_copy to null
        }));
    };

    return (
        <div className="accordion-item mb-4 border-0 rounded-bottom">
            <ToastContainer />
            <div>
                <div className="accordion-body">
                    <div className="customer-manage-profile-from-area">
                        <form className="row">
                            <div className="col-md-6 pb-3">
                                <label
                                    htmlFor="trade_license_number"
                                    className="form-label"
                                >
                                    Trade License Number: (optional)
                                </label>
                                <input
                                    type="text"
                                    name="trade_license_number"
                                    className="form-control"
                                    id="trade_license_number"
                                    value={formData.trade_license_number}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label
                                    htmlFor="tin_vat"
                                    className="form-label"
                                >
                                    TIN / VAT: (optional)
                                </label>
                                <input
                                    type="text"
                                    name="tin_vat"
                                    className="form-control"
                                    id="tin_vat"
                                    required
                                    value={formData.tin_vat}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="facebook_link" className="form-label">
                                    Facebook Link: (optional)
                                </label>
                                <input
                                    type="text"
                                    name="facebook_link"
                                    className="form-control"
                                    id="facebook_link"
                                    value={formData.facebook_link}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="website_link" className="form-label">
                                    Website Link: (optional)
                                </label>
                                <input
                                    type="text"
                                    name="website_link"
                                    className="form-control"
                                    id="website_link"
                                    value={formData.website_link}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-12 pb-3">
                                <label htmlFor="applicability" className="form-label">
                                    Applicability: (optional)
                                </label>
                                <input
                                    type="text"
                                    name="applicability"
                                    className="form-control"
                                    id="applicability"
                                    value={formData.applicability}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6 pb-3">
                                <label htmlFor="company_brief" className="form-label">
                                    Company Brief: (optional)
                                </label>
                                <textarea
                                    type="text"
                                    name="company_brief"
                                    className="form-control"
                                    id="company_brief"
                                    rows={6}
                                    value={formData.company_brief}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="offer_details" className="form-label">
                                    Offer Details: (optional)
                                </label>
                                <textarea
                                    type="text"
                                    name="offer_details"
                                    className="form-control"
                                    id="offer_details"
                                    rows={6}
                                    value={formData.offer_details}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* File upload for Trade License Copy */}
                            <div className="col-md-6 pb-3">
                                <label htmlFor="trade" className="form-label">
                                    Trade License Copy: (optional)
                                </label>
                                <Dropzone onDrop={handleLogoDrop}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section className="form-control">
                                            <div className="text-center p-3 overflow-hidden" {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <div style={{ width: '100%', height: '150px' }}>
                                                    {!formData.trade_license_copy ? (
                                                        <div className="opacity-50">
                                                            <p className="fs-1"><IoCloudUploadOutline /></p>
                                                            <h3>Drop Trade License</h3>
                                                            <p>Drag 'n' drop a Trade License, or click to select file</p>
                                                        </div>
                                                    ) : (
                                                        <div className="text-center position-relative">
                                                            <Image
                                                                height={150}
                                                                width={200}
                                                                src={URL.createObjectURL(formData.trade_license_copy)}
                                                                alt="Trade License"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger btn-sm position-absolute top-0 start-100 translate-middle"
                                                                onClick={removeTradeLicense}
                                                            >
                                                                <FaXmark/>
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            </div>

                            {/* File upload for TIN / VAT Copy */}
                            <div className="col-md-6 pb-3">
                                <label htmlFor="tin" className="form-label">
                                    TIN / VAT Copy: (optional)
                                </label>
                                <Dropzone onDrop={handleTINDrop}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section className="form-control">
                                            <div className="text-center p-3 overflow-hidden" {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <div className="" style={{ width: '100%', height: '150px' }}>
                                                    {!formData.tin_vat_copy ? (
                                                        <div className="opacity-50">
                                                            <p className="fs-1"><IoCloudUploadOutline /></p>
                                                            <h3>Drop TIN / VAT Copy</h3>
                                                            <p>Drag 'n' drop a TIN / VAT copy, or click to select file</p>
                                                        </div>
                                                    ) : (
                                                        <div className="text-center position-relative">
                                                            <Image
                                                                height={150}
                                                                width={200}
                                                                src={URL.createObjectURL(formData.tin_vat_copy)}
                                                                alt="TIN / VAT Copy"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger btn-sm position-absolute top-0 start-100 translate-middle"
                                                                onClick={removeTINVAT}
                                                            >
                                                                <FaXmark/>
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
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
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <DiscountPartnerComfarmModal formData={formData} />
        </div>
    );
};

export default DiscountPartnerBusinessInfo;
