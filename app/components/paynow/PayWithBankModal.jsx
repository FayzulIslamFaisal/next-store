import dynamic from "next/dynamic";
import PayWithBankModalLeft from "./PayWithBankModalLeft";
const PayWithBankModalRight = dynamic(() => import("./PayWithBankModalRight"), {
    ssr: false,
});

const PayWithBankModal = ({ setShowBankModal, showBankModal }) => {
    return (
        <>
            <div
                className={`modal fade ${showBankModal ? "show" : ""}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ display: showBankModal ? "block" : "none" }}
            >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">
                                Submit Payment Details
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setShowBankModal(false)}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <PayWithBankModalLeft />
                                <PayWithBankModalRight />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => setShowBankModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayWithBankModal;
