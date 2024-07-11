"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { googleProfile } from "../services/googleProfile";
import { validatePhoneNumber } from "../services/validatePhoneNumber";
import { useSession } from "next-auth/react";

const GoogleProfile = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [addtPassword, setAddtPassword] = useState(false);
    const router = useRouter();
    const { status, data: session } = useSession();

    // console.log('=>>> google profile page session status', status)
    // console.log('=>>> google profile page session data', session)

    const [formData, setFormData] = useState({
        name: session?.user?.name || "",
        phone: "",
        email: session?.user?.email || "",
        password: "",
        confpassword: "",
        account_provider: "google",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegistration = async (e) => {
        e.preventDefault();

        if (!formData.phone || !formData.password || formData.confpassword) {
            setErrorMessage("Please provide required information");
            return;
        }

        try {
            const res = await googleProfile(formData);

            if (res?.success != true) {
                alert(res.message);
                return;
            }

            router.push(`/dashboard`);
        } catch (error) {
            alert("Something went wrong. Please try after sometime");
        }
    };

    useEffect(() => {
        const checkPhoneNumberValidity = async () => {
            setErrorMessage("");
            const phone_number = formData.phone;
            const phone_number_length = phone_number?.length;

            if (phone_number_length < 11) {
                return;
            }

            try {
                const res = await validatePhoneNumber({
                    phone: formData.phone,
                });

                if (res?.message.includes("Already Exists")) {
                    setErrorMessage(res?.message);
                } else {
                    setErrorMessage("");
                }
            } catch (error) {
                alert("Something went wrong. Please try after sometime");
                console.log(error);
            }
        };
        checkPhoneNumberValidity();
    }, [formData.phone]);

    const handleSetPassword = () => {
        setAddtPassword(!addtPassword);
    };

    return (
        <div className="container">
            <div className="row justify-content-center user-login-section">
                <div className="col-md-5">
                    <div className="user-login-area shadow rounded-4 px-3 py-5">
                        <h1 className="text-center text-capitalize">
                            Complete your account.
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
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <button
                                        onClick={handleSetPassword}
                                        className=" d-flex align-items-center gap-2 border-0 outline-0 bg-transparent"
                                    >
                                        <span
                                            style={{
                                                color: "var(--color-414042)",
                                            }}
                                        >
                                            Do you Set a Password?
                                        </span>{" "}
                                        <small
                                            title="Set Password  "
                                            className="fs-6 fw-medium"
                                            style={{
                                                color: "var(--color-414042)",
                                            }}
                                        >
                                            +
                                        </small>
                                    </button>
                                </div>
                                {addtPassword && (
                                    <div>
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
                                        <div className="mb-3">
                                            <label
                                                htmlFor="confpassword"
                                                className="form-label"
                                            >
                                                Confirm Password <span>*</span>
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="confpassword"
                                                name="confpassword"
                                                required
                                                value={formData.confpassword}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={handleRegistration}
                                >
                                    Continue
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleProfile;
