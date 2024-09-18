"use client";
import { useEffect, useState } from "react";
import AffiliateBonusDetail from "./AffiliateBonusDetail";
import AffiliateBonusTop from "./AffiliateBonusTop";
import { useSession } from "next-auth/react";
import { getPayoutAffiliateBonus } from "@/app/services/affiliatepayout/getPayoutAffiliateBonus";
import LodingFixed from "../../LodingFixed";
import NoDataFound from "../../NoDataFound";
import { useSearchParams } from "next/navigation";
import PayoutSearchForm from "./PayoutSearchForm";

const AffiliateBonusWrapper = () => {
    const [affiliateBonusResult, setAffiliateBonusResult] = useState({});
    const [affiliateBonusData, setAffiliateBonusData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const { data: session, status } = useSession();
    // const searchParams = useSearchParams();
    // const [searchQuery, setSearchQuery] = useState(
    //     searchParams.get("search") || ""
    // );
    
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);
        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const fetchAffiliateBonus = async () => {
        if (status === "authenticated" && session.accessToken) {
            setIsLoading(true);
            try {
                const response = await getPayoutAffiliateBonus(
                    session.accessToken,
                    { search: debouncedSearchTerm }
                );
                setAffiliateBonusResult(response?.results || {});
                setAffiliateBonusData(response?.results?.data || []);
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
    }, [status, session?.accessToken, debouncedSearchTerm]);

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
                    <AffiliateBonusDetail
                        affiliateBonusResult={affiliateBonusResult}
                        affiliateBonusData={affiliateBonusData}
                    />
                ) : (
                    !isLoading && <NoDataFound />
                )}
            </div>
        </>
    );
};

export default AffiliateBonusWrapper;
