"use client";
import CustomerLeftSideNavbar from "@/app/components/customerDashboard/CustomerLeftSideNavbar";
import CustomerDashboardRightSide from "@/app/components/customerDashboard/dashboard/CustomerDashboardRightSide";

import { useSession } from "next-auth/react";
import React from "react";

const CustomerDashboardPage = () => {
    const { data: session, status } = useSession();

    return (
        <div>
            {
                <section className="customer-dashboard-section-area">
                    <div className="container">
                        <div className="row">
                            <CustomerLeftSideNavbar authSessionData={session} />
                            <CustomerDashboardRightSide />
                        </div>
                    </div>
                </section>   
            }
        </div>
    );
};

export default CustomerDashboardPage;
