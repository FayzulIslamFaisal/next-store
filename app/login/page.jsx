import Link from 'next/link'

const login = () => {
    return (
        <div className='container'>
            <div className="row justify-content-center user-login-section">
                <div className="col-md-5">
                    <div className="user-login-area shadow rounded-4 px-4 py-5">
                        <h1 className='text-center text-capitalize'>Login to your account.</h1>
                        <div className="user-login-form">
                            <form>
                                <div class="mb-3">
                                    <label for="number" class="form-label"> Phone Number</label>
                                    <input type="text" class="form-control" id="number" />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" />
                                </div>
                                <div class="mb-3 form-check d-flex align-items-center justify-content-between ">
                                    <div className="inner-field">
                                        <input type="checkbox" class="form-check-input" id="remember" />
                                        <label class="form-check-label" for="remember">Remember Me</label>
                                    </div>
                                    <div className="inner-field">
                                        <Link href="#">Forgot Password ?</Link>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Login</button>
                            </form>
                            <div className="user-social-login mt-3">
                                <label class="form-label">Or Login With</label>
                                <div className="mb-3 user-social-login-item d-flex align-items-center  justify-content-center ">
                                    <button>Facebook</button>
                                    <button>Google</button>
                                </div>
                                <p className='text-center'>New to Nagadhat? <Link href="/registration">Create an account</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login