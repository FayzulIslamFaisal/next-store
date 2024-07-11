"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DefaultLoader from "../defaultloader/DefaultLoader";

const PrivateRoute = ({ children }) => {
    const { status, data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return DefaultLoader;
    }

    if (status === "authenticated") {
        return children;
    }

    return null; // Optionally return a fallback component or null
};

export default PrivateRoute;
