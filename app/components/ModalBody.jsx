"use client";
import { useState } from "react";
import DivisionList from "./DivisionList";
import DistrictList from "./DistrictList";

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

    if (divisionId && districtId) {
        let currentUrl = window.location.origin;
        window.location.href = `${currentUrl}/?divisionId=${divisionId}&districtId=${districtId}`;
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
