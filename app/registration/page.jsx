import Link from 'next/link'
import React from 'react'

const registration = () => {
    return (
        <div className='container'>
            <div className="row justify-content-center user-login-section">
                <div className="col-md-5">
                    <div className="user-login-area shadow rounded-4 px-3 py-5">
                        <h1 className='text-center text-capitalize'>registration.</h1>
                        <div className="user-login-form">
                            <form>
                                <div className="mb-3">
                                    <label for="name" className="form-label"> Name <span>*</span> </label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter Your Name" />
                                </div>
                                <div className="mb-3">
                                    <label for="number" className="form-label"> Phone Number <span>*</span> </label>
                                    <input type="text" className="form-control" id="number" placeholder="Enter Phone Number" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label"> Email (Optional) </label>
                                    <input type="text" className="form-control" id="email" placeholder="Enter Email" />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Password  <span>*</span> </label>
                                    <input type="password" className="form-control" placeholder='Enter Password' id="password" />
                                </div>
                                <div className="mb-3 ">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="gender1" value="male" />
                                        <label className="form-check-label" for="gender1">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="gender2" value="female" />
                                        <label className="form-check-label" for="gender2">Female</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <p>By clicking "Continue", I agree to Nagadhat's <Link href="#">Terms and Conditions</Link> and <Link href="#">Privacy Policy</Link> </p>
                                </div>
                                <button type="submit" className="btn btn-primary">Continue</button>
                            </form>
                            <div className="user-social-login mt-3">
                                <label className="form-label">Or Sign Up With</label>
                                <div className="mb-3 user-social-login-item d-flex align-items-center  justify-content-center ">
                                    <button>Facebook</button>
                                    <button>Google</button>
                                </div>
                                <p className="form-label"><Link href="/"> Back to home</Link></p>
                                <p className='text-center'>Existing User ? <Link href="/login">Login here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default registration