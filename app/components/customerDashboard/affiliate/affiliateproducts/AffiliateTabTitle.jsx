export const AffiliateTabTitle = () => {
    return (
        <>
            <div className="customer-setting-header tab-header border-0">
                <ul
                    className="nav nav-pills d-flex tab-continer"
                    id="myTab"
                    role="tablist"
                >
                    <li className="nav-item">
                        <button
                            className="nav-link active rounded-0"
                            id="retails-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#retails"
                            type="button"
                            role="tab"
                        >
                            Retails
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link rounded-0 border-start-0 border-end-0"
                            id="container-booking-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#container-booking"
                            type="button"
                            role="tab"
                        >
                            Container Booking
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link rounded-0"
                            id="resale-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#resale"
                            type="button"
                            role="tab"
                        >
                            FPNH (Resale)
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link rounded-0"
                            id="resale-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#properties"
                            type="button"
                            role="tab"
                        >
                            Properties
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};
