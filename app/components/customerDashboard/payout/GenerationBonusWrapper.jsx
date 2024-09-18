"use client";
import { useSession } from "next-auth/react";
import GenerationBonusDetail from "./GenerationBonusDetail";
import GenerationBonusTop from "./GenerationBonusTop";
import { useEffect, useState } from "react";
import { getAffiliateGenerationCommission } from "@/app/services/affiliatepayout/getAffiliateGenerationCommission";
import LodingFixed from "../../LodingFixed";
import NoDataFound from "../../NoDataFound";
import PayoutSearchForm from "./PayoutSearchForm";

const GenerationBonusWrapper = () => {
    const [generationBonusResult, setGenerationBonusResult] = useState({});
    const [generationBonusData, setGenerationBonusData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, status } = useSession();

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);
        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const fetchgenerationBonus = async () => {
        if (status === "authenticated" && session.accessToken) {
            setIsLoading(true);
            try {
                const response = await getAffiliateGenerationCommission(
                    session.accessToken,
                    {
                        search: debouncedSearchTerm,
                    }
                );
                setGenerationBonusResult(response?.results || {});
                setGenerationBonusData(response?.results?.data || []);
            } catch (error) {
                console.error("Failed to fetch generation bonus data:", error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        if (debouncedSearchTerm.length >= 3 || debouncedSearchTerm === "") {
            fetchgenerationBonus();
        }
    }, [status, session?.accessToken, debouncedSearchTerm]);

    return (
        <>
            {isLoading && <LodingFixed />}
            <div className="customer-dashboard-order-history-area h-100">
                <GenerationBonusTop />
                <PayoutSearchForm
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

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
