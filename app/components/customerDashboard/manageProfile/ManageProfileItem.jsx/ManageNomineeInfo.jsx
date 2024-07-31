"use client";

import { getManageNomineeInfo } from "@/app/services/getManageNomineeInfo";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ManageNomineeInfo = () => {
    const [nomineInfo, setNomineInfo] = useState({
        nominee_name: "",
        nominee_mobile_number: "",
        nominee_nid: "",
        nominee_relation: "",
    });
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            const fetchNomineeData = async () => {
                const nomineeData = await getManageNomineeInfo(
                    session?.accessToken
                );
                const nomineeResult = nomineeData?.results || {};
                setNomineInfo({
                    ...nomineInfo,
                    nominee_name: nomineeResult.nominee_name || "",
                    nominee_mobile_number:
                        nomineeResult.nominee_mobile_number || "",
                    nominee_nid: nomineeResult.nominee_nid || "",
                    nominee_relation: nomineeResult.nominee_relation || "",
                });
            };
            fetchNomineeData();
        }
    }, [session, status]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNomineInfo((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    return (
        <div className="accordion-item border-0 mb-4 rounded">
            <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed rounded bg-white customer-dashboard-subtitle"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                >
                    Nominee Info
                </button>
            </h2>
            <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
            >
                <div className="accordion-body border-top">
                    <div className="customer-manage-profile-from-area">
                        <form className="row ">
                            <div className="col-md-6 pb-3">
                                <label htmlFor="name" className="form-label">
                                    Full Name
                                    {/* <span className="text-danger fw-bold">
                                        *
                                    </span> */}
                                </label>
                                <input
                                    type="text"
                                    name="nominee_name"
                                    className="form-control"
                                    id="nominee_name"
                                    value={nomineInfo.nominee_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="mobile" className="form-label">
                                    Mobile Number
                                    {/* <span className="text-danger fw-bold">
                                        *
                                    </span> */}
                                </label>
                                <input
                                    type="text"
                                    name="nominee_mobile_number"
                                    className="form-control"
                                    id="nominee_mobile_number"
                                    value={nomineInfo.nominee_mobile_number}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="nid-no" className="form-label">
                                    NID No
                                </label>
                                <input
                                    type="number"
                                    name="nid-no"
                                    className="form-control"
                                    id="nid-no"
                                    value={nomineInfo.nominee_nid}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label
                                    htmlFor="relation"
                                    className="form-label"
                                >
                                    Relation
                                </label>
                                <input
                                    type="text"
                                    name="nominee_relation"
                                    className="form-control"
                                    id="nominee_relation"
                                    value={nomineInfo.nominee_relation}
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

export default ManageNomineeInfo;
