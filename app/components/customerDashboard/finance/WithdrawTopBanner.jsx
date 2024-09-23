"use client";

import { useEffect, useState, useTransition } from "react";
import WithdrawChart from "./WithdrawChart";
import { useSession } from "next-auth/react";
import { getAffiliateFinanceBalanceChart } from "@/app/services/affiliate-finance/getAffiliateFinanceBalanceChart";

const WithdrawTopBanner = () => {
    const [chartInfo, setChartInfo] = useState([]);
    const [isPending, startTransition] = useTransition();

    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated" && session?.accessToken) {
            const fetchFinanceBalanceChart = async () => {
                try {
                    startTransition(async () => {
                        const response = await getAffiliateFinanceBalanceChart(
                            session?.accessToken
                        );
                        setChartInfo(response?.results);
                    });
                } catch (error) {
                    console.error("Error fetching chart data", error);
                }
            };
            fetchFinanceBalanceChart();
        }
    }, [status, session?.accessToken]);

    return (
        <>
            <div className="w-100 withdraw-top-section">
                <div className="d-flex flex-column flex-md-row gap-5 justify-content-between align-items-center">
                    <div className="text-black">
                        <h2 className="fw-bold">50000</h2>
                        <p className="fs-6">Withdrawn Balance</p>
                    </div>
                    <WithdrawChart chartInfo={chartInfo} />
                </div>
            </div>
        </>
    );
};

export default WithdrawTopBanner;
