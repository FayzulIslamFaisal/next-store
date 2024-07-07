"use client";
import CustomerLeftSideNavbar from "@/app/components/customerDashboard/CustomerLeftSideNavbar";
import CustomerDashboardRightSide from "@/app/components/customerDashboard/dashboard/CustomerDashboardRightSide";

import { useSession } from "next-auth/react";

const CustomerDashboardPage = () => {
    const { data: session, status } = useSession();
    return (
        <section className="customer-dashboard-section-area">
            <div className="container">
                <div className="row">
                    <CustomerLeftSideNavbar authSessionData={session} />
                    <CustomerDashboardRightSide />
                </div>
            </div>
        </section>
    );
};

export default CustomerDashboardPage;
