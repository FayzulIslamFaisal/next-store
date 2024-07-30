"use client";
import { useSession } from "next-auth/react";
import CustomerLeftSideNavbar from "../components/customerDashboard/CustomerLeftSideNavbar";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

export default function DashboardLayout({ children }) {
    const { data: session, status } = useSession();
    if (status === "loading") {
        return <p>Loading....</p>;
    }
    return (
        <PrivateRoute>
            <section className="customer-dashboard-section-area">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-3 d-none d-lg-block">
                            <CustomerLeftSideNavbar authSessionData={session} />
                        </aside>

                        {/* customer dashboard right side */}
                        {children}

                    </div>
                </div>
            </section>
        </PrivateRoute>
    )
}