"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { registerUser } from "../services/registerUser";
import { validatePhoneNumber } from "../services/validatePhoneNumber";
import { getRequestPath } from "../utils";

const Registration = () => {
    const router = useRouter();
    const { status, data: session } = useSession();

    useEffect(() => {
        async function fetchData() {
            if (session != undefined) {
                // console.log("=>>> redirect to dashboard");
                router.push(getRequestPath());
            }
        }
        fetchData();
    }, [session?.user?.email]);

    const [errorMessage, setErrorMessage] = useState("");
    const [existsEmail, setExistsEmail] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        gender: "",
    });

    const handleInputChange = (e) => {
        // console.log('=>>> formdata', formData)
        setFormData((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };

    const valideateInput = (formValue) => {
        for (const input in formValue) {
            if (["name", "phone", "password"].includes(input)) {
                if (!formValue[input]) {
                    return false;
                }
            }
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        async function createUser() {
            const isValidInput = valideateInput(formData);
            if (!isValidInput) {
                setErrorMessage("Please provide required information");
            }

            if (errorMessage) {
                return;
            }

            try {
                const res = await registerUser(formData);

                if (res?.success != true) {
                    alert(res.message);
                    return;
                }

                router.push(`/otp?phone=${formData.phone}`);
            } catch (error) {
                alert("Something went wrong. Please try after sometime");
            }
        }

        createUser();
    };

    useEffect(() => {
        const checkPhoneNumberValidity = async () => {
            setErrorMessage("");
            const phone_number = formData.phone;
            let phone_number_length = phone_number.length;

            if (phone_number_length < 11) {
                setExistsEmail("");
                return;
            }

            if ((phone_number_length = 11)) {
                try {
                    const res = await validatePhoneNumber({
                        phone: formData.phone,
                    });

                    if (res?.message.includes("Already Exists")) {
                        setFormData({ ...formData, email: res.email });
                        setErrorMessage(res?.message);

                        setExistsEmail(res.email);
                    } else {
                        setErrorMessage("");
                    }
                } catch (error) {
                    alert("Something went wrong. Please try after sometime");
                    console.log(error);
                }
            }

            return;
        };
        checkPhoneNumberValidity();
    }, [formData.phone]);

    return (
        <div className="container">
            <div className="row justify-content-center user-login-section">
                <div className="col-md-5">
                    <div className="user-login-area shadow rounded-4 px-3 py-5">
                        <h1 className="text-center text-capitalize">
                            registration.
                        </h1>
                        {errorMessage && (
                            <h3 style={{ color: "#f00" }}>{errorMessage}</h3>
                        )}
                        <div className="user-login-form">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Name <span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="number"
                                        className="form-label"
                                    >
                                        Phone Number <span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="form-control"
                                        id="number"
                                        placeholder="Enter Phone Number"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter Email"
                                        value={
                                            existsEmail
                                                ? existsEmail
                                                : formData.email
                                        }
                                        onChange={handleInputChange}
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
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3 ">
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id="gender1"
                                            value="male"
                                            onChange={handleInputChange}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="gender1"
                                        >
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id="gender2"
                                            value="female"
                                            onChange={handleInputChange}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="gender2"
                                        >
                                            Female
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <p>
                                        By clicking "Continue", I agree to
                                        Nagadhat's
                                        <Link href="#">
                                            Terms and Conditions
                                        </Link>
                                        and <Link href="#">Privacy Policy</Link>
                                    </p>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Continue
                                </button>
                            </form>
                            <div className="user-social-login mt-3">
                                <label className="form-label">
                                    Or Sign Up With
                                </label>
                                <div className="mb-3 user-social-login-item d-flex align-items-center  justify-content-center ">
                                    {/* <button>Sign in with Facebook</button> */}
                                    <button>
                                        {" "}
                                        <Image
                                            width={25}
                                            height={25}
                                            alt="google-img"
                                            src="/images/google-img.png"
                                        ></Image>{" "}
                                        Sign in with Google
                                    </button>
                                </div>
                                <p className="form-label">
                                    <Link href="/"> Back to home</Link>
                                </p>
                                <p className="text-center">
                                    Existing User ?{" "}
                                    <Link href="/login">Login here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
