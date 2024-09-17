"use client";
import { useSession } from "next-auth/react";
import ResaleBonusDetail from "./ResaleBonusDetail";
import ResaleBonusTop from "./ResaleBonusTop";
import { useEffect, useState } from "react";
import { getPayoutResaleBonus } from "@/app/services/affiliatepayout/getPayoutResaleBonus";
import NoDataFound from "../../NoDataFound";
import LodingFixed from "../../LodingFixed";

const ResaleBonusWrapper = () => {
    const [resalBonusResult, setResalBonusResult] = useState({});
    const [resalBonusData, setResalBonusData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated" && session.accessToken) {
            const fetchResalBonus = async () => {
                setIsLoading(true);
                try {
                    const response = await getPayoutResaleBonus(
                        session.accessToken
                    );
                    setResalBonusResult(response?.results || {});
                    setResalBonusData(response?.results?.data || []);
                } catch (error) {
                    console.error("Failed to fetch resale bonus data:", error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchResalBonus();
        }
    }, [status, session?.accessToken]);

    console.log("resalBonusData", { resalBonusData });

    return (
        <>
            {isLoading && <LodingFixed />}
            <div className="customer-dashboard-order-history-area h-100">
                <ResaleBonusTop />
                {/* <ResaleBonusDetail
                    resalBonusResult={resalBonusResult}
                    resalBonusData={resalBonusData}
                /> */}
                {resalBonusData?.length > 0 ? (
                    <ResaleBonusDetail
                        resalBonusResult={resalBonusResult}
                        resalBonusData={resalBonusData}
                    />
                ) : (
                    !isLoading && <NoDataFound />
                )}
            </div>
        </>
    );
};

export default ResaleBonusWrapper;
