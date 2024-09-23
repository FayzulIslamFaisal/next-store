const MobileBankingInfo = () => {
    return (
        <>
            <div className="accordion-item border-0 mb-4 rounded">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed rounded bg-white customer-dashboard-subtitle"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mobile-main-collapse"
                        aria-expanded="true"
                        aria-controls="mobile-main-collapse"
                    >
                        Mobile Banking
                    </button>
                </h2>
                <div
                    id="mobile-main-collapse"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion-parent-id"
                >
                    <div className="accordion-body border-top">
                        <div className="customer-manage-profile-from-area">
                            <form className="row">
                                <div className="col-md-6 pb-3">
                                    <label
                                        htmlFor="bkash_number"
                                        className="form-label"
                                    >
                                        Bkash:
                                    </label>
                                    <input
                                        type="number"
                                        name="bkash_number"
                                        className="form-control"
                                        id="bkash_number"
                                        placeholder="Enter Bkash Number..."
                                    />
                                </div>
                                <div className="col-md-6 pb-3">
                                    <label
                                        htmlFor="nagad_number"
                                        className="form-label"
                                    >
                                        Nagad:
                                    </label>
                                    <input
                                        type="number"
                                        name="nagad_number"
                                        className="form-control"
                                        id="nagad_number"
                                        placeholder="Enter Nagad Number..."
                                    />
                                </div>
                                <div className="col-md-6 pb-3">
                                    <label
                                        htmlFor="rocket_number"
                                        className="form-label"
                                    >
                                        Rocket:
                                    </label>
                                    <input
                                        type="number"
                                        name="rocket_number"
                                        className="form-control"
                                        id="rocket_number"
                                        placeholder="Enter Rocket Number..."
                                    />
                                </div>
                                <div className="col-md-6 pb-3">
                                    <label
                                        htmlFor="agent_banking"
                                        className="form-label"
                                    >
                                        DBBL Agent Banking:
                                    </label>
                                    <input
                                        type="number"
                                        name="agent_banking"
                                        className="form-control"
                                        id="agent_banking"
                                        placeholder="Enter DBBL Agent Number..."
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
                                        value="Update Info"
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

export default MobileBankingInfo;
