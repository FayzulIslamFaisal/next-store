"use client";
import Link from "next/link";
import SigninBtn from "../components/SigninBtn";
import { useState } from "react";
import { signIn } from "next-auth/react";

const login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            username: formData.username,
            password: formData.password,
            redirect: true,
            callbackUrl: "/",
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center user-login-section">
                <div className="col-md-5">
                    <div className="user-login-area shadow rounded-4 px-3 py-5">
                        <h1 className="text-center text-capitalize">
                            Login to your account.
                        </h1>
                        <div className="user-login-form">
                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="number"
                                        className="form-label"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="number"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
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
                                    <SigninBtn provider="facebook" />
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

export default login;
