"use client";
import { useSession } from "next-auth/react";
import ResaleBonusDetail from "./ResaleBonusDetail";
import ResaleBonusTop from "./ResaleBonusTop";
import { useEffect, useState } from "react";
import { getPayoutResaleBonus } from "@/app/services/affiliatepayout/getPayoutResaleBonus";
import NoDataFound from "../../NoDataFound";
import LodingFixed from "../../LodingFixed";
import PayoutSearchForm from "./PayoutSearchForm";

const ResaleBonusWrapper = () => {
    const [resalBonusResult, setResalBonusResult] = useState({});
    const [resalBonusData, setResalBonusData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, status } = useSession();

    useEffect(() => {
        const handle = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);
        return () => {
            clearTimeout(handle);
        };
    }, [searchTerm]);

    const fetchResalBonus = async () => {
        if (status === "authenticated" && session.accessToken) {
            setIsLoading(true);
            try {
                const response = await getPayoutResaleBonus(
                    session.accessToken,
                    { search: debouncedSearchTerm }
                );
                setResalBonusResult(response?.results || {});
                setResalBonusData(response?.results?.data || []);
            } catch (error) {
                console.error("Failed to fetch resale bonus data:", error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        if (debouncedSearchTerm.length >= 3 || debouncedSearchTerm === "") {
            fetchResalBonus();
        }
    }, [status, session?.accessToken, debouncedSearchTerm]);

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
