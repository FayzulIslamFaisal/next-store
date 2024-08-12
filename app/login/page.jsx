"use client";
import Link from "next/link";
import SigninBtn from "../components/SigninBtn";
import React, { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Login = () => {
    const router = useRouter();
    const { status, data: session } = useSession();

    useEffect(() => {
        async function fetchData() {
            if (session != undefined) {
                // console.log("=>>> redirect to dashboard");
                router.push(`/dashboard`);
            }
        }
        fetchData();
    }, [session?.user?.email]);

    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!formData.username || !formData.password) {
            setErrorMessage("Please provide required information");
            return;
        }

        const result = await signIn("credentials", {
            username: formData.username,
            password: formData.password,
            redirect: false,
        });

        if (result.error) {
            setErrorMessage("Invalid Credentials");
            return;
        }
        router.push("/dashboard");
    };

    return (
        <div className="container">
            <div className="row justify-content-center user-login-section">
                <div className="col-md-5">
                    <div className="user-login-area shadow rounded-4 px-3 py-5">
                        <h1 className="text-center text-capitalize">
                            Login to your account.
                        </h1>
                        {errorMessage && (
                            <h3 style={{ color: "#f00" }}>{errorMessage}</h3>
                        )}
                        <div className="user-login-form">
                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="number"
                                        className="form-label"
                                    >
                                        Phone Number <span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="number"
                                        name="username"
                                        required
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        Password <span>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3 form-check d-flex align-items-center justify-content-between ">
                                    <div className="inner-field">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="remember"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="remember"
                                        >
                                            Remember Me
                                        </label>
                                    </div>
                                    <div className="inner-field">
                                        <Link href="#">Forgot Password ?</Link>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            </form>
                            <div className="user-social-login mt-3">
                                <label className="form-label">
                                    Or Login With
                                </label>
                                <div className="mb-3 user-social-login-item d-flex align-items-center  justify-content-center ">
                                    {/* <SigninBtn provider="facebook" /> */}
                                    <SigninBtn provider="google" />
                                </div>
                                <p className="text-center">
                                    New to Nagadhat?{" "}
                                    <Link href="/registration">
                                        Create an account
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
