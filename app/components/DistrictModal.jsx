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
                    <div className="modal-body">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                        >
                            <option value="not selected">
                                Select Division
                            </option>
                            <option value="Barisal">Barisal</option>
                            <option value="Chattagram">Chattagram</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Khulna"> Khulna</option>
                            <option value="Mymensingh">Mymensingh </option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                        <span>
                            Current Location: Dhaka City, Dhaka, Dhaka, Dhaka,
                            Bangladesh
                        </span>
                        <strong>
                            <small>*</small> remember, reseting your location
                            will also reset your cart....
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DistrictModal;
