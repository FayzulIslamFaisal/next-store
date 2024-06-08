import { useEffect, useState } from "react";
import { getDistrictByDivisionId } from "../services/getDistrict";

const DistrictList = ({ onDistrictChange, divisionId }) => {
    const [distrists, setDistricts] = useState([]);

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

    return (
        <select
            className="form-select"
            aria-label="Default select example"
            onChange={onDistrictChange}
        >
            <option value="">Select District</option>
            {distrists &&
                distrists.map((distrist) => (
                    <option key={distrist.id} value={distrist.id}>
                        {distrist.name}
                    </option>
                ))}
        </select>
    );
};

export default DistrictList;
