"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { removeRequestPath } from "../utils";
import { FaSignOutAlt } from "react-icons/fa";

const SignoutBtn = () => {
    const router = useRouter();
    return (
        <Link
            className="text-capitalize d-flex align-items-center"
            onClick={(e) => {
                e.preventDefault();
                signOut();
                router.push("/");
                removeRequestPath();
            }}
            href={`#`}
            style={{ padding: "10px 28px" }}
        >
            <FaSignOutAlt className="nav-icon me-2" />
            Logout
        </Link>
    );
};

export default SignoutBtn;
