import MyTeamList from "./MyTeamList";
import SearchMyTeam from "./SearchMyTeam";
import TeamListNotFound from "./TeamListNotFound";

const AffiliateTeamWrapp = () => {
    return (
        <>
            <div className="col-lg-9">
                <div className="customer-dashboard-order-history-area h-100">
                    <div className="customer-dashboard-order-history-title">
                        <h1 className="customer-dashboard-title">My Team</h1>
                    </div>
                    <SearchMyTeam />
                    <div className="customer-dashboard-order-history table-responsive">
                        <MyTeamList />
                        <TeamListNotFound />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AffiliateTeamWrapp;
