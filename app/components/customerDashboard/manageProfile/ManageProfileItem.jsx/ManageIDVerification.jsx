"use client";

import { getManageIdVerificationInfo } from "@/app/services/getManageIdVerificationInfo";
import { postManageIdVerificationInfo } from "@/app/services/postManageIdVerificationInfo";
import { NagadhatPublicUrl } from "@/app/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageIDVerification = () => {
    const [idVerification, setIdVerification] = useState({
        nid_no: "",
        nid_front: null,
    });

    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            const fetchNidVerification = async () => {
                const nidData = await getManageIdVerificationInfo(
                    session?.accessToken
                );
                const nidDataResult = nidData?.results || {};
                setIdVerification({
                    nid_no: nidDataResult.nid_no || "",
                    nid_front: nidDataResult.nid_front || "",
                });
            };
            fetchNidVerification();
        }
    }, [session, status]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setIdVerification((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setIdVerification((prevData) => ({
                ...prevData,
                nid_front: event.target.files[0],
            }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Check for required fields
        if (!idVerification.nid_no || !idVerification.nid_front) {
            toast.error("Please fill out all required fields.");
            return;
        }

        try {
            const response = await postManageIdVerificationInfo(
                idVerification,
                session?.accessToken
            );
            if (!response?.error) {
                toast.success(response?.message);
            } else {
                console.error("Update failed:", response);
                toast.error(
                    response?.message ||
                        "Failed to update ID Verification Info."
                );
            }
        } catch (error) {
            console.error("Error during update:", error);
            toast.error(
                error.message || "An error occurred. Please try again later."
            );
        }
    };

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <div className="accordion-item border-0 rounded mb-4">
            <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed bg-white rounded customer-dashboard-subtitle"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                >
                    ID Verification
                </button>
            </h2>
            <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
            >
                <div className="accordion-body border-top">
                    <div className="customer-manage-profile-from-area">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nid_no" className="form-label">
                                    NID/ Birth Certificate/ Passport/ Driving
                                    License No
                                </label>
                                <input
                                    className="form-control"
                                    type="number"
                                    id="nid_no"
                                    name="nid_no"
                                    value={idVerification.nid_no}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {idVerification.nid_front && (
                                <div className="mb-3">
                                    <Image
                                        src={`${NagadhatPublicUrl}/${idVerification.nid_front}`}
                                        width={120}
                                        height={100}
                                        alt="NID Image"
                                    />
                                </div>
                            )}

                            <div className="mb-3">
                                <label
                                    htmlFor="nid_front"
                                    className="form-label"
                                >
                                    Upload NID/ Birth Certificate/ Passport/
                                    Driving License Photo
                                </label>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="nid_front"
                                    accept="image/*"
                                    name="nid_front"
                                    capture
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className="">
                                <input
                                    className="add-to-cart-link border-0 mx-auto"
                                    type="submit"
                                    value="Update Info"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageIDVerification;
