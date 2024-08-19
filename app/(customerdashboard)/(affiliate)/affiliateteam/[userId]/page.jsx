"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import SearchMyTeam from "@/app/components/customerDashboard/affiliate/affiliatemyteam/SearchMyTeam";
import MyTeamList from "@/app/components/customerDashboard/affiliate/affiliatemyteam/MyTeamList";
import TeamListNotFound from "@/app/components/customerDashboard/affiliate/affiliatemyteam/TeamListNotFound";
import { getAffiliateMembersTeam } from "@/app/services/affiliate/getAffiliateMembersTeam";

const Page = ({ params }) => {
    const { userId } = params;
    const [teamData, setTeamData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const { data: session, status } = useSession();

    useEffect(() => {
        const fetchTeamData = async () => {
            if (status === "authenticated" && session?.accessToken) {
                try {
                    let searchParams = {};
                    if (searchQuery.length >= 2) {
                        searchParams.search = searchQuery;
                    }
                    const teamMember = await getAffiliateMembersTeam(
                        session?.accessToken,
                        userId,
                        searchParams
                    );
                    const teamMemberData = teamMember?.results?.myTeam;
                    setTeamData(teamMemberData || []);
                } catch (error) {
                    console.error(
                        "Failed to fetch affiliate team member data:",
                        error
                    );
                }
            }
        };

        fetchTeamData();
    }, [status, session, searchQuery, userId]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const teamListInfo = teamData?.data || [];

    return (
        <>
            <div className="col-lg-9">
                <div className="customer-dashboard-order-history-area h-100">
                    <div className="customer-dashboard-order-history-title">
                        <h1 className="customer-dashboard-title">My Team</h1>
                    </div>
                    <SearchMyTeam onSearch={handleSearch} />
                    <div className="customer-dashboard-order-history table-responsive">
                        {teamListInfo.length > 0 ? (
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

export default Page;
