import { NagadhatPublicUrl } from "@/app/utils";

const AffiliateReferFriend = ({ affiliateData }) => {
    return (
        <>
            <div className="affiliate-dashboard-refer-section">
                <div className="affiliate-dashboard-refer-item">
                    <p>Refer A friend</p>
                </div>
                <div className="affiliate-dashboard-refer-item">
                    <p>
                        {`${NagadhatPublicUrl}/ref/${affiliateData?.reffer_a_friend_link}`}
                    </p>
                </div>
                <button className="affiliate-dashboard-refer-item focus-ring">
                    Copy
                </button>
                <button className="affiliate-dashboard-refer-item focus-ring">
                    New SignUp
                </button>
            </div>
        </>
    );
};

export default AffiliateReferFriend;
