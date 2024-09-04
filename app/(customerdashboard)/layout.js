"use client";
import { useSession } from "next-auth/react";
import CustomerLeftSideNavbar from "../components/customerDashboard/CustomerLeftSideNavbar";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

export default function DashboardLayout({ children }) {
    const { data: session, status } = useSession();
    if (status === "loading") {
        return(<div className=" d-flex align-items-center justify-content-center vh-100">
            <h1 className="text-center">Loading... </h1>;
        </div>) 
    }
    return (
        <PrivateRoute>
            <section className="customer-dashboard-section-area">
                <div className="container">
                    <div className="row">
                        <aside className="col-xl-3 d-none d-xl-block">
                            <CustomerLeftSideNavbar authSessionData={session} />
                        </aside>

                        {/* customer dashboard right side */}
                        <div className="col-xl-9">
                           {children} 
                        </div>
                        
                    </div>
                </div>
            </section>
        </PrivateRoute>
    )
}