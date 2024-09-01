"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { postForgetPasswordOtp } from "../services/forgetpassword/postForgetPasswordOtp";

const page = () => {
    const [otpMobileNumber, setOtpMobileNumber] = useState({
        user_phone: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await postForgetPasswordOtp(
                otpMobileNumber.user_phone
            );
            if (response.error) {
                setError(
                    response.message || "Failed to send OTP. Please try again."
                );
            } else {
                setSuccess("OTP sent successfully!");
                router.push(
                    `/otp?forget_password=${otpMobileNumber.user_phone}`
                );
            }
        } catch (err) {
            setError("An error occurred. Please try again later.");
        }
    };
    const handleInputChange = (e) => {
        setOtpMobileNumber({
            ...otpMobileNumber,
            user_phone: e.target.value,
        });
    };

    return (
        <>
            <section className="users-registration-otp-section vh-100 d-flex">
                <div className="container d-flex align-items-center justify-content-center">
                    <div className="row">
                        <div className="col-12">
                            <div className="users-registration-otp one-time-pass">
                                <div className="users-registration-otp-title pb-1">
                                    <h1>Forgot Password?</h1>
                                </div>
                                <form
                                    onSubmit={handleSubmit}
                                    className="d-flex flex-column gap-3"
                                >
                                    <div>
                                        <label
                                            className="form-label"
                                            htmlFor="user_phone"
                                        >
                                            Mobile Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            name="user_phone"
                                            value={otpMobileNumber.user_phone}
                                            onChange={handleInputChange}
                                            placeholder="Please enter valid Mobile number"
                                        />
                                    </div>
                                    {error && (
                                        <div className="alert alert-danger">
                                            {error}
                                        </div>
                                    )}
                                    {success && (
                                        <div className="alert alert-success">
                                            {success}
                                        </div>
                                    )}

                                    <div>
                                        <button
                                            className="w-100 add-to-cart-link border-0"
                                            type="submit"
                                        >
                                            Get Code
                                        </button>
                                    </div>
                                </form>
                                <div className="pt-2">
                                    <Link href="/login">Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default page;
