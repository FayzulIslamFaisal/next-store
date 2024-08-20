"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAffiliateReferralCode } from "@/app/services/affiliate/getAffiliateReferralCode";

const ReferralPage = ({ params }) => {
    const router = useRouter();
    const referralCode = params.id;

    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getAffiliateReferralCode(referralCode);
                setLoading(false);

                if (data?.results) {
                    setUserInfo(data.results);
                } else {
                    setError("Invalid referral code");
                    router.push("/");
                }
            } catch (error) {
                setLoading(false);
                setError("Failed to fetch referral information");
                console.error("Fetch error:", error);
                router.push("/");
            }
        };

        if (referralCode) {
            fetchUserInfo();
        } else {
            setLoading(false);
        }
    }, [referralCode]);

    useEffect(() => {
        if (userInfo) {
            router.push(
                `/registration?id=${userInfo?.id}&ref_name=${userInfo?.name}`
            );
        }
    }, [userInfo]);

    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-center vh-100  ">
                <div className="d-flex align-items-center justify-content-center">
                    {loading && <h1>Loading....</h1>}
                    {error && (
                        <p className="text-center text-danger">{error}</p>
                    )}
                    {!loading && !error && !userInfo && (
                        <p>Invalid referral code. Redirecting...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReferralPage;
