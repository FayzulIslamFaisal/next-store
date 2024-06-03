"use client";
import { useState } from "react";
import DivisionList from "./DivisionList";
import DistrictList from "./DistrictList";
import OutletList from "./OutletList";

const ModalBody = () => {
    const [divisionId, setDivisionId] = useState("");
    const [districtId, setDistrictId] = useState("");
    const [outletId, setOutletId] = useState("");
    const handleDivisionChange = (e) => {
        setDivisionId(e.target.value);
    };
    const handleDistrictChange = (e) => {
        setDistrictId(e.target.value);
    };
    const handleOutletChange = (e) => {
        setOutletId(e.target.value);
    };

    if (divisionId && districtId && outletId) {
        let currentUrl = window.location.origin;
        window.location.href = `${currentUrl}/?divisionId=${divisionId}&districtId=${districtId}&outletId=${outletId}`;
    }

    return (
        <div className="modal-body">
            {!divisionId && (
                <DivisionList onDivisionChange={handleDivisionChange} />
            )}
            {divisionId && !districtId && !outletId && (
                <DistrictList
                    onDistrictChange={handleDistrictChange}
                    divisionId={divisionId}
                />
            )}

            {divisionId && districtId && !outletId && (
                <OutletList
                    onOutletChange={handleOutletChange}
                    districtId={districtId}
                />
            )}

            <span>
                Current Location: Dhaka City, Dhaka, Dhaka, Dhaka, Bangladesh
            </span>
            <strong>
                <small>*</small> remember, reseting your location will also
                reset your cart....
            </strong>
        </div>
    );
};

export default ModalBody;
