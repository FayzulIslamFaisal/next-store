"use client";
import { useState, useEffect } from "react";
import { getOTPVerify } from "../services/getOTPVerify";
import { getResendOTP } from "../services/getResendOTP";
import { getBackRegistration } from "../services/getBackRegistration";
import { useSearchParams, useRouter } from "next/navigation";

const OTP = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    let phone = searchParams.get("phone") ? searchParams.get("phone") : '';
    const [otp, setOtp] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        async function verifyOTP() {
            if (!phone || !otp) {
                setErrorMessage("Please provide required information");
            }

            if (errorMessage) {
                return;
            }

            console.log("=>>> OTP Submitted: ", phone, otp);

            try {
                const res = await getOTPVerify({
                    phone: phone,
                    otp: otp,
                });
                if (!res?.success) {
                    alert(res.message);
                    return;
                }

                window.location.href = "/login";
            } catch (error) {
                alert("Something went wrong. Please try after sometime");
            }
        }

        verifyOTP();
    };

    const handleOTPSubmit = (e) => {
        e.preventDefault();

        async function resendOTP() {
            if (!phone) {
                setErrorMessage("Please provide required information");
            }

            if (errorMessage) {
                return;
            }

            console.log("=>>> Resend OTP Submitted: ", phone);

            try {
                const res = await getResendOTP({
                    phone: phone
                });
                if (!res?.success) {
                    alert(res.message);
                    return;
                }

                alert("Successfully Resend OTP. Please check again!");

                
            } catch (error) {
                alert("Something went wrong. Please try after sometime");
            }
        }

        resendOTP();
    };

    const handleBackSubmit = (e) => {
        e.preventDefault();

        async function backRegistration() {
            if (!phone) {
                setErrorMessage("Please provide required information");
            }

            if (errorMessage) {
                return;
            }

            console.log("=>>> Back Registration Submitted: ", phone);

            try {
                const res = await getBackRegistration({
                    phone: phone
                });

                if (!res?.success) {
                    alert(res.message);
                    return;
                }

                router.push("/registration");

            } catch (error) {
                alert("Something went wrong. Please try after sometime");
            }
        }

        backRegistration();
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="users-registration-otp">
                        <div className="users-registration-otp-title">
                            <h1>OTP Verify</h1>
                        </div>
                        <form className="d-flex flex-column gap-4" role="form" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    className="form-label"
                                    htmlFor="user-otp"
                                >
                                    OTP Code
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    name="user-otp"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                            <div>
                                <button
                                    className="w-100 add-to-cart-link border-0"
                                    type="submit"
                                >
                                    Verify
                                </button>
                            </div>
                        </form>
                        <div className="pt-4">
                            <p className="pb-2">
                                * check your phone or email for OTP code.
                            </p>
                            <div className=" d-flex justify-content-between align-items-center">
                                {/* <a
                                    className="users-registration-otp-back-btn"
                                    href="#"
                                >
                                    <i className="fa-solid fa-arrow-left-long"></i>
                                    <span>Back</span>
                                </a> */}
                                <div>
                                    <button
                                        className="add-to-cart-link border-0"
                                        onClick={handleBackSubmit}
                                    >
                                        Back
                                    </button>
                                </div>
                                <div className="resend-otp-timar">
                                    <button
                                        className="add-to-cart-link border-0"
                                        onClick={handleOTPSubmit}
                                    >
                                        resend otp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OTP;

