import AffiliateDashboardInfo from "./AffiliateDashboardInfo";
import AffiliateDashboardRank from "./AffiliateDashboardRank";
import AffiliateReferFriend from "./AffiliateReferFriend";

const AffiliateDashboardWrapp = () => {
    return (
        <>
            <div className="col-lg-9 customer-dashboard-section">
                <div className="customer-dashboard-card h-100">
                    <div className="customer-dashboard-title-bar">
                        <div>
                            <h1 className="customer-dashboard-title">
                                Affiliate Program
                            </h1>
                        </div>
                        <div className="fs-4">
                            <i className="fa-solid fa-bell"></i>
                        </div>
                    </div>
                    <AffiliateDashboardRank />
                    <AffiliateReferFriend />
                    <AffiliateDashboardInfo />
                </div>
            </div>
        </>
    );
};

export default AffiliateDashboardWrapp;
