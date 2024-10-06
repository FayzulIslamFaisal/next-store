"use client";
import { getAffiliateFinanceBankInfo } from "@/app/services/affiliate-finance/getAffiliateFinanceBankInfo";
import { updateAffiliateFinanceBankInfo } from "@/app/services/affiliate-finance/updatBankPementInfo";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BankDetailsInfo = () => {
    const [bankInfo, setBankInfo] = useState({
        holdername: '',
        bank_name: '',
        district: '',
        branch_name: '',
        account_number: '',
        routing_number: ''
    });
    const [districts, setDistricts] = useState([]); // Store all districts from API
    const [update, setUpdate] = useState(true);
    const { data: session } = useSession();

    useEffect(() => {
        const fetchBankInfo = async () => {
            try {
                if (session?.accessToken) {
                    const response = await getAffiliateFinanceBankInfo(session.accessToken);
                    const bankData = response.results.data;

                    // Prefill the form with the data received from the API
                    setBankInfo({
                        holdername: bankData.account_holder_name,
                        bank_name: bankData.bank_name,
                        district: bankData.district.name,
                        branch_name: bankData.bank_branch_name,
                        account_number: bankData.account_number,
                        routing_number: bankData.routing_number
                    });

                    // Set all available districts for the dropdown
                    setDistricts(response.results.districts);
                }
            } catch (error) {
                console.error("Error fetching bank details", error);
            }
        };

        fetchBankInfo();
    }, [session?.accessToken, update]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBankInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Update bank details 
        const response = await updateAffiliateFinanceBankInfo(session.accessToken, bankInfo);
        if (response.code === 200) {
            toast.success('Bank details updated successfully');
            setUpdate(!update)
        } else {
            toast.error(response.message);
            console.error('Error updating bank details', response.message);
        }
    };

    return (
        <div className="accordion-item mb-4 border-0 rounded-bottom">
            <h2 className="accordion-header">
                <button
                    className="accordion-button shadow-none rounded-bottom bg-white customer-dashboard-subtitle"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#bank-collapseOne"
                    aria-expanded="true"
                    aria-controls="bank-collapseOne"
                >
                    Bank Details
                </button>
            </h2>
            <div
                id="bank-collapseOne"
                className="accordion-collapse collapse border-top show"
                data-bs-parent="#accordion-parent-id"
            >
                <div className="accordion-body">
                    <div className="customer-manage-profile-from-area">
                        <form className="row" onSubmit={handleSubmit}>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="holdername" className="form-label">
                                    Account Holder Name: <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="holdername"
                                    className="form-control"
                                    id="holdername"
                                    placeholder="Enter Account Holder Name.."
                                    value={bankInfo.holdername}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="col-md-6 pb-3">
                                <label htmlFor="bank_name" className="form-label">
                                    Bank Name: <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="bank_name"
                                    className="form-control"
                                    id="bank_name"
                                    placeholder="Enter Bank Name..."
                                    value={bankInfo.bank_name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="col-md-6 pb-3">
                                <label htmlFor="district" className="form-label">
                                    District: <span style={{ color: "red" }}>*</span>
                                </label>
                                <select
                                    className="form-select district-list"
                                    name="district"
                                    id="district"
                                    value={bankInfo.district}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select District</option>
                                    {districts.map((district) => (
                                        <option key={district.id} value={district.name}>
                                            {district.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-6 pb-3">
                                <label htmlFor="branch_name" className="form-label">
                                    Branch Name: <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="branch_name"
                                    className="form-control"
                                    id="branch_name"
                                    placeholder="Enter Branch Name..."
                                    value={bankInfo.branch_name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="col-md-6 pb-3">
                                <label htmlFor="account_number" className="form-label">
                                    Account Number: <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="number"
                                    name="account_number"
                                    className="form-control"
                                    id="account_number"
                                    placeholder="Enter Account Number..."
                                    value={bankInfo.account_number}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="col-md-6 pb-3">
                                <label htmlFor="routing_number" className="form-label">
                                    Routing Number: <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="number"
                                    name="routing_number"
                                    className="form-control"
                                    id="routing_number"
                                    placeholder="Enter Routing Number..."
                                    value={bankInfo.routing_number}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="pb-2">
                                <span className="text-danger">
                                    * Please note, you can update this information only once.
                                </span>
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

export default BankDetailsInfo;
