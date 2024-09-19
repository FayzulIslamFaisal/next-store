"use client";
import { useEffect, useState } from "react";
import AffiliateBonusDetail from "./AffiliateBonusDetail";
import AffiliateBonusTop from "./AffiliateBonusTop";
import { useSession } from "next-auth/react";
import { getPayoutAffiliateBonus } from "@/app/services/affiliatepayout/getPayoutAffiliateBonus";
import LodingFixed from "../../LodingFixed";
import NoDataFound from "../../NoDataFound";
import { useRouter, useSearchParams } from "next/navigation";
import PayoutSearchForm from "./PayoutSearchForm";
import Pagination from "../../productCategory/Pagination";

const AffiliateBonusWrapper = () => {
    const [affiliateBonusResult, setAffiliateBonusResult] = useState({});
    const [affiliateBonusData, setAffiliateBonusData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const { data: session, status } = useSession();
    const searchParam = useSearchParams();
    const router = useRouter();
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
        const handler = setTimeout(() => {
            const newParams = new URLSearchParams(searchParam);
            newParams.set('page', 1);
            const newUrl = `${window.location.pathname}?${newParams.toString()}`;
            router.push(newUrl);
            // setCurrentPage(1)
            setDebouncedSearchTerm(searchTerm);
        }, 500);
        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const fetchAffiliateBonus = async () => {
        if (status === "authenticated" && session.accessToken) {
            setIsLoading(true);
            let params = { search: debouncedSearchTerm, limit, page: currentPage }
            try {
                const response = await getPayoutAffiliateBonus(
                    session.accessToken,
                    params
                );
                setAffiliateBonusResult(response?.results || {});
                setAffiliateBonusData(response?.results?.data || []);
                setLastPage(response?.results?.last_page); // Set the last page
            } catch (error) {
                console.error("Failed to fetch affiliate bonus data:", error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        if (debouncedSearchTerm.length >= 3 || debouncedSearchTerm === "") {
            fetchAffiliateBonus();
        }
    }, [status, session?.accessToken, debouncedSearchTerm, currentPage]);

    return (
        <>
            {isLoading && <LodingFixed />}
            <div className="customer-dashboard-order-history-area h-100">
                <AffiliateBonusTop />
                <PayoutSearchForm
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                {affiliateBonusData?.length > 0 ? (
                    <div>
                        <AffiliateBonusDetail
                            affiliateBonusResult={affiliateBonusResult}
                            affiliateBonusData={affiliateBonusData}
                        />
                        <Pagination
                            currentPage={currentPage}
                            lastPage={lastPage}
                        />
                    </div>
                ) : (
                    !isLoading && <NoDataFound />
                )}
            </div>
        </>
    );
};

export default AffiliateBonusWrapper;
