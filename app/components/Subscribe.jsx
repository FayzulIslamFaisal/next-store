import React from 'react'

const Subscribe = () => {
    return (
        <div className="nh-subscribe-form">
            <form>
                <div className="d-flex">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="your email address here..."
                    />
                    <button
                        type="submit"
                        className="nh-subscribe-btn text-white text-uppercase"
                    >
                        SUBSCRIBE
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Subscribe