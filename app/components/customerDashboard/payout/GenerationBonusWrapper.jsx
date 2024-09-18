"use client";
import { useSession } from "next-auth/react";
import GenerationBonusDetail from "./GenerationBonusDetail";
import GenerationBonusTop from "./GenerationBonusTop";
import { useEffect, useState } from "react";
import { getAffiliateGenerationCommission } from "@/app/services/affiliatepayout/getAffiliateGenerationCommission";
import LodingFixed from "../../LodingFixed";
import NoDataFound from "../../NoDataFound";
import { useSearchParams } from "next/navigation";
import Pagination from "../../productCategory/Pagination";

const GenerationBonusWrapper = () => {
    const [generationBonusResult, setGenerationBonusResult] = useState({});
    const [generationBonusData, setGenerationBonusData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, status } = useSession();
    const searchParam = useSearchParams();
    const [lastPage, setLastPage] = useState(1); // New state for last page
    const [currentPage, setCurrentPage] = useState(1); // New state for current page
console.log(lastPage);


    useEffect(() => {
        const page = searchParam.get("page");
        if (page && parseInt(page) !== currentPage) {
            setCurrentPage(parseInt(page));
        }
    }, [searchParam, currentPage]);

    const limit = 20; //Per Page Category

    useEffect(() => {
        if (status === "authenticated" && session.accessToken) {
            const fetchgenerationBonus = async () => {
                setIsLoading(true);
                let params = { limit, page: currentPage };
                try {
                    const response = await getAffiliateGenerationCommission(
                        session.accessToken,
                        params
                    );
                    setGenerationBonusResult(response?.results || {});
                    setGenerationBonusData(response?.results?.data || []);
                    setLastPage(response?.results?.last_page); // Set the last page
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
    }, [status, session?.accessToken, currentPage]);

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
                <Pagination
                    currentPage={currentPage}
                    lastPage={lastPage}
                />
            </div>
        </>
    );
};

export default GenerationBonusWrapper;
