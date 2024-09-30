const PayWithAgentModal = ({
    showAgentModal,
    setShowAgentModal,
    orderSummary,
}) => {
    // const handleSubmitAgentPayment = () => {
    //     setShowModal(false);
    //     toast.success("Agent payment details submitted.");
    // };
    return (
        <>
            <div
                className={`modal fade ${showAgentModal ? "show" : ""}`}
                tabIndex="-1"
                role="dialog"
                style={{ display: showAgentModal ? "block" : "none" }}
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header justify-content-between">
                            <h5 className="modal-title">Pay with Agent</h5>
                            <button
                                type="button"
                                className="close border-0 bg-black text-black bg-transparent"
                                onClick={() => setShowAgentModal(false)}
                            >
                                <span className=" fs-4 ">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group pb-3">
                                    <label className="pb-2">Invoice</label>
                                    <input
                                        type="text"
                                        className="form-control focus-ring focus-ring-light"
                                        // value={agentPaymentDetails.agentId}
                                        // onChange={(e) =>
                                        //     setAgentPaymentDetails((prev) => ({
                                        //         ...prev,
                                        //         agentId: e.target.value,
                                        //     }))
                                        // }
                                    />
                                </div>
                                <div className="form-group pb-3">
                                    <label className="pb-2">Agent</label>
                                    <select class="form-select focus-ring focus-ring-light">
                                        <option>IFIC select</option>
                                        <option>Bkash select</option>
                                        <option>Nagad select</option>
                                    </select>
                                    {/* <input
                                        type="text"
                                        className="form-control"
                                        value={agentPaymentDetails.agentName}
                                        onChange={(e) =>
                                            setAgentPaymentDetails((prev) => ({
                                                ...prev,
                                                agentName: e.target.value,
                                            }))
                                        }
                                    /> */}
                                </div>
                                <div className="form-group pb-3">
                                    <h5>Payment Summary:</h5>
                                    <p>
                                        Please pay ৳ 500000 to the following
                                        agent and wait for confirmation.
                                    </p>
                                    <p>Agent Name: Alisha Affairs,</p>
                                    <p>Phone: 01868062329.</p>
                                </div>
                                <div className="form-group pb-3">
                                    <label className="pb-2">
                                        Reference (optional)
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control focus-ring focus-ring-light"
                                        // value={
                                        //     agentPaymentDetails.transactionId
                                        // }
                                        // onChange={(e) =>
                                        //     setAgentPaymentDetails((prev) => ({
                                        //         ...prev,
                                        //         transactionId: e.target.value,
                                        //     }))
                                        // }
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => setShowAgentModal(false)}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="add-to-cart-link border-0 rounded-2"
                                // onClick={handleSubmitAgentPayment}
                            >
                                Confirm Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayWithAgentModal;
