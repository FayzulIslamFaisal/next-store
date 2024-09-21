"use client";
import { useSession } from "next-auth/react";
import PayoutRankRewardDetail from "./PayoutRankRewardDetail";
import PayoutRankRewardTop from "./PayoutRankRewardTop";
import { useEffect, useState } from "react";
import { getPayoutRankReward } from "@/app/services/affiliatepayout/getPayoutRankReward";
import LodingFixed from "../../LodingFixed";
import NoDataFound from "../../NoDataFound";
import { useSearchParams } from "next/navigation";
import Pagination from "../../productCategory/Pagination";

const PayoutRankRewardWrapper = () => {
    const [rankRewardResult, setRankRewardResult] = useState({});
    const [rankRewardData, setRankRewardData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, status } = useSession();
    const searchParam = useSearchParams();
    const [lastPage, setLastPage] = useState(1); // New state for last page
    const [currentPage, setCurrentPage] = useState(1); // New state for current page
    const limit = 20; //Per Page Category

    useEffect(() => {
        const page = searchParam.get("page");
        if (page && parseInt(page) !== currentPage) {
            setCurrentPage(parseInt(page));
        }
    }, [searchParam]);

    useEffect(() => {
        if (status === "authenticated" && session.accessToken) {
            const fetchRankReward = async () => {
                setIsLoading(true);
                let params = { limit, page: currentPage }
                try {
                    const response = await getPayoutRankReward(
                        session.accessToken,
                        params
                    );
                    setRankRewardResult(response?.results || {});
                    setRankRewardData(response?.results?.data || []);
                    setLastPage(response?.results?.last_page); // Set the last page
                } catch (error) {
                    console.error("Failed to fetch Rank Reward data:", error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchRankReward();
        }
    }, [status, session?.accessToken, currentPage]);

    return (
        <>
            {isLoading && <LodingFixed />}
            <div className="customer-dashboard-order-history-area h-100 pb-4">
                <PayoutRankRewardTop />
                <div className="customer-dashboard-order-history">
                    {rankRewardData?.length > 0 ? (
                        <div>
                            <PayoutRankRewardDetail
                                rankRewardData={rankRewardData}
                                rankRewardResult={rankRewardResult}
                            />
                            <Pagination
                                currentPage={currentPage}
                                lastPage={lastPage}
                            />
                        </div>
                    ) : (
                        !isLoading && <NoDataFound />
                    )}
                    <div className="pt-5 ">
                        <p className="ps-4">
                            Showing
                            {rankRewardResult?.current_page
                                ? rankRewardResult?.current_page
                                : 0}
                            to{" "}
                            {rankRewardResult?.last_page
                                ? rankRewardResult?.last_page
                                : 0}{" "}
                            of{" "}
                            {rankRewardResult?.total_page_count
                                ? rankRewardResult?.total_page_count
                                : 0}{" "}
                            entries
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayoutRankRewardWrapper;
