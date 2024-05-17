"use client";
import { signIn } from "next-auth/react";

const SigninBtn = ({ provider }) => {
    switch (provider) {
        case "facebook":
            return <button onClick={() => signIn("facebook")}>Facebook</button>;
        case "google":
            return <button onClick={() => signIn("google")}>Google</button>;
        default:
            break;
    }
};

export default SigninBtn;
