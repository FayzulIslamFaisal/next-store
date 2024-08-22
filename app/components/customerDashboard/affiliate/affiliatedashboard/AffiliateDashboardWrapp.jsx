"use client";

import { getAffiliateHomeDashboard } from "@/app/services/affiliate/getAffiliateHomeDashboard";
import AffiliateDashboardInfo from "./AffiliateDashboardInfo";
import AffiliateDashboardRank from "./AffiliateDashboardRank";
import AffiliateReferFriend from "./AffiliateReferFriend";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const AffiliateDashboardWrapp = () => {
    const [affiliateData, setAffiliateData] = useState({});
    const { data: session, status } = useSession();
    useEffect(() => {
        if (status === "authenticated") {
            const affiliateDashboard = async () => {
                try {
                    const affiliateInfo = await getAffiliateHomeDashboard(
                        session?.accessToken
                    );
                    const affiliateResult = affiliateInfo?.results || {};
                    setAffiliateData(affiliateResult);
                } catch (error) {
                    console.error(
                        "Failed to fetch affiliate dashboard data:",
                        error
                    );
                }
            };
            affiliateDashboard();
        }
    }, [status, session]);
    

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
                    <AffiliateDashboardRank affiliateData={affiliateData} />
                    <AffiliateReferFriend affiliateData={affiliateData} />
                    <AffiliateDashboardInfo affiliateData={affiliateData} />
                </div>
            </div>
        </>
    );
};

export default AffiliateDashboardWrapp;
