import React from 'react'
import WithdrawChart from './WithdrawChart'

const WithdrawTopBanner = () => {
    return (
        <>
            <div className="w-100 withdraw-top-section">
                <div className="d-flex flex-column flex-md-row gap-5 justify-content-between align-items-center">
                    <div className="text-black">
                        <h2 className="fw-bold">50000</h2>
                        <p className="fs-6">Withdrawn Balance</p>
                    </div>
                    <WithdrawChart />
                </div>
            </div>
        </>
    )
}

export default WithdrawTopBanner
