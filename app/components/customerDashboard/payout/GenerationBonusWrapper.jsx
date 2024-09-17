"use client";
import { useSession } from "next-auth/react";
import GenerationBonusDetail from "./GenerationBonusDetail";
import GenerationBonusTop from "./GenerationBonusTop";
import { useEffect, useState } from "react";
import { getAffiliateGenerationCommission } from "@/app/services/affiliatepayout/getAffiliateGenerationCommission";
import LodingFixed from "../../LodingFixed";
import NoDataFound from "../../NoDataFound";

const GenerationBonusWrapper = () => {
    const [generationBonusResult, setGenerationBonusResult] = useState({});
    const [generationBonusData, setGenerationBonusData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated" && session.accessToken) {
            const fetchgenerationBonus = async () => {
                setIsLoading(true);
                try {
                    const response = await getAffiliateGenerationCommission(
                        session.accessToken
                    );
                    setGenerationBonusResult(response?.results || {});
                    setGenerationBonusData(response?.results?.data || []);
                } catch (error) {
                    console.error(
                        "Failed to fetch generation bonus data:",
                        error
                    );
                } finally {
                    setIsLoading(false);
                }
            };
            fetchgenerationBonus();
        }
    }, [status, session?.accessToken]);

    return (
        <>
            {isLoading && <LodingFixed />}
            <div className="customer-dashboard-order-history-area h-100">
                <GenerationBonusTop />

                {generationBonusData?.length > 0 ? (
                    <GenerationBonusDetail
                        generationBonusData={generationBonusData}
                        generationBonusResult={generationBonusResult}
                    />
                ) : (
                    !isLoading && <NoDataFound />
                )}
            </div>
        </>
    );
};

export default GenerationBonusWrapper;
