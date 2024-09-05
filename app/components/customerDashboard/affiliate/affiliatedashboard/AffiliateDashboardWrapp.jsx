"use client";

import { getAffiliateHomeDashboard } from "@/app/services/affiliate/getAffiliateHomeDashboard";
import AffiliateDashboardInfo from "./AffiliateDashboardInfo";
import AffiliateDashboardRank from "./AffiliateDashboardRank";
import AffiliateReferFriend from "./AffiliateReferFriend";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ApexChart from "./ApexChart";

const AffiliateDashboardWrapp = () => {
    const [affiliateData, setAffiliateData] = useState({});
    const { data: session, status } = useSession();
    useEffect(() => {
        if (status === "authenticated") {
            const affiliateDashboard = async () => {
                try {
                    const affiliateInfo = await getAffiliateHomeDashboard(
                        session?.accessToken
                    );
                    const affiliateResult = affiliateInfo?.results || {};
                    setAffiliateData(affiliateResult);
                } catch (error) {
                    console.error(
                        "Failed to fetch affiliate dashboard data:",
                        error
                    );
                }
            };
            affiliateDashboard();
        }
    }, [status, session]);


    return (
        <>
            <div className="customer-dashboard-section">
                <div className="customer-dashboard-card h-100">
                    <div className="customer-dashboard-title-bar">
                        <div>
                            <h1 className="customer-dashboard-title">
                                Affiliate Program
                            </h1>
                        </div>
                        <div className="fs-4">
                            <i className="fa-solid fa-bell"></i>
                        </div>
                    </div>
                    <AffiliateDashboardRank affiliateData={affiliateData} />
                    <AffiliateReferFriend affiliateData={affiliateData} />
                    <AffiliateDashboardInfo affiliateData={affiliateData} />
                    <div className="p-3">
                        <div className="row g-3 mb-4">
                            <div className="col-lg-6">
                                <div className="border rounded pt-3">
                                    <div>
                                        <ApexChart />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="border rounded">
                                    <h3 className="px-2 pt-3 fs-6 fw-bold">Affiliate Bonus</h3>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">From us</th>
                                                <th scope="col">Purpose</th>
                                                <th scope="col">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>50 ৳</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>60 ৳</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry the Bird</td>
                                                <td>Thornton</td>
                                                <td>50 ৳</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>60 ৳</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Larry the Bird</td>
                                                <td>Thornton</td>
                                                <td>50 ৳</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AffiliateDashboardWrapp;
