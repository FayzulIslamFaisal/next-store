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
import PayoutSearchForm from "./PayoutSearchForm";

const GenerationBonusWrapper = () => {
    const [generationBonusResult, setGenerationBonusResult] = useState({});
    const [generationBonusData, setGenerationBonusData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
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
            let params={ search: debouncedSearchTerm, limit, page: currentPage  }
            try {
                const response = await getAffiliateGenerationCommission(
                    session.accessToken,
                    params
                );
                setGenerationBonusResult(response?.results || {});
                setGenerationBonusData(response?.results?.data || []);
                setLastPage(response?.results?.last_page)
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
                <Pagination
                    currentPage={currentPage}
                    lastPage={lastPage}
                />
            </div>
        </>
    );
};

export default GenerationBonusWrapper;
