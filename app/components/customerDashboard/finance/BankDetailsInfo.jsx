const BankDetailsInfo = () => {
    return (
        <>
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
                            <form className="row">
                                <div className="col-md-6 pb-3">
                                    <label
                                        htmlFor="holdername"
                                        className="form-label"
                                    >
                                        Account Holder Name:
                                        <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="holdername"
                                        className="form-control"
                                        id="holdername"
                                        placeholder="Enter Account Holder Name.."
                                    />
                                </div>
                                <div className="col-md-6 pb-3">
                                    <label
                                        htmlFor="bank_name"
                                        className="form-label"
                                    >
                                        Bank Name:
                                        <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="bank_name"
                                        className="form-control"
                                        id="bank_name"
                                        placeholder="Enter Bank Name..."
                                    />
                                </div>

                                <div className="col-md-6 pb-3">
                                    <label
                                        htmlFor="district"
                                        className="form-label"
                                    >
                                        District:
                                        <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <select
                                        className="form-select district-list"
                                        name="district"
                                        id="district"
                                    >
                                        <option value="">
                                            Select District
                                        </option>
                                        <option value="Cumilla">Cumilla</option>
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Chittagong">
                                            Chittagong
                                        </option>
                                    </select>
                                </div>
                                <div className="col-md-6 pb-3">
                                    <label
                                        htmlFor="branch_name"
                                        className="form-label"
                                    >
                                        Branch Name:
                                        <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="branch_name"
                                        className="form-control"
                                        id="branch_name"
                                        placeholder="Enter Branch Name..."
                                    />
                                </div>

                                <div className="col-md-6 pb-3">
                                    <label
                                        htmlFor="account_number"
                                        className="form-label"
                                    >
                                        Account Number:
                                        <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="account_number"
                                        className="form-control"
                                        id="account_number"
                                        placeholder="Enter Account Number..."
                                    />
                                </div>
                                <div className="col-md-6 pb-3">
                                    <label
                                        htmlFor="routing_number"
                                        className="form-label"
                                    >
                                        Routing Number:
                                        <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="routing_number"
                                        className="form-control"
                                        id="routing_number"
                                        placeholder="Enter Routing Number..."
                                    />
                                </div>
                                <div className="pb-2">
                                    <span className="text-danger">
                                        * Please note, you can update this
                                        information only once.
                                    </span>
                                </div>

                                <div className="">
                                    <input
                                        className="add-to-cart-link border-0 mx-auto"
                                        type="submit"
                                        value="Update Profile"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BankDetailsInfo;
