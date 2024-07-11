"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { googleProfile } from "../services/googleProfile";
import { validatePhoneNumber } from "../services/validatePhoneNumber";
import { useSession } from "next-auth/react";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import { checkUserExistByGoogleLogin } from "@/app/services/checkUserExistByGoogleLogin";

const GoogleProfile = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const { status, data: session } = useSession();

    // console.log('=>>> google profile page session status', status)
    // console.log('=>>> google profile page session data', session)

    const [formData, setFormData] = useState({
        name: session?.user?.name || "",
        phone: "",
        email: session?.user?.email || "",
        password: "",
        account_provider: "google",
    });

    const googleImage = session?.user?.image || "";
    const googleEmail = session?.user?.email || "";
    const formData2 = {
        email: googleEmail,
    };

    useEffect(() => {
        async function fetchData() {
            if (session != undefined) {
                console.log("=>>> fetch data...", session);
                if (googleImage) {
                    const data = await checkUserExistByGoogleLogin(formData2);
                    if (
                        data?.message ==
                        "Already User Exists Account Provider Customer"
                    ) {
                        setLoading(true);
                        console.log("=>>> redirect to dashboard", data?.message);
                        router.push(`/dashboard`);
                    }
                }
            }
        }
        fetchData();
        setFormData({
            ...formData,
            name: session?.user?.name,
            email: session?.user?.email,
        });
    }, [session?.user?.email]);

    console.log("=>>> formdata before input changes", formData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        console.log("=>>> formdata after input changes", formData);
    };

    const handleRegistration = async (e) => {
        e.preventDefault();

        if (!formData.phone || !formData.password) {
            setErrorMessage("Please provide required information");
            return;
        }

        try {
            console.log("=>>> formdata before input submit", formData);
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

    setTimeout(() => {
        console.log("=>>> This runs after 1 seconds.");
        // Add any additional code you want to execute here
        setLoading(true);
    }, 1000);

    return (
        <div>
            {loading === true ? (
                <PrivateRoute>
                    <div className="container">
                        <div className="row justify-content-center user-login-section">
                            <div className="col-md-5">
                                <div className="user-login-area shadow rounded-4 px-3 py-5">
                                    <h1 className="text-center text-capitalize">
                                        Complete your account.
                                    </h1>
                                    {errorMessage && (
                                        <h3 style={{ color: "#f00" }}>
                                            {errorMessage}
                                        </h3>
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
                </PrivateRoute>
            ) : (
                <div className="body-loading">
                    <h2>Loading...</h2>
                </div>
            )}
        </div>
    );
};

export default GoogleProfile;
