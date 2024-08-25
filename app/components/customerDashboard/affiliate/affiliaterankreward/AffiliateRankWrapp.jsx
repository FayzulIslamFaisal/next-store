import TeamListNotFound from "../affiliatemyteam/TeamListNotFound";
import RankRewardList from "./RankRewardList";

const AffiliateRankWrapp = () => {
    return (
        <>
            <div className="customer-dashboard-order-history-area h-100">
                <div className="customer-dashboard-order-history-title">
                    <h1 className="customer-dashboard-title">
                        Ranks & Rewards
                    </h1>
                </div>
                <div className="customer-dashboard-order-history table-responsive">
                    <RankRewardList />
                    <TeamListNotFound />
                </div>
            </div>
        </>
    );
};

export default AffiliateRankWrapp;
