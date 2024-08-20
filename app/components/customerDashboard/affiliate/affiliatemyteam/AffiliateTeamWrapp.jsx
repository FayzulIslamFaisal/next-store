"use client";
import { useEffect, useState } from "react";
import MyTeamList from "./MyTeamList";
import SearchMyTeam from "./SearchMyTeam";
import TeamListNotFound from "./TeamListNotFound";
import { useSession } from "next-auth/react";
import { getAffiliateTeam } from "@/app/services/affiliate/getAffiliateTeam";
import { useSearchParams } from "next/navigation";
import Pagination from "@/app/components/productCategory/Pagination";

const AffiliateTeamWrapp = () => {
    const [teamData, setTeamData] = useState([]);
    const [totalMember, setTotalMember] = useState("");
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
        if (status === "authenticated" && session?.accessToken) {
            const fetchTeamData = async () => {
                try {
                    let searchParams = {};
                    if (searchQuery.length >= 2) {
                        searchParams.search = searchQuery;
                    }
                    searchParams.page=currentPage;
                    searchParams.limit=limit;
                    
                    const affiliateTeam = await getAffiliateTeam(
                        session?.accessToken,
                        searchParams
                    );
                    const affiliateTeamData = affiliateTeam?.results?.myTeam;
                    const allMemberCount =
                        affiliateTeam?.results?.total_members;
                    const grandTotal = affiliateTeam?.results;
                    setTeamGrandTotal(grandTotal);
                    setTotalMember(allMemberCount);
                    setTeamData(affiliateTeamData);
                    setLastPage(affiliateTeamData.last_page || 1); // Set the last page
                } catch (error) {
                    console.error(
                        "Failed to fetch affiliate team data:",
                        error
                    );
                }
            };
            fetchTeamData();
        }
    }, [status, session, searchQuery, currentPage]);

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
                        {teamListInfo?.length > 0 ? (
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

export default AffiliateTeamWrapp;
