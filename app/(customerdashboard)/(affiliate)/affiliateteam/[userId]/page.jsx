"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import SearchMyTeam from "@/app/components/customerDashboard/affiliate/affiliatemyteam/SearchMyTeam";
import MyTeamList from "@/app/components/customerDashboard/affiliate/affiliatemyteam/MyTeamList";
import TeamListNotFound from "@/app/components/customerDashboard/affiliate/affiliatemyteam/TeamListNotFound";
import { getAffiliateMembersTeam } from "@/app/services/affiliate/getAffiliateMembersTeam";
import { useSearchParams } from "next/navigation";
import Pagination from "@/app/components/productCategory/Pagination";

const Page = ({ params }) => {
    const { userId } = params;
    const [teamData, setTeamData] = useState([]);
    const [totalMember, settotalMember] = useState("");
    const [teamGrandTotal, setTeamGrandTotal] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const { data: session, status } = useSession();
    const [lastPage, setLastPage] = useState(1); // New state for last page
    const [currentPage, setCurrentPage] = useState(1); // New state for current page
    const searchParams = useSearchParams();

    useEffect(() => {
        const page = searchParams.get("page");
        if (page && parseInt(page) !== currentPage) {
            setCurrentPage(parseInt(page));
        }
    }, [searchParams, currentPage]);

    const limit = 20; //Per Page Category

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
                        searchParams,
                        currentPage,
                        limit
                    );
                    const teamMemberData = teamMember?.results?.myTeam;
                    const allMemberCount = teamMember?.results?.total_members;
                    const grandTotal = teamMember?.results;
                    setTeamGrandTotal(grandTotal);
                    settotalMember(allMemberCount);
                    setTeamData(teamMemberData || []);
                    setLastPage(teamMemberData?.last_page); // Set the last page
                } catch (error) {
                    console.error(
                        "Failed to fetch affiliate team member data:",
                        error
                    );
                }
            }
        };

        fetchTeamData();
    }, [status, session, searchQuery, currentPage, userId]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const teamListInfo = teamData?.data || [];

    return (
        <>
            <div className="col-lg-9">
                <div className="customer-dashboard-order-history-area h-100">
                    <div className="customer-dashboard-order-history-title">
                        <h1 className="customer-dashboard-title">
                            My Team ({totalMember})
                        </h1>
                    </div>
                    <SearchMyTeam onSearch={handleSearch} />
                    <div className="customer-dashboard-order-history table-responsive">
                        {teamListInfo.length > 0 ? (
                            <MyTeamList
                                teamListInfo={teamListInfo}
                                teamGrandTotal={teamGrandTotal}
                            />
                        ) : (
                            <TeamListNotFound />
                        )}
                        <Pagination
                            currentPage={currentPage}
                            lastPage={lastPage}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
