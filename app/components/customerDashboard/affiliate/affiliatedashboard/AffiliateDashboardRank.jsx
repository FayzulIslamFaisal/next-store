import { NagadhatPublicUrl } from "@/app/utils";
import Image from "next/image";

const AffiliateDashboardRank = ({ affiliateData }) => {
    const imageUrl = affiliateData?.profile_picture
        ? `${NagadhatPublicUrl}/${affiliateData.profile_picture}`
        : `${NagadhatPublicUrl}/images/men222222.png`;

    return (
        <>
            <div className="affiliate-user-rank-holder">
                <h2 className="customer-dashboard-subtitle">
                    Rank: {affiliateData?.rank}
                </h2>
                <div className="affiliate-user-avate">
                    <Image
                        src={imageUrl}
                        alt="User profile"
                        width={60}
                        height={60}
                        className="rounded-circle"
                    />
                </div>
            </div>
        </>
    );
};

export default AffiliateDashboardRank;
