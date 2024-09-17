"use client";
import { useEffect, useState } from "react";
import AffiliateBonusDetail from "./AffiliateBonusDetail";
import AffiliateBonusTop from "./AffiliateBonusTop";
import { useSession } from "next-auth/react";
import { getPayoutAffiliateBonus } from "@/app/services/affiliatepayout/getPayoutAffiliateBonus";
import LodingFixed from "../../LodingFixed";
import NoDataFound from "../../NoDataFound";

const AffiliateBonusWrapper = () => {
    const [affiliateBonusResult, setAffiliateBonusResult] = useState({});
    const [affiliateBonusData, setAffiliateBonusData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated" && session.accessToken) {
            const fetchAffiliateBonus = async () => {
                setIsLoading(true);
                try {
                    const response = await getPayoutAffiliateBonus(
                        session.accessToken
                    );
                    setAffiliateBonusResult(response?.results || {});
                    setAffiliateBonusData(response?.results?.data || []);
                } catch (error) {
                    console.error(
                        "Failed to fetch affiliate bonus data:",
                        error
                    );
                } finally {
                    setIsLoading(false);
                }
            };
            fetchAffiliateBonus();
        }
    }, [status, session?.accessToken]);

    const affiliateBonusLength = Object.keys(affiliateBonusResult).length > 0;
    return (
        <>
            {isLoading && <LodingFixed />}
            <div className="customer-dashboard-order-history-area h-100">
                {affiliateBonusLength ? (
                    <>
                        <AffiliateBonusTop />
                        <AffiliateBonusDetail
                            affiliateBonusResult={affiliateBonusResult}
                            affiliateBonusData={affiliateBonusData}
                        />
                    </>
                ) : (
                    !isLoading && <NoDataFound />
                )}
            </div>
        </>
    );
};

export default AffiliateBonusWrapper;
