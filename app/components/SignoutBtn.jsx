"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { removeRequestPath } from "../utils";

const SignoutBtn = () => {
    const router = useRouter();
    return (
        <Link
            className=" text-white text-capitalize d-flex align-items-center"
            onClick={(e) => {
                e.preventDefault();
                signOut();
                router.push("/");
                removeRequestPath();
            }}
            href={`#`}
        >
            <Image
                src={`/images/login-icon.svg`}
                alt="login-icon"
                width={13}
                height={19}
            />
            Logout
        </Link>
    );
};

export default SignoutBtn;
