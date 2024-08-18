"use client";
import { useEffect, useState } from "react";
import MyTeamList from "./MyTeamList";
import SearchMyTeam from "./SearchMyTeam";
import TeamListNotFound from "./TeamListNotFound";
import { useSession } from "next-auth/react";
import { getAffiliateTeam } from "@/app/services/affiliate/getAffiliateTeam";

const AffiliateTeamWrapp = () => {
    const [teamData, setTeamData] = useState([]);

    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated" && session?.accessToken) {
            const fetchTeamData = async () => {
                const affiliateTeam = await getAffiliateTeam(
                    session?.accessToken
                );
                const affiliateTeamData = affiliateTeam?.results?.myTeam;
                setTeamData(affiliateTeamData);
                try {
                } catch (error) {
                    console.error(
                        "Failed to fetch affiliate team data:",
                        error
                    );
                }
            };
            fetchTeamData();
        }
    }, [status, session]);

    const teamListInfo = teamData?.data || [];
    return (
        <>
            <div className="col-lg-9">
                <div className="customer-dashboard-order-history-area h-100">
                    <div className="customer-dashboard-order-history-title">
                        <h1 className="customer-dashboard-title">My Team</h1>
                    </div>
                    <SearchMyTeam />
                    <div className="customer-dashboard-order-history table-responsive">
                        {teamListInfo?.length > 0 ? (
                            <MyTeamList teamListInfo={teamListInfo} />
                        ) : (
                            <TeamListNotFound />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AffiliateTeamWrapp;
