const AffiliateDashboardInfo = () => {
    return (
        <>
            <div className="row g-3 mb-4 customer-dashboard-display-area">
                <div className="col-12 col-xl-3 col-md-6">
                    <div className="balance-area affiliate-display-card">
                        <h3>Balance</h3>
                        <div className="d-flex">
                            <div className="flex-1 pe-3 border-end">
                                <h4>60</h4>
                                <p className="opacity-75">Cash Balance</p>
                            </div>
                            <div className="flex-1 ps-3">
                                <h4>40</h4>
                                <p className="opacity-75">Pending Balance</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-3 col-md-6">
                    <div className="shopping-alance-area affiliate-display-card">
                        <h3>Referral</h3>
                        <div className="d-flex">
                            <div className="flex-1 pe-3 border-end">
                                <h4>06</h4>
                                <p className="opacity-75">Total Referral</p>
                            </div>
                            <div className="flex-1 ps-3">
                                <h4>30</h4>
                                <p className="opacity-75">Teme Member</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-3 col-md-6">
                    <div className="ordered-area affiliate-display-card">
                        <h3>Amount</h3>
                        <div className="d-flex">
                            <div className="flex-1 pe-3 border-end">
                                <h4>80</h4>
                                <p className="opacity-75">Resell Amount</p>
                            </div>
                            <div className="flex-1 ps-3">
                                <h4>50</h4>
                                <p className="opacity-75">Refar Amount</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-3 col-md-6">
                    <div className="in-cart-area affiliate-display-card">
                        <h3>Earning</h3>
                        <div className="d-flex">
                            <div className="flex-1 pe-3 border-end">
                                <h4>450</h4>
                                <p className="opacity-75">Total Earning</p>
                            </div>
                            <div className="flex-1 ps-3">
                                <h4>650</h4>
                                <p className="opacity-75">Earning Limit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AffiliateDashboardInfo;
