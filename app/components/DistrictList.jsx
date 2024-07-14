"use client";
import { useEffect, useState } from "react";
import { getDistrictByDivisionId } from "../services/getDistrict";

const DistrictList = ({ onDistrictChange, divisionId }) => {
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        async function fetchDistrictData() {
            try {
                const districtData = await getDistrictByDivisionId(divisionId);
                setDistricts(districtData);
            } catch (error) {
                console.error("Cannot fetch division data.");
                console.info(error);
            }
        }

        fetchDistrictData();
    }, [divisionId]);

    const handleDistrictChange = (event) => {
        const selectedDistrictId = event.target.value;
        const selectedDistrict = districts.find(district => district.id == selectedDistrictId);
        const outletId = selectedDistrict.outlet_id
        if (selectedDistrict) {
            localStorage.setItem('outletId', outletId?outletId:3);
        }
        
        onDistrictChange(event);
    };

    return (
        <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleDistrictChange}
        >
            <option value="">Select District</option>
            {districts &&
                districts.map((district) => (
                    <option key={district.id} value={district.id}>
                        {district.name}
                    </option>
                ))}
        </select>
    );
};

export default DistrictList;
