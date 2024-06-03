import ModalBody from "./ModalBody";

function DistrictModal() {
    return (
        <div
            className="modal fade district-modal-area"
            id="district-Modal"
            tabIndex="-1"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Set Delivery Area</h2>
                        <p>Select your delivery location</p>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <ModalBody />
                </div>
            </div>
        </div>
    );
}

export default DistrictModal;
