"use client";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";
import { getServiceCategoryWithDiscountPartner } from "@/app/services/discountPartner/getServiceCategoryWithDiscountPartner";

const DiscountPartnerBasicInfo = ({ handleTabClick, setFormData, formData }) => {
    const [category, setCategory] = useState([]);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onDropLogo = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setFormData((prevData) => ({
            ...prevData,
            logo: file,
        }));
    };

    const onDropGallery = (acceptedFiles) => {
        setFormData((prevData) => ({
            ...prevData,
            gallery: [...prevData.gallery, ...acceptedFiles],
        }));
    };

    // get category list
    useEffect(() => {
        const getCategoryList = async () => {
            // fetch data from API
            const response = await getServiceCategoryWithDiscountPartner();
            console.log(response);
            setCategory(response?.results)
        };
        getCategoryList()
    }, [])

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
                        <form
                            className="row"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleTabClick("contact-info")
                            }}
                        >
                            <div className="col-md-6 pb-3">
                                <label htmlFor="company_name" className="form-label">
                                    Company Name: *
                                </label>
                                <input
                                    type="text"
                                    name="company_name"
                                    className="form-control"
                                    id="company_name"
                                    value={formData.company_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="owner-name" className="form-label">
                                    Owner Name: *
                                </label>
                                <input
                                    type="text"
                                    name="owner_name"
                                    className="form-control"
                                    id="owner-name"
                                    required
                                    value={formData.owner_name}
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
                                <label htmlFor="service_category" className="form-label">
                                    Service Category: *
                                </label>
                                <select
                                    className="form-control"
                                    name="service_category"
                                    id="service_category"
                                    required
                                    value={formData.service_category}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Category</option>
                                    {category.map((cat) => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-6 pb-3">
                                <label htmlFor="logo" className="form-label">
                                    Company Logo:
                                </label>
                                <Dropzone onDrop={onDropLogo}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section className="form-control">
                                            <div className="text-center p-3 overflow-hidden" {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                {!formData?.logo ? (
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
                                                            src={URL.createObjectURL(formData?.logo)}
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
                                <Dropzone onDrop={onDropGallery}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section className="form-control">
                                            <div className="text-center p-3 overflow-y-auto" {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                {formData?.gallery.length === 0 ? (
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
                                                        {formData?.gallery.map((file, index) => (
                                                            <Image
                                                                className="my-2 mx-3 border"
                                                                key={index}
                                                                height={70}
                                                                width={100}
                                                                src={URL.createObjectURL(file)}
                                                                alt={`Gallery Image ${index + 1}`}
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            </div>
                            <div className="d-flex justify-content-end gap-4">
                                <input
                                    type="submit"
                                    className="add-to-cart-link border-0"
                                    title="Next"
                                    value="Next"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default DiscountPartnerBasicInfo;
