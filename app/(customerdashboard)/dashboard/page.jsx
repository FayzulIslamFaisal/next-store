"use client";
import CustomerLeftSideNavbar from "@/app/components/customerDashboard/CustomerLeftSideNavbar";
import CustomerDashboardRightSide from "@/app/components/customerDashboard/dashboard/CustomerDashboardRightSide";

import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from "react";
import { checkUserExistByGoogleLogin } from "@/app/services/checkUserExistByGoogleLogin";

const CustomerDashboardPage = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { data: session, status } = useSession();

    const googleImage = session?.user?.image || "";
    const googleEmail = session?.user?.email || "";
    const formData2 = {
        email: googleEmail,
    }

    useEffect(() => {
        async function fetchData() {
            if(session != undefined){
                console.log('fetch data...', 111 );
                setLoading(true);
                if(googleImage){
                    const data = await checkUserExistByGoogleLogin(formData2);
                    if(data?.message != 'Already User Exists Account Provider Customer'){
                        console.log('ssss',data?.message)
                        router.push(`/google-profile`);
                    }
                }
            }else{
                console.log('fetch data...', 222 );
            }
        }
        fetchData();
    }, [session?.user?.email]);

    return (
        <div>
            {
                loading === true? (
                    <section className="customer-dashboard-section-area">
                        <div className="container">
                            <div className="row">
                                <CustomerLeftSideNavbar authSessionData={session} />
                                <CustomerDashboardRightSide />
                            </div>
                        </div>
                    </section>   
                ) : (
                    <div className="body-loading">
                        <h2>Loading...</h2>
                    </div>
                )
            }
        </div>
    );
};

export default CustomerDashboardPage;
