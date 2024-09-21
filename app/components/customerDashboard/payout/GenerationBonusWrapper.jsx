"use client";
import { useSession } from "next-auth/react";
import GenerationBonusDetail from "./GenerationBonusDetail";
import GenerationBonusTop from "./GenerationBonusTop";
import { useEffect, useState } from "react";
import { getAffiliateGenerationCommission } from "@/app/services/affiliatepayout/getAffiliateGenerationCommission";
import LodingFixed from "../../LodingFixed";
import NoDataFound from "../../NoDataFound";
import { useRouter, useSearchParams } from "next/navigation";
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
    const router = useRouter()
    useEffect(() => {
        const page = searchParam.get("page");
        if (page && parseInt(page) !== currentPage) {
            setCurrentPage(parseInt(page));
        }
    }, [searchParam]);

    const limit = 20; //Per Page Category

    useEffect(() => {
        if (searchTerm.length >= 3 || searchTerm === "") {
            const handler = setTimeout(() => {
                const newParams = new URLSearchParams(searchParam);
                newParams.set('page', 1);
                const newUrl = `${window.location.pathname}?${newParams.toString()}`;
                router.push(newUrl);
                setDebouncedSearchTerm(searchTerm);
            }, 500);
            return () => {
                clearTimeout(handler);
            };
        }
    }, [searchTerm]);

    const fetchgenerationBonus = async () => {
        if (status === "authenticated" && session.accessToken) {
            setIsLoading(true);
            let params = { search: debouncedSearchTerm, limit, page: currentPage }
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
        fetchgenerationBonus();
    }, [status, session?.accessToken, debouncedSearchTerm, currentPage]);

    return (
        <>
            {isLoading && <LodingFixed />}
            <div className="customer-dashboard-order-history-area h-100 pb-4">
                <GenerationBonusTop />
                <PayoutSearchForm
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                {generationBonusData?.length > 0 ? (
                    <>
                        <GenerationBonusDetail
                            generationBonusData={generationBonusData}
                            generationBonusResult={generationBonusResult}
                        />
                        <Pagination
                            currentPage={currentPage}
                            lastPage={lastPage}

                        />
                    </>
                ) : (
                    !isLoading && <NoDataFound />
                )}
            </div>
        </>
    );
};

export default GenerationBonusWrapper;
