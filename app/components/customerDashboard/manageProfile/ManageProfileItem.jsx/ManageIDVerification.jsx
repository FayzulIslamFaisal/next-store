"use client";

import { getManageIdVerificationInfo } from "@/app/services/getManageIdVerificationInfo";
import { NagadhatPublicUrl } from "@/app/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const ManageIDVerification = () => {
    const [idVerification, setIdVerification] = useState({
        nid_no: "",
        nid_front: "",
    });
    // const nidImage = `${NagadhatPublicUrl}/nidDataResult.nid_front`;
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            const fetchNidVerification = async () => {
                const nidData = await getManageIdVerificationInfo(
                    session?.accessToken
                );
                const nidDataResult = nidData?.results || {};

                setIdVerification({
                    ...idVerification,
                    nid_no: nidDataResult.nid_no || "",
                    nid_front: nidDataResult.nid_front || "",
                });
            };
            fetchNidVerification();
        }
    }, [session, status]);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setIdVerification((prevData) => ({
            ...prevData,
            [name]: value,
        }));
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
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="nid-no" className="form-label">
                                    NID/ Birth Certificate/ Passport/ Driving
                                    License No
                                    {/* <span className="text-danger fw-bold">
                                        *
                                    </span> */}
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="nid-no"
                                    name="nid-no"
                                    value={idVerification.nid_no}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <p>Image Area</p>
                                {/* <Image
                                    src={nidImage}
                                    width={120}
                                    height={100}
                                    alt="nid image"
                                /> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nid" className="form-label">
                                    Uplod NID/ Birth Certificate/ Passport/
                                    Driving License Photo
                                    {/* <span className="text-danger fw-bold">
                                        *
                                    </span> */}
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="nid_front"
                                    // accept="image/*"
                                    name="nid_front"
                                    capture
                                    value={idVerification.nid_front}
                                    onChange={handleChange}
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
