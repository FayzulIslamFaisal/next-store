"use client";
import { useSession } from "next-auth/react";
import PayoutRankRewardDetail from "./PayoutRankRewardDetail";
import PayoutRankRewardTop from "./PayoutRankRewardTop";
import { useEffect, useState } from "react";
import { getPayoutRankReward } from "@/app/services/affiliatepayout/getPayoutRankReward";
import LodingFixed from "../../LodingFixed";
import NoDataFound from "../../NoDataFound";
const PayoutRankRewardWrapper = () => {
    const [rankRewardResult, setRankRewardResult] = useState({});
    const [rankRewardData, setRankRewardData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated" && session.accessToken) {
            const fetchRankReward = async () => {
                setIsLoading(true);
                try {
                    const response = await getPayoutRankReward(
                        session.accessToken
                    );
                    setRankRewardResult(response?.results || {});
                    setRankRewardData(response?.results?.data || []);
                } catch (error) {
                    console.error("Failed to fetch Rank Reward data:", error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchRankReward();
        }
    }, [status, session?.accessToken]);

    return (
        <>
            {isLoading && <LodingFixed />}
            <div className="customer-dashboard-order-history-area h-100">
                <PayoutRankRewardTop />
                <div className="customer-dashboard-order-history">
                    {rankRewardData?.length > 0 ? (
                        <PayoutRankRewardDetail
                            rankRewardData={rankRewardData}
                            rankRewardResult={rankRewardResult}
                        />
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
                        <p className="ps-4">pagination</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayoutRankRewardWrapper;
