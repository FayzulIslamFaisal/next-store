"use client";
import { useSession } from "next-auth/react";
import ResaleBonusDetail from "./ResaleBonusDetail";
import ResaleBonusTop from "./ResaleBonusTop";
import { useEffect, useState } from "react";
import { getPayoutResaleBonus } from "@/app/services/affiliatepayout/getPayoutResaleBonus";
import NoDataFound from "../../NoDataFound";
import LodingFixed from "../../LodingFixed";
import PayoutSearchForm from "./PayoutSearchForm";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "../../productCategory/Pagination";

const ResaleBonusWrapper = () => {
    const [resalBonusResult, setResalBonusResult] = useState({});
    const [resalBonusData, setResalBonusData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, status } = useSession();
    const searchParam = useSearchParams();
    const router = useRouter();
    const [lastPage, setLastPage] = useState(1); // New state for last page
    const [currentPage, setCurrentPage] = useState(1); // New state for current page

    useEffect(() => {
        const page = searchParam.get("page");
        if (page && parseInt(page) !== currentPage) {
            setCurrentPage(parseInt(page));
        }
    }, [searchParam]);

    const limit = 20; //Per Page Category

    useEffect(() => {
        if (debouncedSearchTerm.length >= 3 || debouncedSearchTerm === "") {
            const handle = setTimeout(() => {
                const newParams = new URLSearchParams(searchParam);
                newParams.set('page', 1);
                const newUrl = `${window.location.pathname}?${newParams.toString()}`;
                router.push(newUrl);
                setDebouncedSearchTerm(searchTerm);
            }, 500);
            return () => {
                clearTimeout(handle);
            };
        }
    }, [searchTerm]);

    const fetchResalBonus = async () => {
        if (status === "authenticated" && session.accessToken) {
            setIsLoading(true);
            let params = { search: debouncedSearchTerm, limit, page: currentPage }
            try {
                const response = await getPayoutResaleBonus(
                    session.accessToken,
                    params
                );
                setResalBonusResult(response?.results || {});
                setResalBonusData(response?.results?.data || []);
                setLastPage(response?.results?.last_page); // Set the last page
            } catch (error) {
                console.error("Failed to fetch resale bonus data:", error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        fetchResalBonus();
    }, [status, session?.accessToken, debouncedSearchTerm, currentPage]);

    return (
        <>
            {isLoading && <LodingFixed />}
            <div className="customer-dashboard-order-history-area h-100">
                <ResaleBonusTop />
                <PayoutSearchForm
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                {resalBonusData?.length > 0 ? (
                    <>
                        <ResaleBonusDetail
                            resalBonusResult={resalBonusResult}
                            resalBonusData={resalBonusData}
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

export default ResaleBonusWrapper;
