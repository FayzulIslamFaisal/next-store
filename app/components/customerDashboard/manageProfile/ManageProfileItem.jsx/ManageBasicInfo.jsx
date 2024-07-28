"use client";
import { useEffect, useState } from "react";
import { apiBaseUrl } from "next-auth/client/_utils";
import { useSession } from "next-auth/react";

const ManageBasicInfo = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        date_of_birth: "",
        gender: "",
        marital_status: "",
    });
    const { data: session, status } = useSession();

    useEffect(() => {
        // Fetch the initial data from the API if authenticated
        const fetchManageBasicInfoData = async () => {
            if (status === "authenticated") {
                try {
                    const response = await fetch(
                        `${apiBaseUrl}/get-basic-info`
                    );
                    const data = await response.json();
                    setFormData(data);
                } catch (error) {
                    console.error("Error fetching initial data:", error);
                }
            }
        };

        fetchManageBasicInfoData();
    }, [status]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check for required fields
        if (!formData.name || !formData.mobile || !formData.email) {
            alert("Please fill out all required fields.");
            return;
        }

        const response = await fetch(`${apiBaseUrl}/manage-basic-info`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log("Post request response:", data);
    };

    return (
        <div className="accordion-item mb-4 border-0 rounded-bottom">
            <h2 className="accordion-header">
                <button
                    className="accordion-button shadow-none rounded-bottom bg-white customer-dashboard-subtitle"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="true"
                    aria-controls="flush-collapseOne"
                >
                    Basic Info
                </button>
            </h2>
            <div
                id="flush-collapseOne"
                className="accordion-collapse collapse border-top show"
                data-bs-parent="#accordionFlushExample"
            >
                <div className="accordion-body">
                    <div className="customer-manage-profile-from-area">
                        <from className="row " onSubmit={handleSubmit}>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="name" className="form-label">
                                    Full Name
                                    <span className="text-danger fw-bold">
                                        *
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="mobile" className="form-label">
                                    Mobile Number
                                    <span className="text-danger fw-bold">
                                        *
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="mobile"
                                    className="form-control"
                                    id="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="email" className="form-label">
                                    Email (Optonal)
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label
                                    htmlFor="date_of_birth"
                                    className="form-label"
                                >
                                    Date of Birth
                                    <span className="text-danger fw-bold">
                                        *
                                    </span>
                                </label>
                                <input
                                    type="date"
                                    name="date_of_birth"
                                    className="form-control"
                                    id="date_of_birth"
                                    value={formData.date_of_birth}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="gender" className="form-label">
                                    Gender
                                    <span className="text-danger fw-bold">
                                        *
                                    </span>
                                </label>
                                <select
                                    className="form-select district-list"
                                    name="gender"
                                    id="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option defaultValue="Select">
                                        Select
                                    </option>
                                    <option Value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="col-md-6 pb-3">
                                <label
                                    htmlFor="marital_status"
                                    className="form-label"
                                >
                                    Marital status
                                    <span className="text-danger fw-bold">
                                        *
                                    </span>
                                </label>
                                <select
                                    className="form-select district-list"
                                    name="marital_status"
                                    id="marital_status"
                                    value={formData.marital_status}
                                    onChange={handleChange}
                                >
                                    <option defaultValue="Select">
                                        Select
                                    </option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                </select>
                            </div>
                            <div className="">
                                <input
                                    className="add-to-cart-link border-0 mx-auto"
                                    type="submit"
                                    value="Update Profile"
                                />
                            </div>
                        </from>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBasicInfo;
