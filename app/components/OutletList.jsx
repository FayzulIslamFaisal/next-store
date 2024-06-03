import { useEffect, useState } from "react";
import { getOutletByDistrictId } from "../services/getOutlet";

const OutletList = ({ onOutletChange, districtId }) => {
    const [outlets, setOutlets] = useState([]);

    useEffect(() => {
        async function fetchOutletData() {
            try {
                let outletData = await getOutletByDistrictId(districtId);
                if (!Array.isArray(outletData)) {
                    outletData = [outletData];
                    setOutlets(outletData);
                } else {
                    setOutlets(outletData);
                }
            } catch (error) {
                console.error("Cannot fetch division data.");
                console.info(error);
            }
        }

        fetchOutletData();
    }, [districtId]);
    return (
        <select
            className="form-select"
            aria-label="Default select example"
            onChange={onOutletChange}
        >
            <option value="">Select Outlet</option>
            {outlets &&
                outlets.map((outlet) => (
                    <option key={outlet.id} value={outlet.id}>
                        {outlet.name}
                    </option>
                ))}
        </select>
    );
};

export default OutletList;
