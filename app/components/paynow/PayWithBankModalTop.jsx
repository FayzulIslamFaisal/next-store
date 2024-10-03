"use client";

const PayWithBankModalTop = ({ setShowBankModal }) => {
    return (
        <>
            <div className="modal-header">
                <h1 className="modal-title fs-5">Submit Payment Details</h1>
                <button
                    type="button"
                    className="btn-close bg-danger opacity-100 text-white "
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowBankModal(false)}
                    title="Close Modal"
                    style={{ color: "white" }}
                ></button>
            </div>
        </>
    );
};

export default PayWithBankModalTop;
