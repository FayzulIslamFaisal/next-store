const SetForgotPasswordPage = () => {
    return (
        <>
            <section className="users-registration-otp-section vh-100 d-flex">
                <div className="container d-flex align-items-center justify-content-center">
                    <div className="row">
                        <div className="col-12">
                            <div className="users-registration-otp one-time-pass">
                                <div className="users-registration-otp-title pb-1">
                                    <h1>Set Forget Password</h1>
                                </div>
                                <form className="d-flex flex-column gap-3">
                                    <div>
                                        <label
                                            className="form-label"
                                            htmlFor="password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            required
                                            name="password"
                                        />
                                    </div>
                                    <div className="pb-2">
                                        <label
                                            className="form-label"
                                            htmlFor="confirm_password"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            required
                                            name="confirm_password"
                                        />
                                    </div>
                                    <div>
                                        <button
                                            className="w-100 add-to-cart-link border-0"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SetForgotPasswordPage;
